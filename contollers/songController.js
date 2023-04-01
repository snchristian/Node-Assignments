const { json } = require("body-parser")
const { application } = require("express")

const Song = require('../models/Song')

const getSongs = async  (req,res,next) =>{

    const filter = {}
    const options = {}

    if(Object.keys(req.query).length){
        const{
            songTitle,
            genre,
            sortByArtist,
            limit, 
            artist,

        } =req.query


        if (songTitle) filter.songTitle = true
        if (artist) filter.artist = true
        if (genre) filter.genre = true

        if (limit) options.limit = limit
        if (sortByArtist) options.sort = {
            artist: sortByArtist === 'asc' ? 1 : -1
        }
    }

    try{
        const songs = await Song.find({},filter,options)

        res
        .status(200)
        .setHeader('Content-Type' ,'application/json')
        .json(songs)

    }catch(err){
        next(err)

    }

}


const postSong = async (req,res,next) =>{
    try{
        const song = await Song.create(req.body)
        
        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json(song)

    }catch (err){
        next(err)
    }
    
}

const deleteSongs =async (req,res,next) => {
    try{
    const deletedSongs = await Song.deleteMany()

    res
    .status(200) //204
    .setHeader('Content-Type', 'application/json')
    .json(deletedSongs)
    }
    catch(err){
        next(err)
    }  
}

const getSong  = async (req,res,next) => {
    try{
        const song = await Song.findById(req.params.songId)

        res
        .status(200)
        .setHeader('Content-Type','application/json')
        .json(song)
    }
    catch (err) {
        next(err)
    }   
}

const putSong = async (req,res,next) =>{
    try{
        const song = await Song.findByIdAndUpdate(req.params.songId,req.body,{new: true})
    res
    .status(200)
    .setHeader('Content-Type','application/json')
    .json(song)
    
    }catch(err){
        next(err)
    }   
}

const deleteSong = async (req,res,next) =>{
    try{
        const deletedSong = await Song.findByIdAndDelete(req.params.songId)

        res
        .status(200)
        .setHeader('Content-Type',"application/json")
        .json(deletedSong)
    }catch (err){
        next(err)
    }
 
}

const getRating = async (req,res,next) =>{
   try {
    const song = await Song.findById(req.params.songId)

    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json(song.ratings)
   } catch (err) {
    next(err)
   }
}

const postRating = async (req,res,next) => {
    try {
        const song = await Song.findById(req.params.songId)
        song.ratings.push(req.body)
        await song.save()

        res
        .status(201)
        .setHeader('Content-Type','application/json')
        .json(song.rating)
        
    } catch (err) {
        next(err)
    }
}

const deleteRating = async (req,res,next) => {
    try {
        const song = await Song.findById(req.params.songId)
        song.ratings = []
        await song.save()

        res
        .status(200)
        .setHeader('Content-Type','application/json')
        .json({msg:`Deleted all rating for item id of ${req.params.itemId}`})
        
    } catch (err) {
        next(err)
    }
}

module.exports = {
    getSongs,
    postSong,
    deleteSongs,
    getSong,
    putSong,
    deleteSong,
    getRating,
    postRating,
    deleteRating
}