
const getArtists = (req, res ) =>{
    res
    .status(200)
    .setHeader('Content-Type' ,'application/json')
    .json({message: "Showing all the Artist 'Aaliyah', 'whitney houston','Chloe bailey', 'Toni braxton','Spice'"})
}

const postArtist = (req, res) =>{
    res
    .status(201)
    .setHeader('Content-Type', 'application/json')
    .json({message:`${req.body.artistName} is a great artist we have added it to our selection`})

}

const deleteArtists = (req, res) =>{
    res
    .status(200) //204
    .setHeader('Content-Type', 'application/json')
    .json({message:'Removed from the List '})
}

module.exports ={
    getArtists,
    postArtist,
    deleteArtists
}