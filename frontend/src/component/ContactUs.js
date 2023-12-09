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
        <p>You can Contact Us with emails :</p>
        <p><a href="mailto:aminadel143@gmail.com"> aminadel143@gmail.com</a></p>
        <p><a href="mailto:mohamedmatter@gmail.com"> mohamedmatter@gmail.com</a></p>
        <p><a href="mailto:abdelrahmanibrahim@gmail.com"> abdelrahmanibrahim@gmail.com</a></p>
        <p><a href="mailto:mohamedyasser@gmail.com"> mohamedyasser@gmail.com</a></p>
        <p><a href="mailto:nassar@gmail.com"> nassar@gmail.com</a></p>
      </div>
    );
  };
  
  export default ContactUs;
