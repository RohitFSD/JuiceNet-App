import React from "react";
import "../footer/Footer.css";
import FooterLogo from "../header/logo.png";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-main-upper"></div>
      <div className="footer-main-lower">
        <div className="footer-main-lower-upper">
          <div className="footer-main-lower-upper-div">
            <div className="footer-logo">
              <span>
                <img className="ftlogo" src={FooterLogo} alt="footerlogo" />
              </span>
              <span className="ft-icon-mail">
                <MailIcon />
                info@juicenet.ai
              </span>
            </div>
            <div className="footer-logo-div1">
              <div className="footer-logo-div1-upper">Quick Link</div>
              <div className="footer-logo-div1-lower">
                <span className="footer-lg-span">Home</span>
                <span className="footer-lg-span">Features</span>
                <span className="footer-lg-span">About Us</span>
                <span className="footer-lg-span">Partnership</span>
                <span className="footer-lg-span">FAQ</span>
                <span className="footer-lg-span">Blog</span>
                <span className="footer-lg-span">Shop</span>
                <span className="footer-lg-span">Contact Us</span>
              </div>
            </div>
            <div className="footer-logo-div2">
              <span className="footer-logo-div2-upper">Follow Us</span>
              <span className="footer-logo-div2-icon">
                <FacebookIcon sx={{ color: '#082544' }} />
                <InstagramIcon sx={{ color: '#082544' }} />
                <XIcon sx={{ color: '#082544' }} />
                <LinkedInIcon sx={{ color: '#082544' }} />
              </span>
            </div>
          </div>
        </div>
        <div className="footer-main-lower-lower">
          <div className="footer-main-lower-bottom">
            <span className="blog-bottom-info">
              © JuiceNet 2024. All Rights Reserved
            </span>
            <span className="blog-bottom-info2">
              <span className="blog-bottom-info2-right">
                Terms & Conditions
              </span>
              <span className="blog-bottom-info2-right">Privacy policy</span>
            </span>
          </div>
        </div>
      </div>
      <div className="set-absolute-div">
        <div className="set-absolute-div1">
          <span className="set-absolute-div1-left">
            <span className="set-absolute-div1-left1"></span>
            <span className="set-absolute-div1-left2">Get in Touch</span>
          </span>
          <span>
            <span className="abs-subs">{"Subscribe "}</span>
            <span className="abs-subs1">to newletter</span>
          </span>
        </div>
        <div className="set-absolute-div2">
          <input
            className="footer-input"
            type="email"
            id="email"
            placeholder="Enter Email address"
          />
          <button className="footer-btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
