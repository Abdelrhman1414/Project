import './App.css';
import './Products.css';
import HomePage from './component/home.js';
import React , { useState }from 'react';
import Products from './component/Products.js';
import About from './component/About.js';
import ContactUs from './component/ContactUs.js';
import ItemDetail from './component/ItemDetail.js';
import * as ROUTES from "./constants/routes"
import './HomePage.css';
import './ItemDetail.css';
import './SearchComponent.css';
import UserComponent from './component/UserComponent.js';
import AdminComponent from './component/AdminComponent.js';
import { BrowserRouter as Router, Routes, Route,Link,Switch } from "react-router-dom";
import SearchComponent from './component/SearchComponent.js';

const App = () => {
  return (
<>
    <Router>
      <Routes>
        <Route path={ROUTES.Home} element={<HomePage />}/>
        <Route path={ROUTES.Product} element={<Products/>}/>
        <Route path={ROUTES.Item} element={<ItemDetail/>}/>
        <Route path={ROUTES.About} element={<About/>}/>
        <Route path={ROUTES.ContactUs} element={<ContactUs/>}/>
         </Routes>
      </Router>
    </>

  );
};

export default App;
