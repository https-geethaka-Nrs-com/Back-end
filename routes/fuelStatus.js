const express = require('express')
const Router = express.Router()

const fuelStatusController = require('../controllers/FuelStatusController')
const router = require('./auth')
const { route } = require('./auth')

router.post('/',fuelStatusController.addFuelStatus)

module.exports = router