
const mongoose = require('mongoose');

module.exports = mongoose.model('Register', {
  user: String,
  password: String
});
