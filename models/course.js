'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Course.init({
    tittle:{
    type: DataTypes.STRING,
    allowNull:false,
    unique:true,
    validate:{
      notEmpty:{
        args: true,
        msg: "title no debe estar vacio"
      },
      notNull: {
        args: true,
        msg: "title no presente"
      }
    }
    },
    description:{ 
    type:DataTypes.STRING,
    allowNull:false,
    unique:true,
    validate:{
      notEmpty:{
        args: true,
        msg: "title no debe estar vacio"
      },
      notNull: {
        args: true,
        msg: "title no presente"
      }
    }
  }, 
  weeks:{ 
      type:DataTypes.INTEGER,
      allowNull:false,
      unique:true,
      validate:{
        notEmpty:{
          args: true,
          msg: "title no debe estar vacio"
        },
        notNull: {
          args: true,
          msg: "title no presente"
        },
        isInt:{
          args: true,
          msg: "Solo numeros enteros"
        },
        max: 9,
        min: 0
      }
  },
     enroll_cost:{ 
      type:DataTypes.REAL,
      allowNull:false,
      unique:true,
      validate:{
        notEmpty:{
          args: true,
          msg: "title no debe estar vacio"
        },
        notNull: {
          args: true,
          msg: "title no presente"
        },
        isFloat:{
          args: true,
          msg: "Solo pueden ingresarse valores tipo float"
        }
      }
  },
    minimum_skill:{ 
      type:DataTypes.STRING,
      allowNull:false,
      unique:true,
      validate:{
        notEmpty:{
          args: true,
          msg: "title no debe estar vacio"
        },
        notNull: {
          args: true,
          msg: "title no presente"
        },
        isAlpha:{
          args: true,
        msg: "Minimum skills solo debe contener letras"
        }
      }
  },
    bootcamp_id: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Course',
  });
  return Course;
};