const Message = require('../models/Message')

exports.chat_get = (req , res) => {
    res.json({message : "Chatting test"})
}

exports.chat_post = (req ,res) => {
    console.log(req.body)
    let message = new Message(req.body)

    message.save()
    .then((chats) => {
        res.json({chats})
    })
    .catch((err) => {
        console.log(err)
    })
}