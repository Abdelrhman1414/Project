import React from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from './NavigationBar';

const navLinks = [
    { text: 'Home ', url: '/' },
    { text: 'Products ', url: '/Product' },
    { text: ' Contact Us ', url: '/ContactUs' },
  ];


  const About = () => {
    return (
      <div className="About-page">
        <NavigationBar links={navLinks}/>
        {/* <h1 className="ProductHead">Mobile Phones</h1> */}
        <p className='about'>Our mobile phone shop , You can get any phone you want.</p>
      </div>
    );
  };
  
  export default About;