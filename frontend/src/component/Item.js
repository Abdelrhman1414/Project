// Item.js

import React from 'react';

const Item = ({ item }) => {
  return (
    <div className="item">
      <img src={item.image} alt={item.name} className="product-image" />
      <h3 className="product-name">{item.name}</h3>
      <p className="product-description">{item.description}</p>
      {/* Add other product details as needed */}
    </div>
  );
};

export default Item;
