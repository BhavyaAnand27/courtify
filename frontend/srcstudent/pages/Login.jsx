import React from "react";
import "./Login.css"; // Make sure to create a CSS file for styling

const Login = () => {
  return (
    <div className="login">
      <h2>Login</h2>
      <form className="login-form">
        <input
          type="text"
          placeholder="Username"
          required
          className="input-field"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="input-field"
        />
        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
