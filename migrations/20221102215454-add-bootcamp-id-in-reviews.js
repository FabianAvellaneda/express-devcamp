'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
      //1. nombre de tabla donde se pone la nueva columna
      //2. nueva columna a poner
      //3. opciones de la configuracion
      await queryInterface.addColumn('reviews','bootcamp_id',{
        type:Sequelize.INTEGER,
        references:{
          model: 'bootcamps',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    )
  },

    async down (queryInterface, Sequelize) {
      await queryInterface.removeColumn('reviews', 'bootcamp_id')
    },
  }
