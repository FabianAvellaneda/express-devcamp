'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bootcamps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      website: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      average_rating: {
        type: Sequelize.REAL
      },
      average_cost: {
        type: Sequelize.REAL
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Bootcamps');
  }
};