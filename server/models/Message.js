const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

let Message = mongoose.model('Message' , messageSchema)

module.exports = Message