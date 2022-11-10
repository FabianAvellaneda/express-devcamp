'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('courses', [
     {
      tittle: 'Curso de PHP',
      description: 'Curso para aprender PHP',
      weeks: 6,
      enroll_cost: 400.000,
      minimum_skill: 'junior',
      bootcamp_id: 1
    },
    {
      tittle: 'Curso de JAVA',
      description: 'Curso para aprender JAVA',
      weeks: 8,
      enroll_cost: 550.000,
      minimum_skill: 'junior',
      bootcamp_id: 2
   },
   {
    tittle: 'Curso de PHYTON',
      description: 'Curso para aprender PHYTON',
      weeks: 5,
      enroll_cost: 450.000,
      minimum_skill: 'junior',
      bootcamp_id: 3
   }
 ], {});
   
 },

 async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('courses', null, {});  
 }
};
