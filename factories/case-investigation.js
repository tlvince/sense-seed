'use strict';

var faker = require('../modules/faker');
var Factory = require('factory-lady');
var Model = require('../models');

module.exports = function() {
  /*eslint camelcase: 0 */
  Factory.define('caseInvestigation', Model, {
    _formID: 31,
    'Comment_other_symptoms': function(cb) {
      cb(faker.Lorem.sentence(20));
    },
    'ClinicalSignsandSymptoms/date_initial_symptom': function(cb) {
      cb(faker.Date.recent(7));
    },
    'HospitalizationInformation/date_of_isolation': function(cb) {
      cb(faker.Date.recent(7));
    },
    'HospitalizationInformation/labpcr': function(cb) {
      cb(faker.Helpers.randomize(['Positive', 'Negative']));
    },
    'HospitalizationInformation/labresult_available': function(cb) {
      cb(faker.random.booleany());
    },
    'HospitalizationInformation/patient_admitted': function(cb) {
      cb(faker.random.booleany());
    },
    'HospitalizationInformation/patient_in_isolation': function(cb) {
      cb(faker.random.booleany());
    },
    'PatientInformation/age': function(cb) {
      cb(faker.random.number(1, 100));
    },
    'PatientInformation/gender': '2-Female',
    'PatientInformation/if_dead_date': function(cb) {
      cb(faker.Date.recent(7));
    },
    'PatientInformation/location_illness_addy': function(cb) {
      cb(faker.Address.streetName());
    },
    'PatientInformation/location_illness_lga': function(cb) {
      cb(faker.Address.streetAddress());
    },
    'PatientInformation/location_illness_state': function(cb) {
      cb(faker.Address.usState());
    },
    'PatientInformation/occupation': function(cb) {
      cb(faker.Lorem.sentence(2));
    },
    'PatientInformation/othername': function(cb) {
      cb(faker.Name.firstName());
    },
    'PatientInformation/status_of_patient': function(cb) {
      cb(faker.Helpers.randomize('Alive', 'Dead'));
    },
    'PatientInformation/surname': function(cb) {
      cb(faker.Name.lastName());
    },
    'WELCOME/DataRecorder': function(cb) {
      cb(faker.Name.findName());
    },
    _attachments: [],
    _bamboo_dataset_id: '',
    _geolocation: function(cb) {
      cb([faker.Address.latitude(), faker.Address.longitude()]);
    },
    _id: function(cb) {
      cb(faker.random.number(1, 999));
    },
    _status: function(cb) {
      cb(faker.Lorem.sentence(1));
    },
    _submission_time: function(cb) {
      cb(faker.Date.recent(7));
    },
    _tags: [],
    _uuid: function(cb) {
      cb(faker.random.uuid('-'));
    },
    _xform_id_string: 'Ronke2',
    deviceid: '1c:e2:cc:b0:ea:5b',
    end: function(cb) {
      cb(faker.Date.recent(7));
    },
    'formhub/uuid': function(cb) {
      cb(faker.random.uuid({ unseperated: true }));
    },
    'meta/instanceID': function(cb) {
      cb('uuid:' + faker.random.uuid());
    },
    simserial: '1c:e2:cc:b0:ea:5b',
    start: function(cb) {
      cb(faker.Date.recent(7));
    },
    today: function(cb) {
      cb(faker.Date.recent(7));
    }
  });
};
