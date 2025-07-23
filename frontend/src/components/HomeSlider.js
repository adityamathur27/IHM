import React, { useState } from 'react';
import './HomeSlider.css';
import img1 from '../assets/images/IMG20211229125345.jpg';
import img2 from '../assets/images/IMG20211229130330.jpg';
import img3 from '../assets/images/IMG20211229130356.jpg';

const images = [img1, img2, img3];

function HomeSlider() {
  const [current, setCurrent] = useState(0);
  const nextSlide = () => setCurrent((current + 1) % images.length);
  const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className="slider">
      <button className="slider-btn left" onClick={prevSlide}>&lt;</button>
      <img src={images[current]} alt="slider" className="slider-img" />
      <button className="slider-btn right" onClick={nextSlide}>&gt;</button>
    </div>
  );
}

export default HomeSlider;
