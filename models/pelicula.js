'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pelicula extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pelicula.init({
    nombre: DataTypes.STRING,
    year: DataTypes.INTEGER,
    director: DataTypes.STRING,
    casting: DataTypes.STRING,
    sinopsis: DataTypes.STRING,
    genero: DataTypes.STRING,
    trailer: DataTypes.STRING,
    vigente: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pelicula',
  });
  return Pelicula;
};