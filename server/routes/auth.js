const express = require('express')
const router = express.Router()

const userCntrl = require('../controller/auth')

router.get('/signup' , userCntrl.test_get)
router.post('/signup' , userCntrl.user_post)

module.exports = router