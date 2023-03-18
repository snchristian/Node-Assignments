const { json } = require("body-parser")
const { application } = require("express")

const getSongs = (req,res) =>{

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
    res
    .status(200)
    .setHeader('Content-Type' ,'application/json')
    .json({message: "Showing all the Songs 'Try Again','Pray it away','For the Night','Dance With Somebody','Un-Break My Heart',"})
}


const postSong = (req,res) =>{
    res
    .status(201)
    .setHeader('Content-Type', 'application/json')
    .json({message:`${req.body.songName} is a great selection we have added it to our selection`})
}


const deleteSongs = (req,res) => {
    res
    .status(200) //204
    .setHeader('Content-Type', 'application/json')
    .json({message:'Removed from the List '})
}

const getSong  = (req,res) => {
    res
    .status(200)
    .setHeader('Content-Type','application/json')
    .json({message: `Showing song ${req.params.songId}`})
}

const putSong = (req,res) =>{
    res
    .status(200)
    .setHeader('Content-Type','application/json')
    .json({meessage:` Updated song ${req.params.songId}`})
}

const deleteSong = (req,res) =>{
    res
    .status(200)
    .setHeader('Content-Type',"application/json")
    .json({message:` Delted song ${req.params.songId}`})
}

module.exports = {
    getSongs,
    postSong,
    deleteSongs,
    getSong,
    putSong,
    deleteSong
}