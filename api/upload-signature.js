const cloudinary = require('cloudinary').v2;

module.exports = async function handler(req, res) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Cloudinary picks up CLOUDINARY_URL from process.env automatically if available,
  // but we can explicitly set it just in case using the individual vars
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
  });

  if (req.method === 'POST' || req.method === 'GET') {
    try {
      const timestamp = Math.round(new Date().getTime() / 1000);
      const paramsToSign = {
        timestamp: timestamp,
        folder: 'hostelandino' // Optional: organize uploads in a folder
      };

      const signature = cloudinary.utils.api_sign_request(
        paramsToSign,
        process.env.CLOUDINARY_API_SECRET
      );

      return res.status(200).json({
        timestamp,
        signature,
        folder: 'hostelandino',
        cloudname: process.env.CLOUDINARY_CLOUD_NAME,
        apikey: process.env.CLOUDINARY_API_KEY
      });
    } catch (error) {
      console.error('Cloudinary Signature Error:', error);
      return res.status(500).json({ error: 'Failed to generate signature' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
};
