

import React from 'react';
import bscImg from '../assets/images/IMG_20210611_153835__01.jpg';
import './BscHHA.css';

function BscHHA() {
  return (
    <section className="course-detail">
      <h2>B.Sc in Hospitality & Hotel Administration (H&HA)</h2>
      <img src={bscImg} alt="B.Sc H&HA" style={{width:'100%',maxWidth:'500px',borderRadius:'8px',margin:'1rem 10rem'}} />
      <p>The Bachelor of Science program in Hospitality and Hotel Administration is offered by NCHMCT, Noida and recognized by Jawaharlal Nehru University, New Delhi. This 3-year course equips students with all the required skills, knowledge, and attitude to efficiently discharge supervisory responsibilities in the Hospitality sector. The curriculum covers Food Production, Food & Beverage Service, Front Office, Housekeeping, and Management subjects.</p>
      <ul>
        <li><b>Duration:</b> 3 Years (6 semesters)</li>
        <li><b>Eligibility:</b> 10+2 or equivalent with English</li>
        <li><b>Affiliation:</b> NCHMCT & JNU</li>
        <li><b>Career Opportunities:</b> Hotels, Resorts, Airlines, Cruise Lines, Event Management, Academics, and more</li>
      </ul>
      <h3>Key Subjects</h3>
      <ul>
        <li>Food Production & Patisserie</li>
        <li>Food & Beverage Service</li>
        <li>Front Office Operations</li>
        <li>Housekeeping Operations</li>
        <li>Hotel Accountancy</li>
        <li>Communication Skills</li>
        <li>Management Principles</li>
      </ul>
    </section>
  );
}

export default BscHHA;
