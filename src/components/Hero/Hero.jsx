import React from "react";
import "./Hero.css";
import profileImg from "../../assets/profileImg.png";

function Hero() {
  return (
    <div id="home" className="hero">
      <img src={profileImg} alt="/" width={200} height={200} />
      <h1>
        <span>I'm Tinashe Masiya,</span> Software Developer
      </h1>
      <p>
        I craft sleek web and mobile applications with a focus on UI/UX design
        that delivers seamless user experiences.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
}

export default Hero;
