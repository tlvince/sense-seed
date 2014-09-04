'use strict';

var Factory = require('factory-lady');

var factories = [
  { labResult: 'lab-result' },
  { caseInvestigation: 'case-investigation' },
  { followUp: 'follow-up' }
];

var factoryNames = factories.map(function(factory) {
  return Object.keys(factory)[0];
});

var factoryPaths = factories.map(function(factory) {
  var name = Object.keys(factory)[0];
  return factory[name];
});

module.exports = {
  build: function build() {
    factoryPaths.forEach(function(factory) {
      require('./' + factory)();
    });
  },
  save: function save(count) {
    count = count || 1;
    factoryNames.forEach(function(factory) {
      for (var i = 0, len = count; i < len; i++) {
        Factory.create(factory);
      }
    });
  }
};
