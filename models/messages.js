const dbPath = __dirname + '/db.json';
const fs = require('fs');
const Sequelize = require('sequelize');
const db = require('../config/db.js');
const Message = {}


const sequelize = new Sequelize(db.messages.name, db.messages.user, db.messages.pass, {
  host: db.dev.hostname,
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});


Message.createMsgTable = function (sequelize, DataTypes) {
  const MsgTable = sequelize.define('Message', {
    timestamp: DataTypes.BIGINT,
    content: DataTypes.TEXT
  }, {timestamps: false});

  return MsgTable;
};

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
}

Message.deleteMsgs = function() {
  db.query("truncate messages");
}


Message.sequelize = sequelize;
Message.Sequelize = Sequelize;


module.exports = Message;
