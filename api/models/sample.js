'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SampleSchema = new Schema({
  firstname: {
    type: String,
    Required: 'Kindly enter the name of the task'
  },
  lastname: {
    type: String
  },
  mobile: {
    type: String
  }
});

module.exports = mongoose.model('Samples', SampleSchema, 'sample');