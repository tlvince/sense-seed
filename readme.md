# sense-seed

> Seed data generator for the Sense Ebola suite

Create `[count]` documents of pseudo FormHub models, formatted as a CouchDB bulk
documents JSON object.

## Usage

Pass output to stdout:

```shell
node index.js [count]
```

Push to a CouchDB instance:

```shell
node index.js [count] | curl -X POST -H "Content-Type: application/json" -d @- [user]:[pass]@[host]:[port]/[db]/_bulk_docs
```

## Author

© 2014 Tom Vincent <git@tlvince.com>

## License

Released under the [MIT license](http://tlvince.mit-license.org).
