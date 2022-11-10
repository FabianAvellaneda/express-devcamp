'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('bootcamps', [
     {
      name: 'PHP bootcamp',
      description: 'bootcamp para aprender PHP',
      website: 'phpbootcamp.com',
      phone: '31246223',
      average_rating: 4.2,
      average_cost: 2.000,
      user_id: 1
    },
    {
      name: 'JAVA bootcamp',
      description: 'bootcamp para aprender JAVA',
      website: 'javabootcamp.com',
      phone: '305458024',
      average_rating: 4.5,
      average_cost: 3.500,
      user_id: 2
   },
   {
    name: 'PHYTON bootcamp',
    description: 'bootcamp para aprender PHYTON',
    website: 'phytonbootcamp.com',
    phone: '3212014201',
    average_rating: 4.0,
    average_cost: 5.000,
    user_id: 3
   }
 ], {});
   
 },

 async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('bootcamps', null, {});  
 }
};
