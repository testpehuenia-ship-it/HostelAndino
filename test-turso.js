import { createClient } from "@libsql/client";
import dotenv from "dotenv";
dotenv.config();

const client = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

async function main() {
  try {
    await client.execute(`
      CREATE TABLE IF NOT EXISTS hostel_config (
        id INTEGER PRIMARY KEY,
        data TEXT NOT NULL
      )
    `);
    console.log("Table 'hostel_config' created or already exists.");

    const res = await client.execute("SELECT * FROM hostel_config WHERE id = 1");
    if (res.rows.length === 0) {
      console.log("No data found. Inserting default data.");
      // We will insert empty JSON for now, or we can use the default from db.js
      await client.execute({
        sql: "INSERT INTO hostel_config (id, data) VALUES (?, ?)",
        args: [1, "{}"]
      });
      console.log("Inserted default row.");
    } else {
      console.log("Row exists:", res.rows[0]);
    }
  } catch (err) {
    console.error("Error connecting to Turso:", err);
  }
}

main();
