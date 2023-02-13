const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.get('/', controller.getAllFlight)

router.post("/", controller.bookFlight);

router.get("/:UserFlight", controller.getMyFlight);

module.exports = router;

