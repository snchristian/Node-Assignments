const mongoose = require('mongoose')
const Schema = mongoose.Schema
const validtor = require('validator')


const UserSchema = new Schema ({
    userName:{ type:String,Unique:true,Required:true,maxLength:30},
    gender:{ type:String,Required:true,Enum:['Male','Female']},
    age:{ type:Number,Required:true,},
    email:{ type:String,Required:true,validate: (email) => validtor.isEmail(email)},
    password:{ type:String,Required:true, validate: (password) => validtor.isStrongPassword(password)},
    firstName:{ type:String,Required:true,maxLength:30},
    lastName:{ type:String,Required:true,maxLength:30}

},{timestamps:true})

UserSchema.pre('save', function(next){
    this.userName = this.userName.trim()
    this.firstName = this.firstName.trim()
    this.lastName = this.lastName.trim()
    next()
})

UserSchema.post('save', function(next){
    this.gender = this.gender.toUpperCase()
    next
})



module.exports = mongoose.model('User',UserSchema)