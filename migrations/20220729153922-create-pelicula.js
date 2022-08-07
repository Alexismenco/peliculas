'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Peliculas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        allowNull: false,
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.INTEGER
      },
      director: {
        type: Sequelize.STRING
      },
      casting: {
        type: Sequelize.STRING
      },
      sinopsis: {
        type: Sequelize.STRING
      },
      genero: {
        type: Sequelize.STRING
      },
      trailer: {
        type: Sequelize.STRING
      },
      vigente: {
        allowNull: false,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Peliculas');
  }
};