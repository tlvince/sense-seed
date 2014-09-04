'use strict';

// Top-level fields with leading underscores are reserved in CouchDB, so nest
// the FormHub doc using its ID as the key.
module.exports = function formHubToCouch(docs) {
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
};
