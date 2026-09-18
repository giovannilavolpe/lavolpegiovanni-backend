'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wand extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Wand.init({
    wand_id: DataTypes.INTEGER,
    wood: DataTypes.STRING,
    core: DataTypes.STRING,
    length: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Wand',
    freezeTableName: true,

  });
  return Wand;
};