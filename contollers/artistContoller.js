const { application } = require("express")

const getArtists = (req, res ) =>{
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

const getArtist = (req,res) => {
    res
    .status(200)
    .setHeader('Content-Type','application/json')
    .json({message:`Getting Atrist ${req.params.artistId}`})
}
const putArtist = (req,res) => {
    res
    .status(200)
    .setHeader('Content-Type','application/json')
    .json({message:`updating Atrist ${req.params.artistId}`})
}

const deleteArtist = (req,res) => {
    res
    .status(200)
    .setHeader('Content-Type','application/json')
    .json({message:`Deleting Atrist ${req.params.artistId}`})
}



module.exports ={
    getArtists,
    postArtist,
    deleteArtists,
    getArtist,
    putArtist,
    deleteArtist
}