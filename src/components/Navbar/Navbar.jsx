import React, { useState } from "react";
import "./Navbar.css";
import codeworrier_logo from "../../assets/codeworrier_logo.png";

function Navbar() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle("dark-theme", !isDarkTheme);
  };

  return (
    <div className={`navbar ${isDarkTheme ? "dark" : "light"}`}>
      <img className="logo" src={codeworrier_logo} alt="logo" />
      <ul>
        <li>home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>About</li>
      </ul>

      <div className="nav_right">
        <select name="" id="">
          <option value="inr">INR</option>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
        </select>

        <button>sign up</button>
        <button onClick={toggleTheme}>
          {isDarkTheme ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
