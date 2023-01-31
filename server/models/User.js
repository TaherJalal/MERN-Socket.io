const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    emailAddress: {
        type: String,
        
    },
    password: {
        type: String,
        required: true
    }
})

let User = mongoose.model('User' , userSchema)

module.exports = User