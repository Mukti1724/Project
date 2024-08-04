// src/App.js
import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import FeaturedProducts from './components/FeaturedProducts';
import Pagination from './components/Pagination';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <FeaturedProducts />
      <Pagination />
    </div>
  );
}

export default App;