const express = require('express')
const router = express.Router()

const Authcontroller = require('../controllers/AuthController')

router.post('/register', Authcontroller.register)

module.exports = router
