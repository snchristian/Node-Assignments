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
    deleteRating,
    getSongRating,
    updateSongRating,
    deleteSongRating
} = require('../contollers/songController')

router.route('/')
    .get(getSongs)
    .post(postSong)
    .delete(deleteSongs)

router.route('/:songId')
    .get(getSong)
    .put(putSong)
    .delete(deleteSong)

router.route('/:songId/ratings')
.get(getRating)
.post(postRating)
.delete(deleteRating)

router.route('/:songId/ratings/:ratingId')
.get(getSongRating)
.put(updateSongRating)
.delete(deleteSongRating)

module.exports = router