const express = require('express')
const router = express.Router()

const {
    getSongs,
    postSong,
    deleteSongs
} = require('../contollers/songController')

router.route('/')
    .get(getSongs)
    .post(postSong)
    .delete(deleteSongs)

module.exports = router