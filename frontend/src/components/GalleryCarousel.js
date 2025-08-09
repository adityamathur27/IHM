import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/images/Front_View.jpg';
import img2 from '../assets/images/Side_View.jpg';
import img3 from '../assets/images/lecture.jpg';
import img4 from '../assets/images/Mess.jpg';

const images = [
  { src: img1, caption: 'Campus View Front' },
  { src: img2, caption: 'Campus View Side' },
  { src: img3, caption: 'Discussion' },
  { src: img4, caption: 'Lab Session' },
];

function GalleryCarousel() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIndex(i => (i + 1) % images.length), 3500);
    return () => clearInterval(timer);
  }, []);
  return (
    <Carousel activeIndex={index} onSelect={setIndex} fade interval={null}>
      {images.map((img, idx) => (
        <Carousel.Item key={idx}>
          <img className="d-block w-100" src={img.src} alt={img.caption} style={{maxHeight:'420px',objectFit:'cover'}} />
          <Carousel.Caption>
            <h5>{img.caption}</h5>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default GalleryCarousel;
