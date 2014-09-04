'use strict';

var faker = require('../modules/faker');
var Factory = require('factory-lady');
var Model = require('../models');

module.exports = function() {
  /*eslint camelcase: 0 */
  Factory.define('followUp', Model, {
    _formID: 70,
    _attachments: [],
    _bamboo_dataset_id: '',
    _geolocation: function(cb) {
      cb([faker.Address.latitude(), faker.Address.longitude()]);
    },
    _id: function(cb) {
      cb(faker.random.number(1, 999));
    },
    _status: 'submitted_via_web',
    _submission_time: function(cb) {
      cb(faker.Date.recent(7));
    },
    _tags: [],
    _uuid: '587f93f3-36ca-4eb9-9a3f-31902fadc0d1',
    _xform_id_string: 'ebola_new_contact_form_v3',
    address: function(cb) {
      cb(faker.Address.streetAddress());
    },
    contact_tracer: function(cb) {
      cb(faker.Name.findName());
    },
    contact_type: function(cb) {
      cb(faker.Lorem.sentence(5));
    },
    date_of_first_visit: function(cb) {
      cb(faker.Date.recent(7));
    },
    date_of_last_contact: function(cb) {
      cb(faker.Date.recent(7));
    },
    date_of_visit: function(cb) {
      cb(faker.Date.recent(7));
    },
    deviceid: 'enketo.org:O4GNb9dhKmK9PhEk',
    endtime: '2014-09-04T16:51:20.000+01:00',
    'formhub/uuid': '077cf55983a24a82a6e89703206c079c',
    gps: '4.8168 7.0496 0 0',
    health_worker: function(cb) {
      cb(faker.random.booleany());
    },
    lga: 'Emuoha',
    manager: function(cb) {
      cb(faker.random.booleany());
    },
    'meta/instanceID': 'uuid:587f93f3-36ca-4eb9-9a3f-31902fadc0d1',
    new_contact_age: function(cb) {
      cb(faker.random.number(0, 100));
    },
    new_contact_name: function(cb) {
      cb(faker.Name.findName());
    },
    number_conveniences: function(cb) {
      cb(faker.random.number(0, 10));
    },
    number_in_hh: function(cb) {
      cb(faker.random.number(0, 10));
    },
    number_rooms: function(cb) {
      cb(faker.random.number(0, 10));
    },
    password: function(cb) {
      cb(faker.Lorem.sentence(1));
    },
    phone_number: function(cb) {
      cb(faker.PhoneNumber.phoneNumber());
    },
    sex: function(cb) {
      cb(faker.Helpers.randomize(['M', 'F']));
    },
    shared_conveniences: function(cb) {
      cb(faker.random.booleany());
    },
    'signs/diarrhoea': function(cb) {
      cb(faker.random.booleany());
    },
    'signs/haemorrhagic_sign': function(cb) {
      cb(faker.random.booleany());
    },
    'signs/headache': function(cb) {
      cb(faker.random.booleany());
    },
    'signs/maculopapular_rash': function(cb) {
      cb(faker.random.booleany());
    },
    'signs/malaiase': function(cb) {
      cb(faker.random.booleany());
    },
    'signs/muscle_pain': function(cb) {
      cb(faker.random.booleany());
    },
    'signs/pharyngitis': function(cb) {
      cb(faker.random.booleany());
    },
    'signs/vomiting': function(cb) {
      cb(faker.random.booleany());
    },
    simserial: '1c:e2:cc:b0:ea:5b',
    source_case_name: function(cb) {
      cb(faker.Name.findName());
    },
    starttime: function(cb) {
      cb(faker.Date.recent(7));
    },
    start: function(cb) {
      cb(faker.Date.recent(7));
    },
    state: function(cb) {
      cb(faker.Helpers.randomize(['Rivers', 'LAGOS']));
    },
    temperature: function(cb) {
      cb(faker.random.number(0, 100));
    },
    today: function(cb) {
      cb(faker.Date.recent(7));
    },
    verified: function(cb) {
      cb(faker.random.booleany());
    }
  });
};
