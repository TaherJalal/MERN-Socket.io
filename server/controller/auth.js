const User = require('../models/User')

exports.test_get = (req , res) => {
    res.json({message : "hello"})
}

exports.user_post = (req , res) => {
    console.log(req.body)
    let user = new User(req.body)
    user.save()
    .then((users) => {
        res.json({users})
    })
    .catch((err) => {
        console.log(err)
        res.send("please try again")
    })
}