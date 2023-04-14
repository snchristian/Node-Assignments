const mongoose = require('mongoose')
const Schema = mongoose.Schema
const validtor = require('validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


const UserSchema = new Schema ({
    userName:{ type:String,Unique:true,Required:true,maxLength:30},
    gender:{ type:String,Required:true,Enum:['Male','Female']},
    age:{ type:Number,Required:true,},
    email:{ type:String,Required:true,validate: (email) => validtor.isEmail(email)},
    password:{ type:String,Required:true, validate: (password) => validtor.isStrongPassword(password)},
    firstName:{ type:String,Required:true,maxLength:30},
    lastName:{ type:String,Required:true,maxLength:30},
    admin:{type:Boolean,default:false}

},{timestamps:true})


// UserSchema.pre('save', function(next){
//     this.userName = this.userName.trim()
//     this.firstName = this.firstName.trim()
//     this.lastName = this.lastName.trim()
//     next()
// })

// UserSchema.post('save', function(next){
//     this.gender = this.gender.toUpperCase()
//     next
// })

UserSchema.methods.getSignedJwtToken = function() {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    })
}

UserSchema.pre('save',async function(next){
    if(!this.isModified('password')) next()

    const salt = await bcrypt.genSalt(10); 
    this.password = await bcrypt.hash(this.password, salt); 

    next()
})

UserSchema.methods.matchPassword = async function(enterPassword) {
    return await bcrypt.compare(enterPassword, this.password)
}



module.exports = mongoose.model('User',UserSchema)