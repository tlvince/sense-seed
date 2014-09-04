'use strict';

var db = require('./db');
var factories = require('./factories');
var couchAdapter = require('./adapters/couchdb');

var count = process.argv[2] || 1;

factories.build();
factories.save(count);

var docs = db.allDocs();
docs = couchAdapter(docs);
docs = JSON.stringify(docs);
console.log(docs);
