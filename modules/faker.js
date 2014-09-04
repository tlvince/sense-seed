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

module.exports = faker;
