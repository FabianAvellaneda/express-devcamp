'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Courses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tittle: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      weeks: {
        type: Sequelize.INTEGER
      },
      enroll_cost: {
        type: Sequelize.REAL
      },
      minimum_skill: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Courses');
  }
};