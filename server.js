'use strict';

const express = require('express');

// Constants
const PORT = process.env.PORT || 3000;

// App
const app = express();
app.get('/', function (req, res) {
  res.send('This is Cloud Technology  \n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
