// src/pages/Login.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../firebase";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate("/"); // Navigate to Home after successful login
    } catch (error) {
      console.error("Login Failed:", error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Sign in with Google</button>
    </div>
  );
};

export default Login;
