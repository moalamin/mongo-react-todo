var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var config = require('./config');
var Todo = require('./models/todo');

var port = process.env.PORT || 4000;
mongoose.connect(config.db);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.get('/', function (req, res) {
  res.send( "App is now up and running." );
});

app.listen(port, function () {
  console.log( "App is running on port: " + port );
});
