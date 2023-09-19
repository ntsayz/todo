const express = require('express');
const { Pool } = require('pg');

const app = express();
app.use(express.json());
const port = 3000;

const pool = new Pool({
  host: 'db',  // this should match the service name of PostgreSQL in docker-compose.yml
  user: 'postgres',
  password: 'mysecretpassword',
  database: 'tododb'
});

app.get('/', async (req, res) => {
  const result = await pool.query('SELECT NOW()');
  res.send(`Database says the time is: ${result.rows[0].now}`);
});

app.get('/todo_all',async(req,res)  => {
  try {
      const result = await pool.query('SELECT title, description FROM todos');
      res.json(result.rows);
  } catch (err) {
      res.status(500).send('Error retrieving todos.');
      console.error(err.message);
  }
});

app.post('/todo', async (req, res) => {
  try {
    const { title, description } = req.body;

    // Check for required fields
    if (!title || !description) {
      return res.status(400).send('Title and description are required.');
    }

    const result = await pool.query(
      'INSERT INTO todos (title, description) VALUES ($1, $2) RETURNING id',
      [title, description]
    );

    res.send({
      success: true,
      todo_id: result.rows[0].id
    });
  }catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).send(`Internal Server Error: ${error.message}`);
  }
});

app.listen(port, () => {
  console.log(`API Gateway listening at http://localhost:${port}`);
});