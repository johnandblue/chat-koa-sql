'use strict';
const Sequelize = require('sequelize');
const db = require('../config/db.js');

const User = db.define('user', {
  email: {
    type: Sequelize.STRING,
  },
  name: {
    type: Sequelize.STRING,
  },
})

module.exports = Message;


//
// 'use strict';
//
//
// module.exports = function (sequelize, DataTypes) {
//
//   const User = sequelize.define('User', {
//     email: DataTypes.TEXT,
//     name: DataTypes.TEXT
//   }, {
//   	timestamps: false,
//   	classMethods: {
//   	  associate: function (models) {
//   	  	User.hasMany(models.Message)
//   	  }
//   	}
//   });
//
//   return User;
// };
