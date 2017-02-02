var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var config = require('./config');
var Todo = require('./models/Todo.js');
var TodoList = require('./models/TodoList.js');

var port = process.env.PORT || 4000;
mongoose.connect(config.db);

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/index', function (req, res) {
  TodoList.find({}, function (err, todoLists) {
    if (err) {
      res.json(err);
    } else {
      res.json(todoLists);
    }
  });
});

app.get('/find/:id', function (req, res) {
  console.log(req);
  TodoList.find({_id: req.params.id}, function (err, todoList) {
    if (err) {
      res.json(err);
    } else {
      res.json(todoList);
    }
  });
});

app.post('/create_list', function (req, res) {
  var todoList = new TodoList({
    name: req.params.name,
    items: []
  });

  todoList.save(function (err, currentList) {
    if (err) {
      res.json(err);
    } else {
      res.json(currentList);
    }
  });
});

app.delete('/delete_list/:id', function (req, res) {
  TodoList.findByIdAndRemove(req.params.id, function (err, todoList) {
    if (err) {
      res.json(err);
    } else {
      res.json({message: 'Successfully deleted'});
    }
  });
});

app.listen(port, function () {
  console.log('App is running on port: ' + port);
});
