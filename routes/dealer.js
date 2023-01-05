const express = require('express')
const router = express.Router()

const dealerController = require('../controllers/DealerController')
const Router = require('./auth')
const { route } = require('./auth')

router.get('/',dealerController.index)
router.post('/show',dealerController.show)
router.post('/store',dealerController.store)
router.post('/update',dealerController.update)
router.post('/delete',dealerController.destroy)

module.exports = router