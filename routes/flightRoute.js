const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.get('/', controller.getAllFlight)

router.post("/", controller.bookFlight);

router.get("/:id", controller.getMyFlight);

router.put("/:id", controller.updateFlight);

router.delete("/", controller.deleteFlight);

router.delete("/:id", controller.deleteMyFlight);

module.exports = router;