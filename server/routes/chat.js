const express = require('express')
const router = express.Router()

const isLoggedIn = require('../helper/isLoggedIn')

const chatCntrl = require('../controller/chat')

router.get('/chat' , isLoggedIn , chatCntrl.chat_get)
router.post('/chat' ,  isLoggedIn , chatCntrl.chat_post)

module.exports = router