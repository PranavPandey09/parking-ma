import React from 'react';
import './AboutUs.css';

// Import your images
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';
import image4 from '../assets/images/image4.jpg';

const AboutUs = () => {
  return (
    <section id="aboutus">
      <div className="about-us-container">
        <div className="about-us-text">
          <h2>Why Choose Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
          <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...</p>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...</p>
        </div>
        <div className="about-us-images">
          <div className="row">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
          </div>
          <div className="row">
            <img src={image3} alt="" />
            <img src={image4} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
