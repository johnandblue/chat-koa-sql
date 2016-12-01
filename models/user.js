'use strict';


module.exports = function (sequelize, DataTypes) {

  const User = sequelize.define('User', {
    email: DataTypes.TEXT,
    name: DataTypes.TEXT
  }, {
  	timestamps: false,
  	classMethods: {
  	  associate: function (models) {
  	  	User.hasMany(models.Message)
  	  }
  	}
  });

  return User;
};
