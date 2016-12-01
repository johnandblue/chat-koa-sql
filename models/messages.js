const dbPath = __dirname + '/db.json';
const fs = require('fs');
const mongoose = require('mongoose')
// const db = require('../config/db.js');
const Message = {}

mongoose.Promise = global.Promise;

Message.message = mongoose.Schema({
  user: String,
  content: String,
  timestamp: String
});



Message.Msgmodel = mongoose.model('Messages', Message.message);

Message.getAllMessages = function () {
  return Message.Msgmodel.find();
};

Message.postMessage = function(body) {
  return Message.Msgmodel.create({user: body.user, content: body.content, timestamp: body.timestamp}, function (err, message) {
    // if (err) return handleError(err);
    console.log(body);
  })
}
//
Message.deleteMsgs = function() {
  Message.Msgmodel.remove({}, function(){
    console.log('deleted');
  });
}


module.exports = Message;
