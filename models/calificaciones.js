'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Calificaciones extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Calificaciones.init({
    idPelicula: {
      type:DataTypes.INTEGER,
      primaryKey:true,
      references:{
        model:"Peliculas",
        key:"id"
      }
    },
    emailUsuario: {
      type:DataTypes.STRING,
      primaryKey:true,
      references:{
        model:"Usuarios",
        key:"email"
      }
    },
    calificacion: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Calificaciones',
  });
  return Calificaciones;
};