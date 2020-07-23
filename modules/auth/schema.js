const mongoose = require('mongoose')
const EMAIL_REGEX = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const schema = new mongoose.Schema({
    email:{
        type: String,
        required:true,
        unique: true,
        validate: {
            validator(value){
                return EMAIL_REGEX.test(value)
            }
        }
    },
    password:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    birthdate: Date,
    state:{
        type: String,
        required: true,
        enum:["available","disable"]
    }
})

module.exports = schema