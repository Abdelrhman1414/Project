import React, { useState } from 'react';
import NavigationBar from './NavigationBar';
import Icon from "./Icon"
// import './HomePage.css';

const HomePage = () => {
  const phonesData = 
  [ { id: 1, title: "Apple iPhone 15 Pro Max 256GB - Blue Titanium",description: "SIM Card: Single SIM (Nano-SIM) Screen: 6.7 inches , 1290  x 2796 pixels RAM: 8GB Internal memory: 256GB Rear Camera: Triple: 48 MP + 12 MP + 12MP Selfie Camera: 12 MP Color: Blue Titanium", price:77999.00,"images":"https://smhttp-ssl-73217.nexcesscdn.net/pub/media/catalog/product/cache/661473ab953cdcdf4c3b607144109b90/m/a/ma645-1.jpg" },
  { id: 2, title: "Apple iPhone 14 Pro Max - 256GB - Purple",description: " SIM Card: Nano-SIM and eSIMScreen: 6.7 inches , 1290 x 2796 pixels RAM: 6GB Internal memory: 256GB Rear Camera: Triple: 48MP + 12MP + 12MP Selfie Camera: 12MP Color: Purple", price: 66999.00, "images":"https://smhttp-ssl-73217.nexcesscdn.net/pub/media/catalog/product/cache/661473ab953cdcdf4c3b607144109b90/a/p/apple-iphone-14-pro-max-3.jpg" },  
  { id: 3, title: "Apple iPhone 13 - 256GB - Face ID - Blue",description: "SIM Card: Single SIM (Nano-SIM) Screen: 6.1 inches , 1170 x 2532 pixels RAM: 4GB Internal memory: 256GB Camera: Primary: Dual: 12MP + 12MP / Secondary: : 12MP + 12MP Color: Blue",
   price: 41999, "images": "https://smhttp-ssl-73217.nexcesscdn.net/pub/media/catalog/product/cache/661473ab953cdcdf4c3b607144109b90/p/h/photoshoptemplates_for_accessories_9__1_1_1.jpg" },
    ];

  const [phones, setPhones] = useState(phonesData);

  const navLinks = [
    { text: 'Products ', url: '/Product' },
    { text: ' About ', url: '/About' },
    { text: ' Contact Us ', url: '/ContactUs' },
  ];

  return (
    <div className="home-page">
      <NavigationBar links={navLinks}/>
    <h1 class="welcome">Welcome to Our Shop</h1>

      <div className="phone-list-home">
        {phones.map((phone) => (
          <div key={phone.id} className="product-card-list">
            <img src={phone.images} alt={phone.name} />
            <h2>{phone.title}</h2>
            <p> {phone.description}</p>
            <p> {"Price :"}{phone.price}{"$"}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
