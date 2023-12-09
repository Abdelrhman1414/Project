import React from 'react';
import Icon from './Icon';

const NavigationBar = ({ links }) => {
  return (
    <>
    <nav>
      <div className="links">
        <Icon />
        {links.map((link, index) => (
          <a key={index} href={link.url}>
            {link.text}
          </a>
        ))}
      </div>
    </nav>
    </>
  );
};

export default NavigationBar;