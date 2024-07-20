// src/App.js
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Coin from "./pages/Coin";
import Footer from "./components/footer/Footer";
import PrivateRoute from "./components/PrivateRoute"; // Adjust the path as needed
import Login from "./pages/Login"; // Adjust the path as needed

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<PrivateRoute element={<Home />} />} />
          <Route path="/coin/:coinId" element={<Coin />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
