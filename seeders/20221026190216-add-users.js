'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('users', [
      {
       username: 'John Doe',
       email: 'jd@misena.edu.co',
       password: '1234'
     },
     {
      username: 'Fabian',
      email: 'jdfb@misena.edu.co',
      password: '1234234234'
    },
    {
      username: 'Daniela',
      email: 'dani@misena.edu.co',
      password: '123423'
    }
  ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});  
  }
};
