const {DataTypes, ValidationError} = require('sequelize')
const Course = require('../models/course')
const sequelize = require('../config/seq')

//Objeto user:
const course = Course (sequelize, DataTypes)

exports.getCourses = async (req, res) =>{
    try{
    const allCourses = await course.findAll()
    res.status(200)
    .json({
        "success":true,
        "data": allCourses
    })
}catch(error){
    if(error instanceof ValidationError){
        //recorrer el arreglo de errores:
        //foreach

        //map
        const msg_errores = error.errors.map((errorItem)=>{
            return errorItem.message
        })
        res.status(422).json({
            "succes": false,
            "error": msg_errores
        })
    }else{
        res.status(400).json({
            "succes": false,
            "error": "error en servidor"
        })
    }
}
}

exports.getSingleCourse = async (req, res)=>{
    try{
    const singleCourse = await course.findByPk(req.params.id)
    if(!singleCourse){
        res.status(200).json({
            "success":true,
            "errors": "Curso no encontrado"
        })
    }else{
        res.status(200)
        .json({
            "success":true,
            "data": singleCourse
        })
}
}catch(error){
    if(error instanceof ValidationError){
        //recorrer el arreglo de errores:
        //foreach

        //map
        const msg_errores = error.errors.map((errorItem)=>{
            return errorItem.message
        })
        res.status(422).json({
            "succes": false,
            "error": msg_errores
        })
    }else{
        res.status(400).json({
            "succes": false,
            "error": "error en servidor"
        })
    }
}
}

exports.createCourse = async (req, res)=>{
    try{
    const newCourse = await course.create(req.body)
    res.status(201)
    .json({
        "success":true,
        "data": newCourse
    })
}catch(error){
    if(error instanceof ValidationError){
        //recorrer el arreglo de errores:
        //foreach

        //map
        const msg_errores = error.errors.map((errorItem)=>{
            return errorItem.message
        })
        res.status(422).json({
            "succes": false,
            "error": msg_errores
        })
    }else{
        res.status(400).json({
            "succes": false,
            "error": "error en servidor"
        })
    }
}
}

exports.updateCourse = async (req, res)=>{
    try{
        const singleCourse = await course.findByPk(req.params.id)
        //si no existe
        if(!singleCourse){
            res.status(200).json({
                "success":true,
                "errors": "curso no encontrado"
            })
        }else{
        await course.update(req.body,{
            where:{
                id: req.params.id
            }
        })
        //volvemos a seleccionar
        const updateCourse = await course.findByPk(req.params.id)
        //response con usuario actualizado
        res.status(200)
        .json({
            "success":true,
            "data": updateCourse
        })
    }
    }catch(error){
        res.status(400).json({
            "succes": false,
            "error": "error en servidor"
        })
    }  
}

exports.deleteCourse = async (req , res)=>{
    await course.destroy({
        where: {
            id: req.params.id
        }
      });
    res.status(200)
    .json({
        "succes" : true,
        "data" : `Se elimino el curso: ${req.params.id}`
    })
}
