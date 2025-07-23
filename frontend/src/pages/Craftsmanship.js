

import React from 'react';
import craftImg from '../assets/images/IMG_20210622_140322.jpg';
import './Craftsmanship.css';

function Craftsmanship() {
  return (
    <section className="course-detail">
      <h2>Craftsmanship Program</h2>
      <img src={craftImg} alt="Craftsmanship Program" style={{width:'100%',maxWidth:'500px',borderRadius:'8px',margin:'1rem 0'}} />
      <p>This program is offered in two categories:</p>
      <ul>
        <li>6 months in Food Production</li>
        <li>6 months in F&B Service</li>
      </ul>
      <p>It is designed especially for 10th pass students who are looking to set up business enterprises or for employment in the hospitality industry. The program focuses on practical skills and industry readiness.</p>
      <ul>
        <li><b>Duration:</b> 6 months to 1 year</li>
        <li><b>Eligibility:</b> 10th pass</li>
        <li><b>Career Opportunities:</b> Entry-level jobs, entrepreneurship, catering, and more</li>
      </ul>
    </section>
  );
}

export default Craftsmanship;
