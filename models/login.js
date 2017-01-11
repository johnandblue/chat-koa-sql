const mongoose = require('mongoose');

module.exports = mongoose.model('Login', {
  user: String,
  password: String
});
