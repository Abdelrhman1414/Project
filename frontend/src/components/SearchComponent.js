import React, { useState } from 'react';

const SearchComponent = ({ data, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    const searchResults = data.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    onSearch(searchResults);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchComponent;
