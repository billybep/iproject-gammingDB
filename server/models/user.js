'use strict';
const {
  Model
} = require('sequelize');

const { encryptPassword } = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Game)
    }
  };
  User.init({
    username: {
      type    : DataTypes.STRING,
      validate: { notEmpty: true }
    },
    email: {
      type    : DataTypes.STRING,
      validate: { isEmail : true }
    },
    password: {
      type    : DataTypes.STRING,
      validate: {
        len   : {
          args: [6],
          msg : 'Your password must be at least 6 characters long. Please try another'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate(instance => instance.password = encryptPassword(instance.password))

  return User;
};