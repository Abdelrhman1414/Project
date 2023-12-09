import React, { useState } from 'react';
import ProductList from './ProductList';
const SearchComponent = ({ ProductList, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    const searchResults = ProductList.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    onSearch(searchResults);
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="input"
      />

    </div>
  );
};

export default SearchComponent;
