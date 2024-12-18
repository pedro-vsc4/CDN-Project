require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8085;
const SERVICE_NAME = process.env.SERVICE_NAME || 'Product Service';

// Product-specific routes
app.get('/product', (req, res) => {
  res.status(200).json({ message: 'Product Service: Handling product data' });
});

app.get('/product/health', (req, res) => {
  res.status(200).send('Product Service is healthy');
});

app.listen(PORT, () => {
  console.log(`Product Service running on port ${PORT}`);
});