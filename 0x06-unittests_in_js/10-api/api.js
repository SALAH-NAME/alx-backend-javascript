const express = require('express');

const server = express();
const SERVER_PORT = 7865;

server.use(express.json());

server.get('/', (_req, res) => {
  res.send('Welcome to the payment system');
});

server.get('/cart/:cartId(\\d+)', (req, res) => {
  const cartId = req.params.cartId;
  res.send(`Payment methods for cart ${cartId}`);
});

server.get('/available_payments', (_req, res) => {
  res.json({ payment_methods: { credit_cards: true, paypal: false } });
});

server.post('/login', (req, res) => {
  let userName = '';

  if (req.body) {
    userName = req.body.userName;
  }

  res.send(`Welcome ${userName}`);
});

server.listen(SERVER_PORT, () => {
  console.log(`API available on localhost port ${SERVER_PORT}`);
});

module.exports = server;
