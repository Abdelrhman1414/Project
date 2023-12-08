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
    <div className="item-detail">
      <h1>{selectedItem.title}</h1>
      <img src={selectedItem.image} alt={selectedItem.name} />
      <p>{selectedItem.description}</p>
      <p className="Price">{"Price: "}{selectedItem.price} {"$"}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ItemDetail;