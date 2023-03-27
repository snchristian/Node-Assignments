const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema ({
    userName:{ type:String,Unique:true,Required:true,maxLength:10},
    gender:{ type:String,Required:true,Enum:['Male','Female']},
    age:{ type:Number,Required:true,},
    email:{ type:String,Required:true,},
    password:{ type:String,Required:true,},
    firstName:{ type:String,Required:true,maxLength:10},
    lastName:{ type:String,Required:true,maxLength:10}

},{timestamps:true})

module.exports = mongoose.model('User',UserSchema)