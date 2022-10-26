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

exports.getSingleUser = (req, res)=>{
    res.status(200)
    .json({
        "success":true,
        "data": `Single user ${req.params.id}`
    })
}

exports.createUser = (req, res)=>{
    res.status(201)
    .json({
        "success":true,
        "data": "Create user"
    })
}

exports.updateUser = (req, res)=>{
    res.status(200)
    .json({
        "success":true,
        "data": `Update user ${req.params.id}`
    })
}

exports.deleteUser = (req, res)=>{
    res.status(200)
    .json({
        "success":true,
        "data": `Delete user ${req.params.id}`
    })
}