import React from 'react';
import Icon from './Icon';
import SearchComponent from './SearchComponent';
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
      {/* <SearchComponent/> */}
    </nav>
    </>
  );
};

export default NavigationBar;