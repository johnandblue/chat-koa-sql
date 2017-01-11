const mongoose = require('mongoose');

module.exports = mongoose.model('Login', {
  username: String,
  password: String
});
