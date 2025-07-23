
import React, { useState } from 'react';
import './Placement.css';
import partner1 from '../assets/images/IMG_20210622_141658.jpg';
import partner2 from '../assets/images/IMG_20210622_141833.jpg';
import partner3 from '../assets/images/IMG20211229130549.jpg';
import partner4 from '../assets/images/IMG20211229130356.jpg';

const partners = [
  { img: partner1, name: 'Taj Hotels' },
  { img: partner2, name: 'Oberoi Hotels' },
  { img: partner3, name: 'ITC Hotels' },
  { img: partner4, name: 'Radisson Blu' },
];

function Placement() {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((current + 1) % partners.length);
  const prev = () => setCurrent((current - 1 + partners.length) % partners.length);
  return (
    <section className="placement" id="placement">
      <h2>Placement Partners</h2>
      <div className="placement-carousel">
        <button className="placement-btn left" onClick={prev}>&lt;</button>
        <div className="placement-logo-card">
          <img src={partners[current].img} alt={partners[current].name} />
          <div className="placement-partner-name">{partners[current].name}</div>
        </div>
        <button className="placement-btn right" onClick={next}>&gt;</button>
      </div>
      <div className="placement-info">
        <p>Our students are placed in leading hotels and hospitality organizations across India.</p>
      </div>
    </section>
  );
}

export default Placement;
