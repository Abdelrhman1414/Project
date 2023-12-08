// Profile.js

import React, { useState } from 'react';
import './Profile.css'; // Import the CSS file for styling

const Profile = () => {
  const [balance, setBalance] = useState(1000);
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john@example.com');
  const [image, setImage] = useState('path/to/default-image.jpg'); // Set a default image path

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    // Save updated user data to the backend
    setEditMode(false);
  };

  const handleImageChange = (e) => {
    // Handle image change and set the image path
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddImageButtonClick = () => {
    // Trigger the file input when the "Add Image" button is clicked
    document.getElementById('imageInput').click();
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="profile-image-container">
        <img src={image} alt="Profile" className="profile-image" />
        {editMode && (
          <div>
            <button className="add-image-button" onClick={handleAddImageButtonClick}>
              Add Image
            </button>
            <input
              type="file"
              id="imageInput"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
          </div>
        )}
      </div>
      <p>
        <strong>Name:</strong>{' '}
        {editMode ? (
          <textarea
            className="edit-textarea"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        ) : (
          name
        )}
      </p>
      <p>
        <strong>Email:</strong>{' '}
        {editMode ? (
          <textarea
            className="edit-textarea"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        ) : (
          email
        )}
      </p>
      <p>
        <strong>Balance:</strong> $
        {editMode ? (
          <textarea
            className="edit-textarea"
            value={balance}
            onChange={(e) => setBalance(parseFloat(e.target.value) || 0)}
          />
        ) : (
          balance
        )}
      </p>
      {editMode ? (
        <>
          <button className="save-button" onClick={handleSaveClick}>
            Save
          </button>
          <button className="edit-button" onClick={handleEditClick}>
            Cancel
          </button>
        </>
      ) : (
        <button className="edit-button" onClick={handleEditClick}>
          Edit
        </button>
      )}
    </div>
  );
};

export default Profile;
