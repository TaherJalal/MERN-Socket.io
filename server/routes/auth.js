const express = require('express')
const router = express.Router()

const userCntrl = require('../controller/auth')

router.use(express.json());

router.get('auth/signup' , userCntrl.auth_signup_get)
router.post('/auth/signup'  , userCntrl.auth_signup_post)

module.exports = router