const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

router.post('/park', vehicleController.parkVehicle);
router.post('/unpark', vehicleController.unparkVehicle);

module.exports = router;
