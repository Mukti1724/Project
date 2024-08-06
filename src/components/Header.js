// src/components/Header.js
import React from 'react';
import '../css/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">B.plant</div>
      <nav>
        <ul>
          <li><a href="./pages/contact.js">Contact us</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;