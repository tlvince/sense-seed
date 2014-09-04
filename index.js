'use strict';

var db = require('./db');
var factories = require('./factories');

var count = process.argv[2] || 10;

factories.build();
factories.save(count);

// Top-level fields with leading underscores are reserved in CouchDB, so nest
// the FormHub doc using its ID as the key.
function formHubToCouch(docs) {
  var couchDocs = {
    docs: []
  };
  docs.forEach(function(doc) {
    var couchDoc = {};
    /*eslint no-underscore-dangle: 0 */
    var id = doc._formID;
    delete doc._formID;
    couchDoc[id] = doc;
    couchDocs.docs.push(couchDoc);
  });
  return couchDocs;
}

var docs = db.allDocs();
docs = formHubToCouch(docs);
docs = JSON.stringify(docs);
console.log(docs);
