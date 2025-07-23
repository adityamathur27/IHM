import React from 'react';
import './Footer.css';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <strong>IHM Sumerpur</strong> &copy; {new Date().getFullYear()} | All Rights Reserved
        </div>
        <div className="footer-links">
          <a href="/courses">Courses</a>
          <a href="/downloads">Downloads</a>
          <a href="/gallery">Gallery</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-contact">
          <p><b>Address:</b> Pali Road, Sumerpur, Rajasthan, India</p>
          <p><b>Email:</b> info@ihmsumerpur.ac.in</p>
          <p><b>Phone:</b> +91-XXXXXXXXXX</p>
        </div>
        <div className="footer-external">
          <a href="http://nchm.gov.in/" target="_blank" rel="noopener noreferrer">NCHMCT</a> |
          <a href="https://tourism.gov.in/" target="_blank" rel="noopener noreferrer">Ministry of Tourism</a> |
          <a href="http://www.thims.gov.in/" target="_blank" rel="noopener noreferrer">THIMS Login</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
