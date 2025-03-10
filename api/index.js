const express = require('express');
const app = express();

app.use(express.json());

app.post('/webhook', (req, res) => {
  console.log('Webhook recibido:', req.body);
  res.status(200).json({ message: 'Webhook recibido' });
});

module.exports = app;
