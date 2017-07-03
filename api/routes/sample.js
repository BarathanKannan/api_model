'use strict';
module.exports = function(app) {
	var sample = require('../controllers/sample');

	app.route('/user').get(sample.list).post(sample.create);
  app.route('/user/:userId').put(sample.updates);

};