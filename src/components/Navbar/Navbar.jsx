import React, { useState, useEffect } from "react";
import "./Navbar.css";
import codeworrier_logo from "../../assets/codeworrier_logo.png";
import { signInWithGoogle, signOutUser, auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

function Navbar() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [currency, setCurrency] = useState("inr");
  const [user, setUser] = useState(null);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => {
      const newTheme = !prevTheme;
      document.body.classList.toggle("dark-theme", newTheme);
      return newTheme;
    });
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
    console.log(`Selected currency: ${event.target.value}`);
  };

  const handleLogin = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error("Login Failed:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOutUser();
    } catch (error) {
      console.error("Logout Failed:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

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

        {user ? (
          <>
            <span>Welcome, {user.displayName}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <button onClick={handleLogin}>Sign Up</button>
        )}

        <button
          onClick={toggleTheme}
          aria-label={
            isDarkTheme ?  "Switch to Dark Mode" :"Switch to Light Mode"
          }
        >
          {isDarkTheme ?  "Light Mode" :"Dark Mode"  }
        </button>
      </div>
    </div>
  );
}

export default Navbar;
