const express = require('express')
const router = express.Router()

const fuelStationController = require('../controllers/FuelStationController')

router.get('/',fuelStationController.getAllFuelStations)
router.post('/',fuelStationController.addFuelStation)
router.get('/single/:id',fuelStationController.getFuelStation)
router.get('/dealer',fuelStationController.getFuelStationByDealer)
router.post('/addStatus/:id',fuelStationController.addFuelStatusToFuelStation)

module.exports = router