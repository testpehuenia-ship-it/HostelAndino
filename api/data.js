const { createClient } = require('@libsql/client');

module.exports = async function handler(req, res) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const client = createClient({
    url: process.env.TURSO_DATABASE_URL,
    authToken: process.env.TURSO_AUTH_TOKEN,
  });

  try {
    if (req.method === 'GET') {
      res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
      const result = await client.execute("SELECT data FROM hostel_config WHERE id = 1");
      if (result.rows.length === 0) {
        // Return default empty object if table is somehow empty
        return res.status(200).json({});
      }
      return res.status(200).json(JSON.parse(result.rows[0].data));
    } 
    else if (req.method === 'POST' || req.method === 'PUT') {
      const newData = req.body;
      
      // Upsert the data with automatic backup
      const result = await client.execute("SELECT data FROM hostel_config WHERE id = 1");
      if (result.rows.length > 0) {
        // Save backup to id = 2
        const oldData = result.rows[0].data;
        const backupResult = await client.execute("SELECT id FROM hostel_config WHERE id = 2");
        if (backupResult.rows.length === 0) {
          await client.execute({
            sql: "INSERT INTO hostel_config (id, data) VALUES (?, ?)",
            args: [2, oldData]
          });
        } else {
          await client.execute({
            sql: "UPDATE hostel_config SET data = ? WHERE id = 2",
            args: [oldData]
          });
        }
        
        // Update main data
        await client.execute({
          sql: "UPDATE hostel_config SET data = ? WHERE id = 1",
          args: [JSON.stringify(newData)]
        });
      } else {
        await client.execute({
          sql: "INSERT INTO hostel_config (id, data) VALUES (?, ?)",
          args: [1, JSON.stringify(newData)]
        });
      }
      
      return res.status(200).json({ success: true, message: 'Data updated successfully' });
    }
    
    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Database error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
