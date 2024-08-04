// src/components/Header.js
import React from 'react';
import '../css/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">B.planet</div>
      <nav>
        <ul>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;