require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8083;
const SERVICE_NAME = process.env.SERVICE_NAME || 'User Service';

// User-specific routes
app.get('/user', (req, res) => {
  res.status(200).json({ message: 'User Service: Handling user data' });
});

app.get('/user/health', (req, res) => {
  res.status(200).send('User Service is healthy');
});

app.listen(PORT, () => {
  console.log(`User Service running on port ${PORT}`);
})