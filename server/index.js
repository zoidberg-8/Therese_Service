const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');

const app = express();
const PORT = 7018;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/api/images', (req, res) => {
  db.generateFakeData(db.fakeData, 100, (err, results) => {
    if (err) {
      console.log('Error generating fake results');
    }
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});