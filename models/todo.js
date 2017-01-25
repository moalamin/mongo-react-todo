//get an instance of mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Todo', new Schema({
  task: String,
  complete: Boolean
}));

