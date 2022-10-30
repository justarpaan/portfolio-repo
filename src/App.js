import './App.css';
import HomeSection from './components/homeSection';
import Navbar from './components/navbar';
import React, { Component } from 'react';
import SkillSection from './components/skillsSection';
import CapabilitiesSection from './components/CapabilitiesSection'
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutMe from './components/About';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <HomeSection />
      <AboutMe />
      <SkillSection />
      <CapabilitiesSection />
      <Contact />
      <Footer /> 
    </React.Fragment>
  );
}

export default App;
