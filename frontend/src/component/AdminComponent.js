// AdminComponent.js
import React, { useState } from 'react';

const AdminComponent = () => {
  const [itemName, setItemName] = useState('');

  const handleAddItem = () => {
    // Logic to add item (send a request to the server, update state, etc.)
    console.log(`Item added: ${itemName}`);
    setItemName('');
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <input
        type="text"
        placeholder="Enter item name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

export default AdminComponent;
