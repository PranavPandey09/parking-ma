import React, { useState } from 'react';
import './Services.css';
import carImage from '../assets/images/car.png'; // Importing the image
import axios from 'axios';

const Service = () => {
  const [parkedVehicles, setParkedVehicles] = useState({
    car: Array(7).fill(null),  // 7 slots for cars
    bike: Array(7).fill(null), // 7 slots for bikes
    truck: Array(7).fill(null) // 7 slots for trucks
  });
  const [ticketNumber, setTicketNumber] = useState('');
  const [vehicleType, setVehicleType] = useState('');
   // eslint-disable-next-line
  const [message, setMessage] = useState('');

  const handleParkVehicle = async () => {
    if (!vehicleType) {
      alert("Please select a vehicle type.");
      return;
    }

    try {
      const response = await axios.post('https://parking-ma.vercel.app/api/vehicles/park', {
        vehicleType
      });

      const { ticketNumber } = response.data;

      if (!ticketNumber) {
        setMessage("Failed to generate a ticket number. Please try again.");
        return;
      }

      const slots = parkedVehicles[vehicleType];
      const emptySlotIndex = slots.indexOf(null);

      if (emptySlotIndex === -1) {
        setMessage("No available slots for this vehicle type.");
        return;
      }

      const updatedVehicles = { ...parkedVehicles };
      updatedVehicles[vehicleType][emptySlotIndex] = ticketNumber;
      setParkedVehicles(updatedVehicles);
      setTicketNumber(ticketNumber);

      setMessage(`Vehicle parked successfully. Your ticket number is: ${ticketNumber}`);
    } catch (error) {
      console.error("Error parking vehicle:", error);
      setMessage('Error parking vehicle. Please try again.');
    }
  };

  const handleUnparkVehicle = async () => {
    if (!vehicleType || !ticketNumber) {
      alert("Please select a vehicle type and enter a ticket number.");
      return;
    }

    try {
      const response = await axios.post('https://parking-ma.vercel.app/api/vehicles/unpark', {
        vehicleType,
        ticketNumber
      });

      if (response.data.success) {
        const slots = parkedVehicles[vehicleType];
        const vehicleIndex = slots.indexOf(ticketNumber);

        if (vehicleIndex === -1) {
          setMessage("Invalid ticket number or no vehicle found.");
          return;
        }

        const updatedVehicles = { ...parkedVehicles };
        updatedVehicles[vehicleType][vehicleIndex] = null;
        setParkedVehicles(updatedVehicles);
        setTicketNumber('');

        setMessage("Vehicle unparked successfully.");
      } else {
        setMessage("Failed to unpark vehicle. Please check the ticket number.");
      }
    } catch (error) {
      console.error("Error unparking vehicle:", error);
      setMessage('Error unparking vehicle. Please try again.');
    }
  };

  return (
    <section id="services">
      <div className="service-container">
        <div className="service-image">
          <img src={carImage} alt="Car" />
        </div>
        <div className="service-form">
          <h2>Parking Management</h2>
          <div>
            <h3>Park a Vehicle</h3>
            <label>Select Vehicle Type:</label>
            <select onChange={(e) => setVehicleType(e.target.value)} value={vehicleType}>
              <option value="">Choose one</option>
              <option value="car">Car</option>
              <option value="bike">Bike</option>
              <option value="truck">Truck</option>
            </select>
            <button className="park-button" onClick={handleParkVehicle}>
              Park Vehicle
            </button>
            {ticketNumber && <p>Your Ticket Number: {ticketNumber}</p>}
          </div>
          <div>
            <h3>Unpark a Vehicle</h3>
            <label>Select Vehicle Type:</label>
            <select onChange={(e) => setVehicleType(e.target.value)} value={vehicleType}>
              <option value="">Choose one</option>
              <option value="car">Car</option>
              <option value="bike">Bike</option>
              <option value="truck">Truck</option>
            </select>
            <label>Enter Ticket Number:</label>
            <input type="text" value={ticketNumber} onChange={(e) => setTicketNumber(e.target.value)} />
            <button className="unpark-button" onClick={handleUnparkVehicle}>
              Unpark Vehicle
            </button>
          </div>

          <div className="floors">
            <h3>Car Floor</h3>
            <div className="slots">
              {parkedVehicles.car.map((vehicle, index) => (
                <div className={`slot ${vehicle ? 'occupied' : ''}`} key={index}>
                  {vehicle ? `Ticket: ${vehicle}` : 'Empty'}
                </div>
              ))}
            </div>
            <h3>Bike Floor</h3>
            <div className="slots">
              {parkedVehicles.bike.map((vehicle, index) => (
                <div className={`slot ${vehicle ? 'occupied' : ''}`} key={index}>
                  {vehicle ? `Ticket: ${vehicle}` : 'Empty'}
                </div>
              ))}
            </div>
            <h3>Truck Floor</h3>
            <div className="slots">
              {parkedVehicles.truck.map((vehicle, index) => (
                <div className={`slot ${vehicle ? 'occupied' : ''}`} key={index}>
                  {vehicle ? `Ticket: ${vehicle}` : 'Empty'}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
