'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Game.belongsTo(models.User)
    }
  };
  Game.init({
    name: {
      type    : DataTypes.STRING,
      validate: { notEmpty: true }
    },
    gameId: {
      type    : DataTypes.INTEGER,
      validate: { notEmpty: true } 
    }
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};