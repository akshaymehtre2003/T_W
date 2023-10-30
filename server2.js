const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Create a MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_db_user',
  password: 'your_db_password',
  database: 'travel_website',
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to the database');
  }
});

// Middleware to parse JSON requests
app.use(express.json());

// Create a user registration endpoint
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  // Insert user data into the database
  const insertUser = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
  db.query(insertUser, [username, email, password], (err, result) => {
    if (err) {
      console.error('User registration error:', err);
      res.status(500).json({ message: 'Registration failed' });
    } else {
      console.log('User registered successfully');
      res.status(200).json({ message: 'Registration successful' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
