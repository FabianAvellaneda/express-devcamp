const DataTypes = require('sequelize')
const Course = require('../models/course')
const sequelize = require('../config/seq')

//Objeto user:
const course = Course (sequelize, DataTypes)

exports.getCourses = async (req, res) =>{
    const allCourses = await Course.findAll()
    res.status(200)
    .json({
        "success":true,
        "data": `Get all Courses`
    })
}

exports.getSingleCourse = async (req, res)=>{
    const singleCourse = await Course.findByPk(req.params.id)
    res.status(200)
    .json({
        "success":true,
        "data": singleCourse
    })
}

exports.createCourse = async (req, res)=>{
    const newCourse = await Course.create(req.body)
    res.status(201)
    .json({
        "success":true,
        "data": newCourse
    })
}

exports.updateCourse = async (req, res)=>{
    await Course.update(req.body,{
        where:{
            id: req.params.id
        }
    })
    const singleCourse = await Course.findByPk(req.params.id)
    res.status(200)
    .json({
        "success":true,
        "data": singleCourse
    })
}

exports.deleteCourse = async (req, res)=>{
    await Course.destroy({
        where:{
            id: req.params.id
        }
    })
    res.status(200)
    .json({
        "success":true,
        "data": `Delete Course ${req.params.id}`
    })
}