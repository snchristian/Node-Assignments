const User = require("../models/User");
const jwt = require('jsonwebtoken')

const protectedRoute = async (req,res,next) =>{
    let token;
    
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1]
    }

    if (!token) throw new Error('Not authorized to access this route')

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = await User.findById(decoded.id)

        

    } catch (err) {
        throw new Error('Error processing the jwt token!')
    }

    next()
}


module.exports = protectedRoute