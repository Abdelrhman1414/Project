import React from 'react';
import { useParams } from 'react-router-dom';
import productsList from './ProductList';
const ItemDetail = () => {
  const { itemId } = useParams();
  const selectedItem = productsList.find((item) => item.id === parseInt(itemId, 10));

  if (!selectedItem) {
    return <div>Item not found</div>;
  }

  return (
    <div className="item-detail-container">
      <h1 className="item-detail-title">{selectedItem.title}</h1>
      <img src={selectedItem.image} alt={selectedItem.name} className="item-detail-image" />
      <p className="item-detail-description">{selectedItem.description}</p>
      <p className="item-detail-price">Price: ${selectedItem.price}</p>
      <button className="item-detail-add-button">Add to Cart</button>
    </div>
  );
};

export default ItemDetail;
