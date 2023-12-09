import React, { useState } from 'react';

const AddProduct = () => {
  // State to store the product details
  const [product, setProduct] = useState({
    name: '',
    price: '',
    image: '',
    description: '',
    category: '',
    // Add other fields as needed
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to save the product (e.g., send an API request)
    console.log('Product submitted:', product);
    // You can add additional logic to save the product to a database or perform other actions
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={product.price}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={product.description}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
