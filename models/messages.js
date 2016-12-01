const dbPath = __dirname + '/db.json';
const fs = require('fs');
const db = require('../config/db.js');
const Message = {}

// Message.getAll = function() {
//   return db.msgs;
// }

Message.getAllMessages = function () {
  return new Promise(function (resolve, reject) {
    db.query('SELECT* from messages', function (err, rows, fields) {
      if (err) reject(err);
      console.log(rows);
      resolve(rows);
    });
  });
};

Message.postMessage = function(body) {
  db.query(" INSERT into messages (user, content, timestamp) VALUES ('"+body.user+" ',' "+body.content+" ',' "+body.timestamp+"');" );
  // db.msgs.push(tempMsg);
}

Message.deleteMsgs = function() {
  db.query("truncate messages");
}


// setInterval(function () {
//   fs.writeFile(dbPath, JSON.stringify(db));
// }, 5000);

module.exports = Message;
