const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  vehicleType: {
    type: String,
    required: true,
  },
  ticketNumber: {
    type: String,
    required: true,
    unique: true,
  },
  parkedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
