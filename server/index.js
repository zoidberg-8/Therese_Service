const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/dummy');

const app = express();
const PORT = 7018;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});