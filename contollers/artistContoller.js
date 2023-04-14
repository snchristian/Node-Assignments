const { application } = require("express")
const Artist = require('../models/Artist')
const path = require('path')

const getArtists = async (req, res, next ) =>{
     const filter = {}
     const options = {}

    if(Object.keys(req.query).length){
        const{
            firstName,
            lastName,
            limit,
            sortByGenre,

        } = req.query


        if(firstName) filter.firstName = true
        if(lastName) filter.lastName = true
        if(limit) options.limit = limit
        if (sortByGenre) options.sort = {genre: sortByGenre}

    }
    try{
        const artist = await Artist.find({},filter,options)
        
        res
        .status(200)
        .setHeader('Content-Type' ,'application/json')
        .json(artist)

    }catch (err){
        next(err)
    }
    
}

const postArtist = async  (req, res, next) =>{
    try{
        const newArtist = await Artist.create(req.body)

        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json(newArtist)

    }catch(err){
        next(err)
    }
    

}

const deleteArtists = async (req, res,next) =>{
    try{
        const deletedArtist = await Artist.deleteMany()

        res
        .status(200) //204
        .setHeader('Content-Type', 'application/json')
        .json(deletedArtist)
    }
    catch (err){
        next(err)
    }   
}

const getArtist = async (req,res,next) => {
    try{ 
        const artist = await Artist.findById(req.params.artistId)

    res
    .status(200)
    .setHeader('Content-Type','application/json')
    .json(artist)

    }
    catch (err) {
        next(err)
    }
   
}
const putArtist = async (req,res,next) => {
    try{
    const artist = await Artist.findByIdAndUpdate(req.params.artistId,req.body,{new: true})

    res
    .status(200)
    .setHeader('Content-Type','application/json')
    .json(artist)

    }catch(err){
        next(err)
    }
    
}

const deleteArtist =async (req,res,next) => {
    try{
    const artist = await Artist.findByIdAndDelete(req.params.artistId)

    res
    .status(200)
    .setHeader('Content-Type','application/json')
    .json(artist)

    }catch(err){
        next(err)
    }
}

const postArtistImage = async (req,res,next) =>{
    
    // try{
    //     let error = {msg: 'Error uploading image'}

    //     if(!req.files){
    //         next(error)
    //     }

    //     const file = req.files.file

    //     if (!file.mimetype.startsWith('image')) next(error)
    //     if(file.size > process.env.MAX_FILE_SIZE) next(error)

    //     file.name = `photo_${req.params.artistId}${path.parse(file.name).ext}`

    //     const filePath = process.env.FILE_UPLOAD_PATH + file.name;

    //     file.mv(filePath, async (err) => {
    //         await Artist.findByIdAndUpdate(req.params.artistId, { image: file.name })

    
    //         res
    //         .status(200)
    //         .setHeader('Content-Type', 'application/json')
    //         .json({msg:'Uploaded image'})
    //     })
    // }

    // catch(err){
    //     next
    // }

    try {
        err = { msg: 'Error uploading image' }; 
        if (!req.files) next(err)

        const file = req.files.file; 

        if (!file.mimetype.startsWith('image')) next(err); 
        if (file.size > process.env.MAX_FILE_SIZE) next(err)

        file.name = `photo_${req.params.artistId}${path.parse(file.name).ext}`
        const filePath = process.env.FILE_UPLOAD_PATH + file.name;

        file.mv(filePath, async (err) => {
            await Artist.findByIdAndUpdate(req.params.artistId, { image: file.name })

            res
            .status(200)
            .setHeader('Content-Type', 'application/json')
            .json({ msg: 'Image uploaded!' })
        })
    } catch (err) {
        next(err)
    }
}



module.exports ={
    getArtists,
    postArtist,
    deleteArtists,
    getArtist,
    putArtist,
    deleteArtist,
    postArtistImage
}