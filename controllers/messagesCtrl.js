'use strict';

const Message = require('../models/messages.js')

exports.getMessages = function* () {
  this.body = yield Message.getAllMessages();
};

exports.postMessage = function* () {
  Message.postMessage(this.request.body);
  this.status = 201;
}

exports.deleteMsgs = function* () {
  Message.deleteMsgs();
}
