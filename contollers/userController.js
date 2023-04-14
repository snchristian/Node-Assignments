const User = require('../models/User')

const getUsers = async (req ,res,next) =>{

    const filter = {}
    const options = {}

    if(Object.keys(req.query).length){
        const{
            userName,
            gender,
            limit, 
            sortByAge,
            age

        }=req.query


        if(userName) filter.userName = true
        if(gender) filter.gender = true
        if(age) filter.age = true

        if(limit) options.limit = limit
        if (sortByAge) options.sort={
            age: sortByAge === 'asc' ? 1 : -1 
        }     
    }

    try{
        const users = await User.find({}, filter,options)

        res
        .status(200)
        .setHeader('Content-Type' ,'application/json')
        .json(users)

    }catch(err){
        next(err)
    }
}

const postUser = async (req, res, next) => {
    try{
        const user = await User.create(req.body)
        
    sendTokenResponse(user,201,res)

    }catch(err){
        next(err)
    }
}

const deleteUsers = async (req, res, next) => {
    try{
        const deletedUser = await User.deleteMany()
    
        res
        .status(200) //204
        .setHeader('Content-Type', 'application/json')
        .json(deletedUser)
        }
        catch(err){
            next(err)
        }
}

const getUser = async (req, res, next) => {
    try{
        const user = await User.findById(req.params.userId)

        res
        .status(200)
        .setHeader('Content-Type','application/json')
        .json(user)
    }
    catch (err) {
        next(err)
    }
}

const putUser = async (req,res, next ) => {
    try{
        const user = await User.findByIdAndUpdate(req.params.userId,req.body,{new: true})
        res
        .status(200)
        .setHeader('Content-Type','application/json')
        .json(user)

    }catch(err){
        next(err)
    }
    
}

const deleteUser = async (req,res,next) =>{
    try{
        const deletedUser = await User.findByIdAndDelete(req.params.userId)
        
        res
        .status(200)
        .setHeader('Content-Type',"application/json")
        .json(deletedUser)

    }catch (err){
        next(err)
    }
}

const login = async (req,res,next) =>{
    const { email, password } = req.body; 
    console.log(req.body)

    if (!email || !password) throw new Error('Please provide a email and password'); 

    const user = await User.findOne({ email }).select('+password'); 
    console.log(user)

    if (!user) throw new Error('User does not exist');

    const isMatch = await user.matchPassword(password)

    if (!isMatch) throw new Error('Invalid Credentials'); 

    sendTokenResponse(user, 200, res)
}

const sendTokenResponse = (user,statusCode,res) => {
    const token = user.getSignedJwtToken(); 

    const options = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000), 
        httpOnly: true
    }

    res
    .status(statusCode)
    .cookie('token', token, options)
    .json(token)
}



module.exports ={
    getUsers,
    postUser,
    deleteUsers,
    getUser,
    putUser,
    deleteUser,
    login
}