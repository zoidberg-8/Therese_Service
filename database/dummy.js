const mysql = require('./config.js');
const dummyData = require('../dummyData');

var seed = () => {
  dummyData.forEach((product) => {
    const { name, price, category, product_url, main_img, front_view, back_view, bottom_view, top_view, right_side } = product;
    var queryStr = 'INSERT INTO products (name, price, category, product_url, main_img, front_view, back_view, bottom_view, top_view, right_side) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    mysql.query(queryStr, [name, price, category, product_url, main_img, front_view, back_view, bottom_view, top_view, right_side], (err, results) => {
      if (err) {
        console.log(err);
      }
      console.log(results);
    });
  });
};

seed();
