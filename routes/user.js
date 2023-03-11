const express = require('express')
const router = express.Router()

const {
    getUsers,
    postUser,
    deleteUser

} = require('../contollers/userController')

router.route('/')
    .get(getUsers)
    .post(postUser)
    .delete(deleteUser)

module.exports = router
