import React, { useState } from 'react';

const MyForm = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Other form submission logic can go here

    // Check if there are no errors before submitting the form
    if (!emailError) {
      console.log('Form submitted successfully');
    } else {
      console.log('Form has errors. Please fix them before submitting.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
      />
      {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
