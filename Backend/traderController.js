// backend/controllers/traderController.js
const Trader = require('../models/Trader');

exports.getAllTraders = async (req, res) => {
    try {
        const traders = await Trader.find();
        res.json(traders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createTrader = async (req, res) => {
    const trader = new Trader(req.body);
    try {
        const newTrader = await trader.save();
        res.status(201).json(newTrader);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
