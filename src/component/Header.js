import React from "react";
import Logo from "../assest/Image/swiggy.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img  className="logo" src={Logo} />
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
