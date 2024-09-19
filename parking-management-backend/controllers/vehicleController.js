const Vehicle = require('../models/Vehicle');

// Park a vehicle
exports.parkVehicle = async (req, res) => {
  const { vehicleType, ticketNumber } = req.body;

  try {
    const newVehicle = new Vehicle({
      vehicleType,
      ticketNumber,
    });

    await newVehicle.save();
    res.status(201).json({ message: 'Vehicle parked successfully', ticketNumber });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Unpark a vehicle
exports.unparkVehicle = async (req, res) => {
  const { ticketNumber } = req.body;

  try {
    const vehicle = await Vehicle.findOneAndDelete({ ticketNumber });

    if (!vehicle) {
      return res.status(404).json({ error: 'Vehicle not found' });
    }

    res.status(200).json({ message: 'Vehicle unparked successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
