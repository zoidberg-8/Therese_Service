const mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  database: 'prodimgs'
});

connection.connect((err) => {
  if (err) {
    console.log('Not connected to database');
  }
  console.log('Connected to database');
});

module.exports = connection;