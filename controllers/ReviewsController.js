const DataTypes = require('sequelize')
const review = require('../models/review')
const sequelize = require('../config/seq')
const review = require('../models/review')

//Objeto user:
const review = Review (sequelize, DataTypes)

exports.getReviews = async (req, res) =>{
    const allReviews = await Review.findAll()
    res.status(200)
    .json({
        "success":true,
        "data": `Get all Reviews`
    })
}

exports.getSingleReview = async (req, res)=>{
    const singleReview = await Review.findByPk(req.params.id)
    res.status(200)
    .json({
        "success":true,
        "data": singleReview
    })
}

exports.createReview = async (req, res)=>{
    const newReview = await Review.create(req.body)
    res.status(201)
    .json({
        "success":true,
        "data": newReview
    })
}

exports.updateReview = async (req, res)=>{
    await Review.update(req.body,{
        where:{
            id: req.params.id
        }
    })
    const singleReview = await Review.findByPk(req.params.id)
    res.status(200)
    .json({
        "success":true,
        "data": singleReview
    })
}

exports.deleteReview = async (req, res)=>{
    await Review.destroy({
        where:{
            id: req.params.id
        }
    })
    res.status(200)
    .json({
        "success":true,
        "data": `Delete Review ${req.params.id}`
    })
}