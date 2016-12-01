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

Message.Msgmodel.create({user: 'user1', content: 'Hola feo', timestamp: 'thursday'}, function (err, message) {
  if (err) return handleError(err);
})

Message.Msgmodel.create({user: 'forismatic', content: 'Hola guapo', timestamp: 'thursday'}, function (err, message) {
  if (err) return handleError(err);
})

Message.getAllMessages = function () {
  // return new Promise(function (resolve, reject) {
  //   Message.Msgmodel.find(function (err, messages){
  //     if (err) return console.log(err);
  //     console.log(messages);
  //     resolve(messages);
  //   })
  // });
  return Message.Msgmodel.find();
};

Message.postMessage = function(body) {

}


// Message.getAllMessages = function () {
//   return new Promise(function (resolve, reject) {
//     db.query('SELECT* from messages', function (err, rows, fields) {
//       if (err) reject(err);
//       console.log(rows);
//       resolve(rows);
//     });
//   });
// };
//
// Message.postMessage = function(body) {
//   db.query(" INSERT into messages (user, content, timestamp) VALUES ('"+body.user+" ',' "+body.content+" ',' "+body.timestamp+"');" );
// }
//
// Message.deleteMsgs = function() {
//   db.query("truncate messages");
// }


module.exports = Message;
