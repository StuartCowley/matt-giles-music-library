const express = require('express');
// Import your artistRouter into app.js and direct all /artists to your artistController.
const { artistRouter } = require('./routes/artist');

const app = express();

app.use(express.json());

app.use('/artists', artistRouter);

app.get('/', (req, res) => {
  res.send('Hello World');
});

module.exports = app;
