const faker = require('faker');
const fs = require('fs');

var fakeData = [];

var generateFakeData = function() {
  for (var i = 0; i < 100; ++i) {
    fakeData.push({
      name: faker.name.findName(),
      price: faker.commerce.price(),
      category: faker.lorem.word(),
      product_url: faker.internet.url(),
      main_img: faker.image.imageUrl(),
      front_view: faker.image.imageUrl(),
      back_view: faker.image.imageUrl(),
      bottom_view: faker.image.imageUrl(),
      top_view: faker.image.imageUrl(),
      right_side: faker.image.imageUrl()
    });
  }
  var jsonStr = JSON.stringify(fakeData);
  fs.writeFile('dummyData.json', jsonStr, 'utf8', (err) => {
    if (err) {
      console.log('Error writing fakeData file');
    }
    console.log('Done writing fakeData file');
  });
}

module.exports = generateFakeData;