// backend/models/Trader.js
const mongoose = require('mongoose');

const TraderSchema = new mongoose.Schema({
    name: String,
    winRate: Number,
    convictionLevel: Number,
    // Add more fields as needed
});

module.exports = mongoose.model('Trader', TraderSchema);
