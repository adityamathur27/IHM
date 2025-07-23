import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AccessibilityTools from './components/AccessibilityTools';
import Home from './pages/Home';
import About from './pages/About';
import CoursesPage from './pages/CoursesPage';

import Downloads from './pages/Downloads';
import Principal from './pages/Principal';
import ContactPage from './pages/ContactPage';
import Gallery from './pages/Gallery';


import BscHHA from './pages/BscHHA';
import Diploma from './pages/Diploma';
import Craftsmanship from './pages/Craftsmanship';
import SkillDevelopment from './pages/SkillDevelopment';


function AppRouter() {
  return (
    <Router>
      <AccessibilityTools />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/courses/bsc-hha" element={<BscHHA />} />
        <Route path="/courses/diploma" element={<Diploma />} />
        <Route path="/courses/craftsmanship" element={<Craftsmanship />} />
        <Route path="/courses/skill-development" element={<SkillDevelopment />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRouter;
