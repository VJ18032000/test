const express = require('express')
const router = express.Router()

const  imageController= require('../controllers/image')
const upload = require('../middleware/image')

router.post('/create',upload.array('image',200),imageController.create)
router.get('/create',imageController.get)




module.exports=router