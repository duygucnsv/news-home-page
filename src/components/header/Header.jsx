import React from "react";
import "./header.css";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src="../../assets/images/logo.svg" alt="Site Logo"></img>
      </div>
      <nav>
        <a href="">Home</a>
        <a href="">New</a>
        <a href="">Popular</a>
        <a href="">Trending</a>
        <a href="">Categories</a>
      </nav>
    </header>
  );
}

export default Header;
