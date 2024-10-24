import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import { BiUser } from "react-icons/bi";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="/" width={70} height={70} />
          <p>
            I am a full stack developer from Zimbabwe with 3 years of experience
            in companies like Digital Vocano and PrintOne.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <BiUser size={25} />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          @ 2024 Tinashe Masiya. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
