import React from 'react';

import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import Opportunities from '../components/landing/Opportunities';
import Impact from '../components/landing/Impact';
import HowItWorks from '../components/landing/HowItWorks';
import WhyJoinUs from '../components/landing/WhyJoinUs';
import Footer from '../components/landing/Footer';
const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-[140px]"> 
      <Hero />
      <Opportunities />
      <Impact />
      <HowItWorks />
      <WhyJoinUs />
      <Footer />
    </div>

    </div>
  );
};

export default LandingPage;