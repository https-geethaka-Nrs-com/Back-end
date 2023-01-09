const express = require('express')
const router = express.Router()

const fuelStatusController = require('../controllers/FuelStatusController')
const updateFuelStatusByName = require('../controllers/FuelStatusController')

router.post('/', fuelStatusController.addFuelStatus)
router.post("/update", updateFuelStatusByName.updateFuelStatusByName)

module.exports = router