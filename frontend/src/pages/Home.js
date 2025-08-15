import React from 'react';

import Hero from '../components/Hero';
import HomeSlider from '../components/HomeSlider';
import NewsTicker from '../components/NewsTicker';
import Gallery from '../components/GalleryCarousel';
import Placement from '../components/Placement';
import Testimonials from '../components/Testimonials';


function Home() {
  return (
    <>
      <NewsTicker />
      <HomeSlider />      
      <Hero />
      <Gallery />
      <Placement />
      <Testimonials />
    </>
  );
}

export default Home;
