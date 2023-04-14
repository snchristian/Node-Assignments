
const adminValidator = async (req,res,next) =>{

    if(req.user.admin === true){
        next()
    }
    else{
        res
        .status(403)
        .setHeader('Content-Type','application/json')
        .json({msg:'Unauthorized to access this resource'})
    }
}

module.exports = adminValidator