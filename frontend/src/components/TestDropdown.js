import React, { useState } from 'react';

export default function TestDropdown() {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div style={{ padding: 40, background: '#14375a', minHeight: 300 }}>
      <ul style={{ display: 'flex', gap: 20, listStyle: 'none', color: '#fff' }}>
        <li>Home</li>
        <li>About</li>
        <li
          style={{ position: 'relative', cursor: 'pointer' }}
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          <span>Courses ▾</span>
          {dropdown && (
            <ul style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              background: '#fff',
              color: '#14375a',
              minWidth: 210,
              boxShadow: '0 4px 16px rgba(20,55,90,0.15)',
              border: '1px solid #e0e0e0',
              borderRadius: 8,
              zIndex: 2000,
              listStyle: 'none',
              padding: '0.5rem 0',
              margin: 0
            }}>
              <li style={{ padding: '0.6rem 1.5rem', whiteSpace: 'nowrap' }}>All Courses</li>
              <li style={{ padding: '0.6rem 1.5rem', whiteSpace: 'nowrap' }}>B.Sc H&HA</li>
              <li style={{ padding: '0.6rem 1.5rem', whiteSpace: 'nowrap' }}>Diploma</li>
              <li style={{ padding: '0.6rem 1.5rem', whiteSpace: 'nowrap' }}>Craftsmanship</li>
              <li style={{ padding: '0.6rem 1.5rem', whiteSpace: 'nowrap' }}>Skill Development</li>
            </ul>
          )}
        </li>
        <li>Gallery</li>
        <li>Downloads</li>
        <li>Principal's Message</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
