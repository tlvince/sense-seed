'use strict';

// Monkey patches for Faker

var faker = require('faker');

faker.random.booleany = function() {
  return faker.Helpers.randomize([
    '0',
    '1',
    'true',
    'false',
    'Yes',
    'No',
    'Y',
    'N'
  ]);
};

faker.random.uuid = function(options) {
  var now = Date.now();
  var pattern = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
  var uuid = pattern.replace(/[xy]/g, function (c) {
    var r = (now + Math.random() * 16) % 16 | 0;
    now = Math.floor(now / 16);
    return (c === 'x' ? r : r & 0x7 | 0x8).toString(16);
  });
  if (options && options.unseperated) {
    uuid = uuid.replace(/-/g, '');
  }
  return uuid;
};

module.exports = faker;
