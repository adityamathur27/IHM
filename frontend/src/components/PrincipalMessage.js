import React from 'react';
import principalImg from '../assets/images/IMG_20210622_141052.jpg';
import './PrincipalMessage.css';

function PrincipalMessage() {
  return (
    <section className="principal-message" id="principal">
      <h2>Principal’s Message</h2>
      <div className="principal-content">
        <img src={principalImg} alt="Principal" className="principal-img" />
        <div>
          <p>
            "Training is a strong part of student’s professional development and this complements our high quality academic programme. Students learn a rich portfolio of skills in Service, Bar, Kitchen, Housekeeping, Front Office, Management, Teamwork, and Personal Development. Our experience is that it develops a strong professional attitude in students, which is valued by future employers."
          </p>
          <p className="principal-name">– Principal, IHM Sumerpur</p>
        </div>
      </div>
    </section>
  );
}

export default PrincipalMessage;
