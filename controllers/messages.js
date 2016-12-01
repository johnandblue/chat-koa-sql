'use strict';

const Message = require('../models/message.js')

exports.getAll = function* () {
  this.body = yield Message.find();
};

exports.deleteAll = function* () {
  yield Message.remove();
  this.status = 200;
};

exports.post = function* () {
  const newMsg = new Message(this.request.body);
  yield newMsg.save();
  this.status = 200;
};
