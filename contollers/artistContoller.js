const { application } = require("express")
const Artist = require('../models/Artist')

const getArtists = async (req, res ) =>{
    if(Object.keys(req.query).length){
        const{
            firstName,
            lastName,
            gender

        } = req.query

        const filter = []

        if(firstName) filter.push(firstName)
        if(lastName) filter.push(lastName)
        if(gender) filter.push(gender)

        for( const query of filter){
            console.log(`Searching artist by: ${query}`)
        }

    }
    try{
        const artist = await Artist.find()
        
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



module.exports ={
    getArtists,
    postArtist,
    deleteArtists,
    getArtist,
    putArtist,
    deleteArtist
}