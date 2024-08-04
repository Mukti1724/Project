// src/components/Product.js
import React from 'react';
import '../css/Product.css';

const Product = ({ image, name }) => {
  return (
    <div className="product">
      {image ? <img src={image} alt={name} /> : <div className="placeholder"></div>}
      <p>{name || 'Title'}</p>
    </div>
  );
}

export default Product;