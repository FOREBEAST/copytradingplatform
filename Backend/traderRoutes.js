// backend/routes/traderRoutes.js
const express = require('express');
const router = express.Router();
const traderController = require('../controllers/traderController');

router.get('/', traderController.getAllTraders);
router.post('/', traderController.createTrader);

module.exports = router;
