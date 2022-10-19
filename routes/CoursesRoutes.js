const express = require('express')
const router = express.Router()

//listar todos
router.get('/', (req, res)=>{
    res.status(200)
    .json({
        "success":true,
        "data": "aqui se van a listar los cursos"
    })
    })

//listar por id
router.get('/:id', (req, res)=>{
    //console.log(req.params.id)
    res.status(200)
    .json({
        "success":true,
        "data": `aqui se lista por id, el cual es: ${req.params.id}`
    })
})
//crear bootcamp
router.post('/', (req, res)=>{
    res.status(201)
    .json({
        "success":true,
        "data": "aqui se crea un nuevo curso"
    })
})
//actualizar un bootcamp
router.put('/:id', (req, res)=>{
    res.status(200)
    .json({
        "success":true,
        "data": `aqui se actualiza por id, el cual es: ${req.params.id}`
    })
})
//eliminar un bootcamp
router.delete('/:id', (req, res)=>{
    res.status(200)
    .json({
        "success":true,
        "data": `aqui se elimina por id, el cual es: ${req.params.id}`
    })
})

module.exports = router