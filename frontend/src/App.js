import './App.css';
import HomePage from './component/home.js';
import React from 'react';
import './App.css';
import Products from './component/Products.js';
import About from './component/About.js';
import ContactUs from './component/ContactUs.js';
import ItemDetail from './component/ItemDetail.js';
import * as ROUTES from "./constants/routes"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
