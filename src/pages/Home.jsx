import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import TechStack from '../components/TechStack';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

const Home = () => {
  return (
    <main>
      <Hero />
      <Features />
      <TechStack />
      <Testimonials />
      <CallToAction />
    </main>
  );
};

export default Home;
