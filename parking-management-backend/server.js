// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const vehicleRoutes = require('./routes/vehicleRoutes');
// require('dotenv').config();

// const app = express();
// const port = process.env.PORT || 5000;

// // Middleware
// app.use(express.json());
// app.use(cors());

// // MongoDB connection
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));

// // Routes
// app.use('/api/vehicles', vehicleRoutes);

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;



app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://pranavpandey2309:MtWiLa6cwFhxb51g@cluster0.a1lhl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Failed to connect to MongoDB Atlas', err));

const vehicleSchema = new mongoose.Schema({
  vehicleType: String,
  ticketNumber: String,
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

app.post('/api/vehicles/park', async (req, res) => {
  const { vehicleType } = req.body;

  if (!['car', 'bike', 'truck'].includes(vehicleType)) {
    return res.status(400).send({ error: 'Invalid vehicle type' });
  }

  // Generate a unique ticket number
  const ticketNumber = `${Math.floor(Math.random() * 1000)}`;

  // Save to database
  const vehicle = new Vehicle({ vehicleType, ticketNumber });
  await vehicle.save();

  res.send({ ticketNumber });
});

app.post('/api/vehicles/unpark', async (req, res) => {
  const { vehicleType, ticketNumber } = req.body;

  if (!['car', 'bike', 'truck'].includes(vehicleType)) {
    return res.status(400).send({ error: 'Invalid vehicle type' });
  }

  // Find and delete the vehicle
  const result = await Vehicle.findOneAndDelete({ vehicleType, ticketNumber });

  if (!result) {
    return res.status(400).send({ success: false });
  }

  res.send({ success: true });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
