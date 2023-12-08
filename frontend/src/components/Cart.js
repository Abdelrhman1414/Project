// AddToCart.js

import React, { useState } from 'react';
import './Cart.css'; // Import the CSS file for styling

const AddToCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  const handleCheckoutClick = () => {
    // Add logic for handling checkout (e.g., redirect to checkout page)
    alert('Redirecting to checkout page!');
  };

  return (
    <div className="add-to-cart-container">
      <div className="cart-icon" onClick={handleCartClick}>
        🛒
        {cartItems.length > 0 && <span className="badge">{cartItems.length}</span>}
      </div>
      {showCart && (
        <div className="cart-dropdown">
          <h3>Your Cart</h3>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          {cartItems.length > 0 && (
            <button className="checkout-button" onClick={handleCheckoutClick}>
              Checkout
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default AddToCart;
