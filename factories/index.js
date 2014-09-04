'use strict';

var Factory = require('factory-lady');

var factories = [
  {
    name: 'labResult',
    path: 'lab-result'
  },
  {
    name: 'caseInvestigation',
    path: 'case-investigation'
  },
  {
    name: 'followUp',
    path: 'follow-up'
  }
];

module.exports = {
  build: function build() {
    factories.forEach(function(factory) {
      require('./' + factory.path)();
    });
  },
  save: function save(count) {
    count = count || 1;
    factories.forEach(function(factory) {
      for (var i = 0, len = count; i < len; i++) {
        Factory.create(factory.name);
      }
    });
  }
};
