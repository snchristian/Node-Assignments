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

const protectedRoute = require('../middlewares/auth')

router.route('/')
    .get(getSongs)
    .post(protectedRoute,postSong)
    .delete(protectedRoute,deleteSongs)

router.route('/:songId')
    .get(getSong)
    .put(protectedRoute,putSong)
    .delete(protectedRoute,deleteSong)

router.route('/:songId/ratings')
.get(getRating)
.post(postRating)
.delete(deleteRating)

router.route('/:songId/ratings/:ratingId')
.get(getSongRating)
.put(updateSongRating)
.delete(deleteSongRating)

module.exports = router