const express = require('express')
const {getCourses,
    getSingleCourse,
    updateCourse,
    deleteCourse,
    createCourse
} = require('../controllers/CoursesController')

const router = express.Router()

router.route('/')
.get(getCourses)
.post(createCourse)

router.route('/:id')
.get(getSingleCourse)
.put(updateCourse)
.delete(deleteCourse)

module.exports = router