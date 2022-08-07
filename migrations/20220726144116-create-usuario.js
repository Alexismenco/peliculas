'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Usuarios', {
      email: {
        allowNull:false,
        type: Sequelize.STRING,
        primaryKey:true
      },
      username: {
        type: Sequelize.STRING,
        allowNull:false,
        unique:true
      },
      nombre: {
        allowNull:false,
        type: Sequelize.STRING
      },
      password: {
        allowNull:false,
        type: Sequelize.STRING
      },
      idRol: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references:{
          model:"Roles",
          key:"id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Usuarios');
  }
};