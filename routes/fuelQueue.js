const express = require('express')
const router = express.Router()

const fuelQueueController = require('../controllers/FuelQueueController')

router.post('/',fuelQueueController.addFuelQueue)
router.post('/exitAfterPump',fuelQueueController.exitAfterPump)
router.post('/exitBeforePump',fuelQueueController.exitBeforePump)
router.put('/updateFuelQueueStatusByUserName',fuelQueueController.updateFuelQueueStatusByUserName)

module.exports = router

