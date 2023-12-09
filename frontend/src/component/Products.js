import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import productsList from './ProductList';
import NavigationBar from './NavigationBar';
import Item from './Item';
import SearchComponent from './SearchComponent';
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
      <SearchComponent/>

      <div className="content-container">
        <div className="product-list">
          <h1 className="ProductHead">Mobile Phones</h1>
          <div className="card-container">
            {productsList
              .filter(product => selectedCategory === 'All' || product.category === selectedCategory)
              .map((product) => (
                <Link key={product.id} to={`/products/${product.id}`} className="product-card-link">
                  <div className="product-card">
                    <Item item={product} />
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>

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