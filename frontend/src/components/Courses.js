import React from 'react';
import './Courses.css';
import bscImg from '../assets/images/IMG_20210611_153835__01.jpg';
import diplomaImg from '../assets/images/IMG_20210622_140252.jpg';
import craftImg from '../assets/images/IMG_20210622_140322.jpg';
import skillImg from '../assets/images/IMG_20210622_140607__01__01.jpg';

function Courses() {
  return (
    <section className="courses" id="courses">
      <h2>Courses Offered</h2>
      <div className="courses-list">
        <div className="course-card">
          <img src={bscImg} alt="B.Sc H&HA" />
          <a href="/courses/bsc-hha" className="course-link">
          <h3>B.Sc H&HA</h3></a>
          <p>Bachelor of Science in Hospitality & Hotel Administration (3 Years)</p>
        </div>
        <div className="course-card">
          <img src={diplomaImg} alt="Diploma Courses" />
          <a href="/courses/diploma" className="course-link">
          <h3>Diploma Courses</h3></a>
          <p>Diploma in Hotel Management (1.5 Years) - Food Production, Bakery, F&B Services, Front Office, Housekeeping</p>
        </div>
        <div className="course-card">
          <img src={craftImg} alt="Craftsmanship Program" />
          <a href="/courses/craftsmanship" className="course-link">
          <h3>Craftsmanship Program</h3></a>
          <p>6 months to 1 year programs in Food Production and F&B Service for 10th pass students</p>
        </div>
        <div className="course-card">
          <img src={skillImg} alt="Skill Development" />
          <a href="/courses/skill-development" className="course-link">
          <h3>Skill Development</h3></a>
          <p>Short-term, fee-less courses for skill, semi-skilled, and unskilled aspirants (HSRT, Guide, Cooks, Stewards, etc.)</p>
        </div>
      </div>
    </section>
  );
}

export default Courses;
