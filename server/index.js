const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();
const PORT = 7018;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/api/images', (req, res) => {
  db.getAllImages((err, results) => {
    if (err) {
      console.log('Error for GET request for images from server');
    }
    res.json(results);
  });
});

app.get('/api/main', (req, res) => {
  db.getAllMains((err, results) => {
    if (err) {
      console.log('Error for GET request for main images from server');
    }
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});