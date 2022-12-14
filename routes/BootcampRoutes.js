const express = require('express')
const {getBootcamps,
    getSingleBootcamp,
    updateBootcamp,
    deleteBootcamp,
    createBootcamp
} = require('../controllers/BootcampController')

const router = express.Router()

router.route('/')
.get(getBootcamps)
.post(createBootcamp)

router.route('/:id')
.get(getSingleBootcamp)
.put(updateBootcamp)
.delete(deleteBootcamp)

module.exports = router