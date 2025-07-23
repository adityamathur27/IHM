import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/images/IMG-20210611-WA0031.jpg';
import img2 from '../assets/images/IMG-20210611-WA0032__01.jpg';
import img3 from '../assets/images/IMG-20210625-WA0088.jpg';
import img4 from '../assets/images/IMG-20210812-WA0010.jpg';

const images = [
  { src: img1, caption: 'Campus View' },
  { src: img2, caption: 'Student Activity' },
  { src: img3, caption: 'Event Day' },
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
