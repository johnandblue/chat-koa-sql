// Example model

const dbPath = __dirname + '/db.json';
const fs = require('fs')
// const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
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

Message.postMessage = function(tempMsg) {
  db.msgs.push(tempMsg);
}

Message.deleteMsgs = function() {
  db.msgs = [];
}


// setInterval(function () {
//   fs.writeFile(dbPath, JSON.stringify(db));
// }, 5000);

module.exports = Message;
