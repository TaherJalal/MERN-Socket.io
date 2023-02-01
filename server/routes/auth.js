const express = require('express')
const router = express.Router()

const authCntrl = require('../controller/auth')

router.use(express.json());


router.get('/auth/signup' , authCntrl.auth_signup_get)
router.post('/auth/auth/signup'  , authCntrl.auth_signup_post)


router.get('/auth/auth/signin', authCntrl.auth_signup_get);
router.post('/auth/auth/signin', authCntrl.auth_signin_post);

router.get("/auth/logout", authCntrl.auth_logout_get);

module.exports = router