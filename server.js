const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const config = require('./config')[process.env.NODE_ENV];
const Todo = require('./models/Todo.js');
const TodoList = require('./models/TodoList.js');

const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/api/index', (req, res) => {
  TodoList.find({}, (err, todoLists) => {
    if (err) {
      res.json(err);
    } else {
      res.json(todoLists);
    }
  });
});

app.get('/api/find/:id', (req, res) => {
  console.log(req);
  TodoList.find({_id: req.params.id}, (err, todoList) => {
    if (err) {
      res.json(err);
    } else {
      res.json(todoList);
    }
  });
});

app.post('/api/create_list', (req, res) => {
  console.log(req.body);
  const todoList = new TodoList({
    name: req.body.name,
    items: []
  });

  todoList.save( (err, currentList) => {
    if (err) {
      res.json(err);
    } else {
      res.json(currentList);
    }
  });
});

app.post('/api/add_item/:todo_list_id/', (req, res) => {
  console.log('now creating a list... ');
  console.log(req.body);
  let todoList = TodoList.findOne({
    id: req.params.id
  })

  todoList.save( (err, currentList) => {
    if (err) {
      res.json(err);
    } else {
      res.json(currentList);
    }
  });
});

app.delete('/api/delete_list/:id', (req, res) => {
  TodoList.findByIdAndRemove(req.params.id,(err, todoList) => {
    if (err) {
      res.json(err);
    } else {
      res.json({message: 'Successfully deleted'});
    }
  });
});


//connect to db then express listen
mongoose.connect(config.db, () => {
  console.log("CONNECTED TO MONGO")
  app.listen(port, () => {
    console.log('App is running on port: ' + port);
  });
});
