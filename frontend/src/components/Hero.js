import React from 'react';
import logo from '../assets/images/FCI Logo.jpg';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <img src={logo} alt="IHM Sumerpur Logo" className="hero-logo" />
      <h1>Welcome to IHM Sumerpur</h1>
      <p>State Institute of Hotel Management, Sumerpur</p>
    </section>
  );
}

export default Hero;
