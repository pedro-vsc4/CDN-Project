require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8084;
const SERVICE_NAME = process.env.SERVICE_NAME || 'Order Service';

// Order-specific routes
app.get('/order', (req, res) => {
  res.status(200).json({ message: 'Order Service: Handling order data' });
});

app.get('/order/health', (req, res) => {
  res.status(200).send('Order Service is healthy');
});

app.listen(PORT, () => {
  console.log(`Order Service running on port ${PORT}`);
});