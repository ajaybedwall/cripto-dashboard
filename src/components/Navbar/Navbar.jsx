/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Navbar.css";
import codeworrier_logo from "../../assets/codeworrier_logo.png";

function Navbar() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [currency, setCurrency] = useState("inr");

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => {
      const newTheme = !prevTheme;
      document.body.classList.toggle("dark-theme", newTheme);
      return newTheme;
    });
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
    // Here you can handle what happens when the currency changes
    console.log(`Selected currency: ${event.target.value}`);
  };

  return (
    <div className={`navbar ${isDarkTheme ? "dark" : "light"}`}>
      <img className="logo" src={codeworrier_logo} alt="Codeworrier Logo" />
      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>About</li>
      </ul>

      <div className="nav_right">
        <select 
          name="currency" 
          id="currency-select"
          value={currency}
          onChange={handleCurrencyChange}
        >
          <option value="inr">INR</option>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
        </select>

        <button aria-label="Sign Up">Sign Up</button>
        <button onClick={toggleTheme} aria-label={isDarkTheme ? "Switch to Light Mode" : "Switch to Dark Mode"}>
          {isDarkTheme ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
