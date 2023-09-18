import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <h1 className="text-center mt-5">Property Portal</h1>
      <ul>
        <li><a href="Login.jsx" target="_blank">Login</a></li>
        <li><a href="">Signup</a></li>
      </ul>
    </header>
  );
};

export default Header;
