import React, { useState, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import underline from "../../assets/underline.png";
import { BiMenuAltRight } from "react-icons/bi";
import { CgClose } from "react-icons/cg";

function Navbar() {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <img src={logo} alt="/" width={70} height={70} className="nav-img" />
      <BiMenuAltRight size={30} className="nav-open" onClick={openMenu} />
      <ul ref={menuRef} className="nav-menu">
        <CgClose className="menu-close" onClick={closeMenu} />
        <li>
          <p onClick={() => setMenu("home")}>Home</p>
          {menu === "home" ? (
            <img src={underline} alt="/" width={40} height={5} />
          ) : (
            <></>
          )}
        </li>
        <li>
          <p onClick={() => setMenu("about")}>About Me</p>
          {menu === "about" ? (
            <img src={underline} alt="/" width={80} height={5} />
          ) : (
            <></>
          )}
        </li>
        <li>
          <p onClick={() => setMenu("services")}>Services</p>
          {menu === "services" ? (
            <img src={underline} alt="/" width={75} height={5} />
          ) : (
            <></>
          )}
        </li>
        <li>
          <p onClick={() => setMenu("mywork")}>Portfolio</p>
          {menu === "mywork" ? (
            <img src={underline} alt="/" width={73} height={5} />
          ) : (
            <></>
          )}
        </li>
        <li>
          <p onClick={() => setMenu("contact")}>Contact</p>
          {menu === "contact" ? (
            <img src={underline} alt="/" width={64} height={5} />
          ) : (
            <></>
          )}
        </li>
      </ul>
      <div className="nav-connect">Connect with me</div>
    </div>
  );
}

export default Navbar;
