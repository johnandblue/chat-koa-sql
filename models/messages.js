'use strict';
const Sequelize = require('sequelize');
const db = require('../config/db.js');

const Message = db.define('message', {
  user: {
    type: Sequelize.STRING,
  },
  content: {
    type: Sequelize.STRING,
  },
  timestamp: {
    type: Sequelize.STRING,
  },
})

module.exports = {
  getAllMessages,
  postMessage,
};

function* getAllMessages () {
   return Message.findAll()
   .then(msgs => msgs.map(({user, content, timestamp}) => ({user, content, timestamp})))
}

function postMessage (msg) {
  Message.create(msg)
  return msg;
}
