const faker = require('faker');
const mysql = require('mysql');
const mysqlConfig =require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

var fake = faker();

var fakeData = {
  name: fake.name(),
  price: Math.random(),
  category: fake.word(),
  product_url: fake.url(),
  main_img: fake.imageUrl(),
  front_view: fake.imageUrl(),
  back_view: fake.imageUrl(),
  bottom_view: fake.imageUrl(),
  top_view: fake.imageUrl(),
  right_side: fake.imageUrl()
};

const generateFakeData = function(data, numOfSets, callback) {
  var params = [data.name, data.price, data.category, data.product_url, data.main_img, data.front_view, data.back_view, data.bottom_view, data.top_view, data.right_side]
  while (numOfSets) {
    connection.query('INSERT INTO products (name, price, category, product_url, main_img, front_view, back_view, bottom_view, top_view, right_side) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?', params, (err, results) => {
      if (err) {
        callback(err, null);
      }
      callback(null, results);
    });
  }
}

module.exports = {
  fakeData,
  generateFakeData
}