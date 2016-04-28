var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var heroeSchema = new Schema ({
  name: String,
  first_name: String,
  last_name: String,
  city: String,
  power_name: String
});

var Heroes = mongoose.model('heroes', heroeSchema);

module.exports = Heroes;
