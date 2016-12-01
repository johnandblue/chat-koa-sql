'use strict';

var Message = require('../models/messages.js')
const messagesCtrl = {};

// messagesCtrl.getMessages = function* () {
//   this.body = Message.getAll();
// };

messagesCtrl.getMessages = function* () {
  this.body = yield Message.getAllMessages();
};

var createMsg = function (body) {
  let timestamp = Date.now();
  let user = body.user;
  let content = body.content;
  return {
    timestamp,
    user,
    content,
  };
}

messagesCtrl.deleteMsgs = function* () {
  Message.deleteMsgs();
}

messagesCtrl.postMessage = function* () {
  Message.postMessage(this.request.body);
  this.status = 201;
}

module.exports = messagesCtrl
