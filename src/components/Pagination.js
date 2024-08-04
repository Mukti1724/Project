// src/components/Pagination.js
import React from 'react';
import '../css/Pagination.css';

const Pagination = () => {
  return (
    <footer className="pagination">
      <a href="#">&lt; Previous</a>
      <span>1</span>
      <a href="#">Next &gt;</a>
    </footer>
  );
}

export default Pagination;