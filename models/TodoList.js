// get instance of mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Todo = require('./Todo.js');

module.exports = mongoose.model('TodoList', new Schema({
  name: {type: String, required: true},
  items: [ Todo ]
}));
