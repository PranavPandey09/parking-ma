import React from 'react';
import './Home.css';
 // eslint-disable-next-line
import backgroundImage from '../assets/background.jpg';


const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1>Parking Management System</h1>
        <p>Manage your parking with ease and efficiency. Our system helps you track vehicles, manage slots, and ensure smooth parking operations.</p>
        <p>Fast, Secure, and Reliable. Your vehicle is in safe hands!</p>
      </div>
    </section>
  );
};

export default Home;
