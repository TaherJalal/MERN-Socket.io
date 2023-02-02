const express = require('express')
const router = express.Router()

const isLoggedIn = require('../helper/isLoggedIn')

const chatCntrl = require('../controller/chat')

router.get('/chat'  , chatCntrl.chat_get)
router.post('/chat'  , chatCntrl.chat_post)

module.exports = router