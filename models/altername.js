'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Altername extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Altername.belongsTo(Personaje, { 
      foreignKey: 'character_id',
      as: 'character'
      });
    }
  }
  Altername.init({
    altername_id: DataTypes.SERIAL,
    altername: DataTypes.STRING,
    character_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Altername',
    freezeTableName: true,
    underscored: true
  });
  return Altername;
};