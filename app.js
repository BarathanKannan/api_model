var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  sample = require('./api/models/sample'),
  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/firstdb'); 

var routes = require('./api/routes/sample');
routes(app);


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);



// const express = require('express');
// const app = express();
// var http = require('http');
// var mongo = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/firstdb";
// var output = "";

// mongo.connect(url, function(err, db) {
// 	if (err) throw err;
// 	db.collection("sample").find({}).toArray(function(err, result) {
// 		if (err) throw err;
// 		console.log(result);
// 		output = result;
// 		db.close();
// 	});
// });

// app.get('/', function (req, res) {
//   res.send("Hello World");
// });

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!')
// });


// var restify = require('restify');

// function respond(req, res, next) {
//   res.send('hello ' + req.params.name);
//   next();
// }

// var server = restify.createServer();
// server.get('/hello/:name', respond);
// server.head('/hello/:name', respond);

// server.listen(8080, function() {
//   console.log('%s listening at %s', server.name, server.url);
// });