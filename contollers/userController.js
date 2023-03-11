const getUsers = (req ,res) =>{
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

const deleteUser = (req, res) => {
    res
    .status(200)
    .setHeader('Content-Type' ,'application/json')
    .json({message: "Removing user"})
}

module.exports ={
    getUsers,
    postUser,
    deleteUser
}