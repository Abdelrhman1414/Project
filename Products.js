// Products.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import productsList from './ProductList';
import NavigationBar from './NavigationBar';
import Item from './item';
// import './Products.css'; // Import your CSS file for styling

const navLinks = [
  { text: 'Home ', url: '/' },
  { text: ' About ', url: '/About' },
  { text: ' Contact Us ', url: '/ContactUs' },
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const uniqueCategories = ['All', ...new Set(productsList.map(product => product.category))];

  return (
    <div className="products-page">
      <NavigationBar links={navLinks} />

      <div className="content-container">
        <div className="product-list">
          <h1 className="ProductHead">Mobile Phones</h1>
          {productsList
            .filter(product => selectedCategory === 'All' || product.category === selectedCategory)
            .map((product) => (
              <Link key={product.id} to={`/products/${product.id}`}>
                <Item item={product} />
              </Link>
            ))}
        </div>
      </div>

      {/* Category Filter on the right side */}
      <div className="category-filter">
        <h2>Categories</h2>
        <ul>
          {uniqueCategories.map(category => (
            <li key={category} onClick={() => handleCategoryChange(category)}>
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Products;
