'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Usuario.init({
    email: {
      type:DataTypes.STRING,
      primaryKey:true
    },
    username: {
      type:DataTypes.STRING,
      unique:true
    },
    nombre: DataTypes.STRING,
    password: DataTypes.STRING,
    idRol: {
      type:DataTypes.INTEGER,
    references:{
      model:"Roles",
      key:"id"
    }
  }
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};