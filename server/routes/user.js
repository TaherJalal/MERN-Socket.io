const express = require('express')
const router = express.Router()

router.use(express.json());
const isLoggedIn = require('../helper/isLoggedIn')

const userCntrl = require('../controller/user')

router.get('/user' , userCntrl.userDetails_get)
router.put('/user' , userCntrl.user_edit_put)
module.exports = router