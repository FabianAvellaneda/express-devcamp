'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('reviews', [
     {
      tittle: 'PHP review',
      text: 'La review del bootcampde PHP',
      rating: 4.2,
      user_id: 1,
      bootcamp_id: 1
    },
    {
      tittle: 'JAVA review',
      text: 'La review del bootcampde JAVA',
      rating: 4.2,
      user_id: 2,
      bootcamp_id: 2
   },
   {
    tittle: 'PHYTON review',
    text: 'La review del bootcampde PHYTON',
    rating: 4.2,
    user_id: 3,
    bootcamp_id: 3
   }
 ], {});
   
 },

 async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('reviews', null, {});  
 }
};
