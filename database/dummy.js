const db = require('./index.js');
const faker = require('faker');

for (var i = 0; i < 100; ++i) {
  var queryStr = 'INSERT INTO products (name, price, category, product_url, main_img, front_view, back_view, bottom_view, top_view, right_side) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  var params = [
    faker.name.findName(),
    faker.commerce.price(),
    faker.lorem.word(),
    faker.internet.url(),
    faker.image.imageUrl(),
    faker.image.imageUrl(),
    faker.image.imageUrl(),
    faker.image.imageUrl(),
    faker.image.imageUrl(),
    faker.image.imageUrl()
  ];
  db.connection.query(queryStr, params, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      console.log(results);
    }
  })
}
