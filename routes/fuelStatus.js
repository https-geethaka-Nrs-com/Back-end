const express = require('express')
const router = express.Router()

const fuelStatusController = require('../controllers/FuelStatusController')

router.post('/',fuelStatusController.addFuelStatus)

module.exports = router