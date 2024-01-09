const express = require('express');
const cors = require('cors');
const pg = require('pg');
const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const pool = new pg.Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'ecommerce',
  password: 'admin',
  port: 5432,
});

app.get('/products', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM product');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//registration of user
app.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const result = await pool.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *', [username, email, password]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).send('Internal Server Error');
  }
});

//fetching the users data
app.get('/login', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);

    if (result.rows.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const storedPasswordHash = result.rows[0].password;

    // const passwordMatch = await bcrypt.compare(password, storedPasswordHash);
    if (password !== storedPasswordHash) { return res.status(401).json({ message: 'Invalid credentials' }); }
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).send('Internal Server Error');
  }
});


// app.get('/searchedText', async(req, res) => {
//   searchedTerm = req.params.searchedText; 

//   const result = await pool.query('SELECT * FROM product WHERE title LIKE ?', [`%${searchedTerm}%`]); //how?
//   res.send(result)
// })

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});