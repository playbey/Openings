'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Move extends Model {
    static associate(models) {
      // define association here
    }
  }
  Move.init({
    board: DataTypes.TEXT,
    prevBoard: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Move',
  });
  return Move;
};
