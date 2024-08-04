// src/components/Banner.js
import React from 'react';
import '../css/Banner.css';
import plant1 from '../assets/plant1.png';
import plant2 from '../assets/plant2.png';

const Banner = () => {
  return (
    <section className="banner">
      <div className="heading">Heading</div>
      <div className="images">
        <img src={plant1} alt="Plant 1" />
        <img src={plant2} alt="Plant 2" />
      </div>
    </section>
  );
}

export default Banner;