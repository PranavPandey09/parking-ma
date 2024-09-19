import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    const smoothScroll = (event) => {
      const target = event.target.getAttribute('href');
      if (target && target.startsWith('#')) {
        event.preventDefault();
        const targetSection = document.querySelector(target);
        window.scrollTo({
          top: targetSection.offsetTop - 60, // Offset for navbar height
          behavior: 'smooth',
        });
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => anchor.addEventListener('click', smoothScroll));

    return () => {
      anchors.forEach(anchor => anchor.removeEventListener('click', smoothScroll));
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutUs />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
