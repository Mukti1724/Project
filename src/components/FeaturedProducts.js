// src/components/FeaturedProducts.js
import React from 'react';
import '../css/FeaturedProducts.css';
import Product from './Product';
import tree1 from '../assets/tree1.png';
import tree2 from '../assets/tree2.png';
import tree3 from '../assets/tree3.png';

const FeaturedProducts = () => {
  const products = [
    { image: tree1, name: 'Tree 1' },
    { image: tree2, name: 'Tree 2' },
    { image: tree3, name: 'Tree 3' },
    { image: null, name: null }, // Placeholder for empty space
    { image: null, name: null }, // Placeholder for empty space
    { image: null, name: null }, // Placeholder for empty space
    { image: null, name: null }, // Placeholder for empty space
  ];

  return (
    <section className="featured-products">
      <h2>Featured Product</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <Product key={index} image={product.image} name={product.name} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;