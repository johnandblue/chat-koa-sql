'use strict';

const Register = require('../models/register.js')

exports.post = function* () {
  const newReg = new Register(this.request.body);
  yield newReg.save();
  this.status = 200;
};
