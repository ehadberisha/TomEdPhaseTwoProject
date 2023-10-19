import React, { useState, useEffect } from "react";
import CarSearch from "./CarSearch";
import CarList from "./CarList";
import Search from "./Search";
import SellerOtm from "./SellerOtm";
import AboutUs from "./AboutUs";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import PostForm from "./PostForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainTitle from "./MainTitle";

function App() {
  

  return (
    <div className="mainpage">
      <Router>
        <MainTitle />
        <Navbar />
        <Routes>
          <Route path="/SearchList" element={<CarSearch />} />
          <Route path="/SellerOtm" element={<SellerOtm />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
