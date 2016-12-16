
let express = require('express');
let app     = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

module.exports = app;