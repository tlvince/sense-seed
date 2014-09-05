'use strict';

var faker = require('../modules/faker');
var Factory = require('factory-lady');
var Model = require('../models');

module.exports = function() {
  /*eslint camelcase: 0 */
  Factory.define('labResult', Model, {
    _formID: 20,
    'ClinicalSignsandSymptoms/AnyFever': function(cb) {
      cb(faker.random.booleany());
    },
    'ClinicalSignsandSymptoms/Comment_other_symptoms': function(cb) {
      cb(faker.Company.catchPhrase());
    },
    'ClinicalSignsandSymptoms/Temp_reading': function(cb) {
      cb(faker.random.number(0, 100));
    },
    'ClinicalSignsandSymptoms/date_initial_symptom': function(cb) {
      cb(faker.Date.recent(7));
    },
    'HospitalizationInformation/date_hospital_admission': function(cb) {
      cb(faker.Date.recent(7));
    },
    'HospitalizationInformation/date_of_isolation': function(cb) {
      cb(faker.Date.recent(7));
    },
    'HospitalizationInformation/healthfacility_name': function(cb) {
      cb(faker.Company.companyName());
    },
    'HospitalizationInformation/patient_admitted': function(cb) {
      cb(faker.random.booleany());
    },
    'HospitalizationInformation/patient_in_isolation': function(cb) {
      cb(faker.random.booleany());
    },
    'LabInformation/date_of_results': function(cb) {
      cb(faker.Date.recent(7));
    },
    'LabInformation/date_specimen_collected': function(cb) {
      cb(faker.Date.recent(7));
    },
    'LabInformation/labclass': function(cb) {
      cb(faker.Lorem.sentence(1));
    },
    'LabInformation/labstatusresults': function(cb) {
      cb(faker.Lorem.sentence(1));
    },
    'LabInformation/sampletypes': function(cb) {
      cb(faker.Lorem.sentence(2));
    },
    'PatientInformation/age': function(cb) {
      cb(faker.random.number(1, 100));
    },
    'PatientInformation/date_of_report': function(cb) {
      cb(faker.Date.recent(7));
    },
    'PatientInformation/date_residing_atloc': function(cb) {
      cb(faker.Date.recent(7));
    },
    'PatientInformation/gender': '2-Female',
    'PatientInformation/healthfacility_case_id': 'DHB/67/8/14',
    'PatientInformation/if_dead_date': function(cb) {
      cb(faker.Date.recent(7));
    },
    'PatientInformation/lga': function(cb) {
      cb(faker.Company.companyName());
    },
    'PatientInformation/lga_residence': function(cb) {
      cb(faker.Company.companyName());
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
    'PatientInformation/outbreak_case_id': '061232',
    'PatientInformation/state': function(cb) {
      cb(faker.Address.usState());
    },
    'PatientInformation/state_residence': function(cb) {
      cb(faker.Address.usState());
    },
    'PatientInformation/status_of_patient': function(cb) {
      cb(faker.Helpers.randomize('Alive', 'Dead'));
    },
    'PatientInformation/surname': function(cb) {
      cb(faker.Name.lastName());
    },
    'PatientInformation/town_residence': function(cb) {
      cb(faker.Address.ukCounty);
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
      cb(faker.random.uuid());
    },
    _xform_id_string: 'EBO_LabForm2014',
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
