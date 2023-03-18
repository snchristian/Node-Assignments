const { application } = require("express")

const getUsers = (req ,res) =>{

    if(Object.keys(req.query).length){
        const{
            userName,
            gender

        }=req.query

        const filter = []

        if(userName) filter.push(userName)
        if(gender) filter.push(gender)

        for(const query of filter){
            console.log(`Searching user by: ${query}`)
        }
    }


    res
    .status(200)
    .setHeader('Content-Type' ,'application/json')
    .json({message: "Showing all the user"})

}

const postUser = (req,res) => {
    res
    .status(201)
    .setHeader('Content-Type' ,'application/json')
    .json({message:`${req.body.userName} welcome great to have you join us`})

}

const deleteUsers = (req, res) => {
    res
    .status(200)
    .setHeader('Content-Type' ,'application/json')
    .json({message: "Removing user"})
}

const getUser = (req,res) => {
    res
    .status(200)
    .setHeader('Content-Type','application/json')
    .json({message:`Getting User ${req.params.userId}`})
}

const putUser = (req,res) => {
    res
    .status(200)
    .setHeader('Content-Type','application/json')
    .json({message:`Updating User ${req.params.userId}`})
}

const deleteUser = (req,res) =>{
    res
    .status(200)
    .setHeader('Content-Type',"application/json")
    .json({message: `deleting User ${req.params.userId}`})
}

module.exports ={
    getUsers,
    postUser,
    deleteUsers,
    getUser,
    putUser,
    deleteUser
}