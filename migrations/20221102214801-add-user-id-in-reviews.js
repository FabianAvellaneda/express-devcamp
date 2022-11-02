'use strict';

const sequelize = require('../config/seq');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
async up (queryInterface, Sequelize) {
await queryInterface.addColumn('review','user_id',{
  type:Sequelize.INTEGER,
  references:{
    model: 'user',
    key: 'id'
  },
  onUpdate: 'CASCADE',
  onDelete: 'SET NULL'
}
)
},
  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('review', 'user_id')
  }
};
