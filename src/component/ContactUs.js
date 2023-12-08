import React from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from './NavigationBar';


const navLinks = [
    { text: 'Home ', url: '/' },
    { text: 'Products ', url: '/Product' },
    { text: ' About ', url: '/About' },
  ];

  const ContactUs = () => {
    return (
      <div className="About-page">
        <NavigationBar links={navLinks}/>
        <h1 className="ProductHead">Mobile Phones</h1>
      </div>
    );
  };
  
  export default ContactUs;
