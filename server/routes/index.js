const express = require('express')
const router = express.Router()

const indexCntrl = require('../controller/index')

router.get('/' , indexCntrl.index_get)



module.exports = router