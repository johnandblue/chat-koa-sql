'use strict';

const Login = require('../models/login.js')
const Register = require('../models/register.js');


exports.post = function* () {
  const login = new Login(this.request.body);
  yield console.log(login);
  this.status = 200;
};
