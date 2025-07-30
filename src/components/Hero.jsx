import React from 'react';
import meImage from '../assets/me.jpg';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Transform Your Business with Technology</h1>
          <p>
            We provide cutting-edge technology solutions to help your business grow, 
            innovate, and stay ahead of the competition in today's digital world.
          </p>
          <a href="#services" className="cta-button">
            Get Started Today
          </a>
        </div>
        <div className="hero-image">
          <img src={meImage} alt="codeBernard - Technology Solutions Expert" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
