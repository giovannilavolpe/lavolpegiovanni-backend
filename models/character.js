'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Character.belongsTo(models.Wand, {
        foreignKey: 'wand_id',
        as: 'wand'
      });
    }
  }
  Character.init({
    character_id: DataTypes.SERIAL,
    name: DataTypes.STRING,
    is_founder: DataTypes.BOOLEAN,
    house: DataTypes.STRING,
    wand_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Character',
    freezeTableName: true,
    underscored: true
  });
  return Character;
};