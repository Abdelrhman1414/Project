import React from 'react';
import { Link } from 'react-router-dom';
import productsList from './ProductList';
import NavigationBar from './NavigationBar';
import Item from './item';

const navLinks = [
  { text: 'Home ', url: '/' },
  { text: ' About ', url: '/About' },
  { text: ' Contact Us ', url: '/ContactUs' },
];

const Products = () => {
  return (
    <div className="products-page">
      <NavigationBar links={navLinks}/>
      <h1 className="ProductHead">Mobile Phones</h1>
      <div className="product-list">
        {productsList.map((product) => (
          <Link key={product.id} to={`/products/${product.id}`}>
            <Item item={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;