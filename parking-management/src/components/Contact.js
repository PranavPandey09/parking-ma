// import React from 'react';
// import './Contact.css';

// const Contact = () => {
//   return (
//     <section id="contact" className="contact-section">
//       <h2>Contact Us</h2>
//       <form>
//         <label>Name:</label>
//         <input type="text" placeholder="Enter your name" />
        
//         <label>Email:</label>
//         <input type="email" placeholder="Enter your email" />

//         <label>Phone:</label>
//         <input type="tel" placeholder="Enter your phone number" />

//         <label>Message:</label>
//         <textarea placeholder="Your message"></textarea>

//         <button type="submit">Send</button>
//       </form>
//     </section>
//   );
// };

// export default Contact;

import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Message sent successfully!');
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <form onSubmit={handleSubmit}>
          <h2>Contact Us</h2>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
