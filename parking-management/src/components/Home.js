import React from 'react';
import './Home.css';
import backgroundImage from '../assets/background.jpg'; // Importing the background image

const Home = () => {
  return (
    <section 
      id="home" 
      className="home-section"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Setting the background image here
    >
      <div className="home-content">
        <h1>Parking Management System</h1>
        <p>Manage your parking with ease and efficiency. Our system helps you track vehicles, manage slots, and ensure smooth parking operations.</p>
        <p>Fast, Secure, and Reliable. Your vehicle is in safe hands!</p>
      </div>
    </section>
  );
};

export default Home;
