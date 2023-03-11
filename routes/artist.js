const express = require('express')
const router = express.Router()

 const {
    getArtists,
    postArtist,
    deleteArtists

 } = require('../contollers/artistContoller')

 router.route('/')
 .get(getArtists)
 .post(postArtist)
 .delete(deleteArtists)

 module.exports = router