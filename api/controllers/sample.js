'use strict';

var mongoose = require('mongoose'),
  sample = mongoose.model('Samples');


exports.list = function(req, res) {
	sample.find({}, function(err, result) {
    if (err)
      res.send(err);
    res.json({ message: result });
  });
};

exports.updates = function(req, res) {
	console.log(req.body);
	sample.findOneAndUpdate({mobile: req.params.userId}, {$set: req.body}, {new: true}, function(err, result) {
    if (err)
      res.send(err);
    res.json({ message: result });
  });
};

exports.create = function(req, res) {
	var newrow = new sample(req.body);
	newrow.save(function(err, result) {
    if (err)
      res.send(err);
    res.json({ message: result });
  });
};