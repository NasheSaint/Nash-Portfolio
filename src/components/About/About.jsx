import React from "react";
import "./About.css";
import aboutImg from "../../assets/aboutImg.jpg";

function About() {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1> About me </h1>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={aboutImg} alt="/" width={210} height={350} />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hi, I’m Tinashe, a passionate Web Developer, Mobile Developer, and
              UI/UX Designer with a knack for creating seamless digital
              experiences. With expertise across multiple platforms, I design
              and build intuitive, user-centered interfaces that not only look
              great but are highly functional. I enjoy bringing ideas to life
              through code and design, ensuring every product I work on delivers
              the best possible experience.
            </p>
            <p>
              When I’m not coding or designing, you’ll find me learning new
              technologies and staying up-to-date with the latest design trends.
              Let’s collaborate and turn your ideas into reality!
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>React JS</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Next JS</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Node JS</p> <hr style={{ width: "40%" }} />
            </div>
            <div className="about-skill">
              <p>Express JS</p> <hr style={{ width: "40%" }} />
            </div>
            <div className="about-skill">
              <p>React Native</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "90%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1> 5+ </h1>
          <p> YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1> 10+ </h1>
          <p> PROJECTS</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1> 15+ </h1>
          <p> HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
}

export default About;
