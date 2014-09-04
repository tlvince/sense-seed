'use strict';

var docs = [];

module.exports = {
  save: function save(doc) {
    docs.push(doc);
  },
  allDocs: function allDocs() {
    return docs;
  }
};
