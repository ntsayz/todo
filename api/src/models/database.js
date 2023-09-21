const { Pool } = require('pg');

const pool = new Pool({
  host: 'db',
  user: 'postgres',
  password: 'mysecretpassword',
  database: 'tododb'
});

module.exports = pool;


