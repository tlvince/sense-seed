'use strict';

var db = require('../db');

function Model(fields) {
  this.add(fields);
}

Model.prototype.add = function(fields) {
  for (var field in fields) {
    this[field] = fields[field];
  }
};

Model.prototype.save = function() {
  db.save(this);
};

module.exports = Model;
