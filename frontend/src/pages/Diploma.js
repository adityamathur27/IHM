

import React from 'react';
import diplomaImg from '../assets/images/IMG_20210622_140252.jpg';
import './Diploma.css';

function Diploma() {
  return (
    <section className="course-detail">
      <h2>Diploma Courses</h2>
      <img src={diplomaImg} alt="Diploma Courses" style={{width:'100%',maxWidth:'500px',borderRadius:'8px',margin:'1rem 0'}} />
      <p>Diploma in Hotel Management (1.5 years) offers specialized courses in:</p>
      <ul>
        <li>Food Production</li>
        <li>Bakery & Confectionery</li>
        <li>Food & Beverage Services</li>
        <li>Front Office Operations</li>
        <li>Housekeeping</li>
      </ul>
      <p>These programs enable students to get jobs easily in the hospitality industry in the related field. The curriculum is designed to provide hands-on training and industry exposure.</p>
      <ul>
        <li><b>Duration:</b> 1.5 Years</li>
        <li><b>Eligibility:</b> 10th pass</li>
        <li><b>Career Opportunities:</b> Entry-level jobs in hotels, restaurants, bakeries, and more</li>
      </ul>
    </section>
  );
}

export default Diploma;
