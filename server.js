const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Simulated user database
const users = [];

// Register endpoint
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  if (users.find(user => user.email === email)) {
    return res.status(400).json({ message: 'Email already registered' });
  }
  users.push({ username, email, password });
  res.status(201).json({ message: 'User registered successfully' });
});

// List all users
app.get('/users', (req, res) => {
  res.json(users);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
