const Pool = require("pg").Pool;
const dotenv = require("dotenv");
dotenv.config();
const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST || "127.0.0.1",
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME
});

module.exports = { pool } ;
