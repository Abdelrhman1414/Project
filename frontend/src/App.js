import "./App.css";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Home from "./components/Landing/Home";
import Users from "./components/auth/Users";
// import Login from "./components/Login.js";
import Cart from "./components/Cart.js";
import './components/Profile.css';
// import './components/Cart.css';
import React, { useState } from 'react';
import Reviews from "./components/Reviews.js";
import * as ROUTES from "./constants/routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Profile from "./components/Profile.js";
import AddToCart from "./components/Cart.js";
import SearchComponent from "./components/SearchComponent.js";
const theme = createTheme();

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const allData = Users;
  const handleSearch = (results) => {
    setSearchResults(results);
  };
  return (
    // <ThemeProvider theme={theme}>
    //   <Router>
    //     <Routes>
    //       <Route path={ROUTES.LANDING} element={<Home />} >
    //         <Route path={ROUTES.HOME} element={<Home />} />
    //       </Route>
    //       <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
    //       <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
    //       <Route path={ROUTES.Users} element={<Users />} />

    //     </Routes>
    //   </Router>
    // </ThemeProvider>
    // <Login />
    <>
    {/* <Profile  /> */}

    <AddToCart />
    <div>
      <h1>Search Example</h1>
      <SearchComponent data={allData} onSearch={handleSearch} />
      
      {/* Render search results */}
      <ul>
        {searchResults.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
    <Reviews/>
    </>
    
  );
}

export default App;
