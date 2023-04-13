import React, { createContext, useEffect, useState } from "react";
import "./App.css"
import Navbar from "./layout/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import SignIn from "./page/SignIn";
import SignUp from "./page/SignUp";
import Account from "./page/Account";
import axios from "axios"
import CoinPage from "./page/CoinPage";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./layout/Footer";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const [coins, setCoins] = useState([])
  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&locale=en"
  
  useEffect(()=>{
    axios.get(url).then((res)=>{
      setCoins(res.data)
      // console.log(res.data);
    });
  },[url]);
  
  
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className="app" id={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home coins={coins}/>}/>
          <Route path="/SignIn" element={<SignIn/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/Account" element={<Account/>}/>
          <Route path="/coin/:coinId" element={<CoinPage/>}>
            <Route path=":coinId"/>
          </Route>
        </Routes>
        <Footer/>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
