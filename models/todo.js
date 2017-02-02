//get an instance of mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var TodoList = require('./TodoList.js');

module.exports = mongoose.model('Todo', new Schema({
  task: {type: String, required: true},
  complete: {type: Boolean, required: true, default: false}
}));

