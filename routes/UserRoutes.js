const express = require('express')
const {getUsers,
    getSingleUser,
    updateUser,
    deleteUser,
    createUser
} = require('../controllers/UserController')

const router = express.Router()

router.route('/')
.get(getUsers)
.post(createUser)

router.route('/:id')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser)

module.exports = router