const {DataTypes, ValidationError} = require('sequelize')
const user = require('../models/user')
const sequelize = require('../config/seq')

//Objeto user:
const User = user (sequelize, DataTypes)

exports.getUsers = async (req, res) =>{
    try{
        const allUsers = await User.findAll()
        res.status(200)
        .json({
            "success":true,
            "data": `Get all users`
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

exports.getSingleUser = async (req, res)=>{
    try{
    const singleUser = await User.findByPk(req.params.id)
    if(!singleUser){
    res.status(200).json({
        "success":true,
        "errors": "usuario no encontrado"
    })
}else{
    res.status(200)
    .json({
        "success":true,
        "data": singleUser
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

exports.createUser = async (req, res)=>{
    try{
        //grabar nuevo usuario
        const newUser = await User.create(req.body)
        //enviar response con nuevo usuario
        res.status(201)
        .json({
            "success":true,
            "data": newUser
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

exports.updateUser = async (req, res)=>{
    try{
        const singleUser = await User.findByPk(req.params.id)
        //si no existe
        if(!singleUser){
            res.status(200).json({
                "success":true,
                "errors": "usuario no encontrado"
            })
        }else{
        await User.update(req.body,{
            where:{
                id: req.params.id
            }
        })
        //volvemos a seleccionar
        const updateUser = await User.findByPk(req.params.id)
        //response con usuario actualizado
        res.status(200)
        .json({
            "success":true,
            "data": updateUser
        })
    }
    }catch(error){
        res.status(400).json({
            "succes": false,
            "error": "error en servidor"
        })
    }  
}

exports.deleteUser = async (req, res)=>{
    try{
        const singleUser = await User.findByPk(req.params.id)
        //si no existe
        if(!singleUser){
            res.status(200).json({
                "success":true,
                "errors": "usuario no encontrado"
            })
        }else{
            await User.destroy({
                where:{
                    id: req.params.id
                }
            })
        //volvemos a seleccionar
        const deletedUser = await User.findByPk(req.params.id)
        //response con usuario actualizado
        res.status(200).json({
        "success":true,
        "data": deletedUser
    })
   } 
}catch(error){
        res.status(400).json({
            "succes": false,
            "error": "error en servidor"
        })
    }
}