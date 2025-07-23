import React from 'react';
import './NewsTicker.css';

const news = [
  'Admissions Open for 2025-26!',
  'Download the latest Academic Calendar.',
  'Placement drive for final year students.',
  'Short Term Courses available now.'
];


function NewsTicker() {
  return (
    <div className="news-ticker">
      <span className="news-label">Notice:</span>
      <div className="ticker-wrap" aria-label="News Ticker">
        <div className="ticker-move">
          {news.join(' | ')}
        </div>
      </div>
    </div>
  );
}

export default NewsTicker;
