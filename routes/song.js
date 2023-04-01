const express = require('express')
const router = express.Router()

const {
    getSongs,
    postSong,
    deleteSongs,
    getSong,
    putSong,
    deleteSong,
    getRating,
    postRating,
    deleteRating
} = require('../contollers/songController')

router.route('/')
    .get(getSongs)
    .post(postSong)
    .delete(deleteSongs)

router.route('/:songId')
    .get(getSong)
    .put(putSong)
    .delete(deleteSong)


router.route('/:songId/rating')
.get(getRating)
.post(postRating)
.delete(deleteRating)

module.exports = router