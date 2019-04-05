const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getAllImages = function(callback) {
  connection.query('SELECT * FROM products', (err, results) => {
    if (err) {
      callback(err, null);
    }
    callback(null, results);
  });
};

const getAllMains = function(callback) {
  connection.query('SELECT main_img FROM products', (err, results) => {
    if (err) {
      console.log('The problem is in the database')
      callback(err, null);
    }
    callback(null, results);
  });
};

module.exports = {
  connection,
  getAllImages,
  getAllMains
};