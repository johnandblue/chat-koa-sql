'use strict';

const User = require('../models/user.js')

exports.post = function* () {
  const newUser = new User(this.request.body);
  yield newUser.save();
  this.status = 200;
};
