const User = require('../models/User')

exports.userDetails_get = (req , res) => {
    User.findById(req.query.id)
    
    .then(user => {
        console.log(user)
        res.json({user})
    })
    .catch((err) => {
        console.log(err)
    })
}

exports.user_edit_put = (req, res) => {
    console.log(req.query.id);
    User.findByIdAndUpdate(req.query.id, req.body, {new : true})
    .then((user) => {
        res.json({user})
    })
    .catch(err => {
        console.log(err)
    });
}