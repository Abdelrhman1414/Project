import React, { useState } from 'react';

const SearchComponent = ({ data, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Perform search logic here (e.g., filter data based on searchTerm)
    const searchResults = data.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Pass the search results to the parent component
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
