const express = require('express')
const router = express.Router()

const Authcontroller = require('../controllers/AuthController')

router.post('/register', Authcontroller.register)
router.post('/login', Authcontroller.login)

module.exports = router
