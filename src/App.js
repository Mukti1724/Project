// src/App.js
import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import FeaturedProducts from './components/FeaturedProducts';
import Pagination from './components/Pagination';
import './App.css';
import { Router } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Banner />
      <FeaturedProducts />
      <Pagination />
    </div>
    </Router>
  );
}

export default App;