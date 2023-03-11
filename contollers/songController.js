const { application } = require("express")

const getSongs = (req,res) =>{
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

module.exports = {
    getSongs,
    postSong,
    deleteSongs
}