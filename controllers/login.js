'use strict';

const Login = require('../models/login.js')
const User = require('../models/user.js');


exports.post = function* () {
  const login = new Login(this.request.body);
  yield Login.find();
  this.status = 201;
};
