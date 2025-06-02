import React, { useState } from "react";
import "../header/Header.css";
import NavIcon1 from "../header/nav-icon-3.png";
import NavIcon2 from "../header/nav-icon1.png";
import logo from "../header/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="container">
      <div className="inner-container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="mobile-menu-icon" onClick={toggleMenu}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>

        <div className={`nav-section ${menuOpen ? "active" : ""}`}>
          <div className="nav-items">Home</div>
          <div className="nav-items">Features</div>
          <div className="nav-items">About Us</div>
          <div className="nav-items">Partnership</div>
          <div className="nav-items">Blog</div>
          <div className="nav-items">FAQ</div>
          <div className="nav-items">Contact Us</div>

          <div className="icon mobile-visible">
            <img className="nav-user-icon" src={NavIcon1} alt="icon1" />
            <img className="nav-user-icon" src={NavIcon2} alt="icon2" />
          </div>
          <div className="btn-section mobile-visible">
            <button className="btn">SIGN UP</button>
            <button className="btn">SHOP NOW</button>
          </div>
        </div>

        {/* Desktop only items */}
        <div className="icon desktop-only">
          <img className="nav-user-icon" src={NavIcon1} alt="icon1" />
          <img className="nav-user-icon" src={NavIcon2} alt="icon2" />
        </div>
        <div className="btn-section desktop-only">
          <button className="btn">SIGN UP</button>
          <button className="btn">SHOP NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
