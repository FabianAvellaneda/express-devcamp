const DataTypes = require('sequelize')
const user = require('../models/user')
const sequelize = require('../config/seq')

//Objeto user:
const User = user (sequelize, DataTypes)

exports.getUsers = async (req, res) =>{
    const allUsers = await User.findAll()
    res.status(200)
    .json({
        "success":true,
        "data": `Get all users`
    })
}

exports.getSingleUser = async (req, res)=>{
    const singleUser = await User.findByPk(req.params.id)
    res.status(200)
    .json({
        "success":true,
        "data": singleUser
    })
}

exports.createUser = async (req, res)=>{
    const newUser = await User.create(req.body)
    res.status(201)
    .json({
        "success":true,
        "data": newUser
    })
}

exports.updateUser = async (req, res)=>{
    await User.update(req.body,{
        where:{
            id: req.params.id
        }
    })
    const singleUser = await User.findByPk(req.params.id)
    res.status(200)
    .json({
        "success":true,
        "data": singleUser
    })
}

exports.deleteUser = async (req, res)=>{
    await User.destroy({
        where:{
            id: req.params.id
        }
    })
    res.status(200)
    .json({
        "success":true,
        "data": `Delete user ${req.params.id}`
    })
}