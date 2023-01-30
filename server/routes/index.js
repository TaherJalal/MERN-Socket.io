const express = require('express')
const router = express.Router()

const indexCntrl = require('../controller/index')

router.get('/home' , indexCntrl.index_get)


module.exports = router