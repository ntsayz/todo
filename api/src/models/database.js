const { Pool } = require('pg');
/*
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'tododb'
});
*/


const pool = new Pool({
  host: 'db',
  user: 'postgres',
  password: 'mysecretpassword',
  database: 'tododb'
});
module.exports = pool;