'use strict';
const Sequelize = require('sequelize');
const dbConfig = {
	"dev": {
		"hostname": "localhost",
		"port": "3000"
	},

  "messages": {
    "name": "testdb",
    "user": "root",
	}
}
const db = new Sequelize(dbConfig.messages.name, dbConfig.messages.user, dbConfig.messages.pass, {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});


module.exports = db;
