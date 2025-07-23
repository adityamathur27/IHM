
import React from 'react';
import './Downloads.css';
import './Downloads.css';

function Downloads() {
  return (
    <section className="downloads" id="downloads">
      <h2>Download Materials</h2>
      <ul>
        <li><a href={require('../assets/pdfs/Diploma Admission Form.pdf')} target="_blank" rel="noopener noreferrer">Diploma Admission Form (PDF)</a></li>
        <li><a href={require('../assets/docs/About_Food Craft Institute.docx')} target="_blank" rel="noopener noreferrer">About Food Craft Institute (DOCX)</a></li>
        <li><a href={require('../assets/docs/photos.pptx')} target="_blank" rel="noopener noreferrer">Photos Presentation (PPTX)</a></li>
        {/* Add more downloads as needed */}
      </ul>
    </section>
  );
}

export default Downloads;
