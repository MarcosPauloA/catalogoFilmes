import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/upcoming">Upcoming Movies</a></li>
      </ul>
    </div>
  );
}

export default Header;