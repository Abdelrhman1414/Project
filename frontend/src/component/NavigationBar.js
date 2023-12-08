import React from 'react';

const NavigationBar = ({ links }) => {
  return (
    <>
    <nav>
      <div className="links">
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