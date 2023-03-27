const { json } = require("body-parser")
const { application } = require("express")

const Song = require('../models/Song')

const getSongs = async  (req,res,next) =>{

    if(Object.keys(req.query).length){
        const{
            songTitle,
            artist,
            genre

        } =req.query

        const filter = []

        if (songTitle) filter.push(songTitle)
        if (artist) filter.push(artist)
        if (genre) filter.push(genre)

        for ( const query of filter){
            console.log(`Searching song by: ${query}`)
        }    
    }

    try{
        const songs = await Song.find()

        res
        .status(200)
        .setHeader('Content-Type' ,'application/json')
        .json(songs)

    }catch(err){
        next(err)

    }

    res
    .status(200)
    .setHeader('Content-Type' ,'application/json')
    .json(songs)
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

module.exports = {
    getSongs,
    postSong,
    deleteSongs,
    getSong,
    putSong,
    deleteSong
}