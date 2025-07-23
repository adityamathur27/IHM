

import React from 'react';
import skillImg from '../assets/images/IMG_20210622_140607__01__01.jpg';
import './SkillDevelopment.css';

function SkillDevelopment() {
  return (
    <section className="course-detail">
      <h2>Skill Development Program</h2>
      <img src={skillImg} alt="Skill Development" style={{width:'100%',maxWidth:'500px',borderRadius:'8px',margin:'1rem 0'}} />
      <p>This fee-less course is offered by the Ministry of HRD, Government of India. It is tailor-made for class 8th pass, skilled, semi-skilled, or unskilled aspirants. The program includes:</p>
      <ul>
        <li>HSRT (Hospitality Skill Recognition Test)</li>
        <li>Skill Certification</li>
        <li>Guide Training</li>
        <li>Cooks Training</li>
        <li>Steward Training</li>
      </ul>
      <p>These short-term programs help participants gain employment or upskill in the hospitality sector.</p>
      <ul>
        <li><b>Duration:</b> Short-term (varies by program)</li>
        <li><b>Eligibility:</b> 8th pass and above</li>
        <li><b>Career Opportunities:</b> Entry-level jobs, upskilling, certification</li>
      </ul>
    </section>
  );
}

export default SkillDevelopment;
