import React from "react";
import "./Services.css";
import { BsArrowRight } from "react-icons/bs";

const Services_Data = [
  {
    id: "01",
    name: "Web Development",
  },
  {
    id: "02",
    name: "Mobile Development",
  },
  {
    id: "03",
    name: "Graphics Designing",
  },
  {
    id: "04",
    name: "UI/UX Design",
  },
  {
    id: "05",
    name: "Web Development",
  },
];

function Services() {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{service.id}</h3>
              <h2>{service.name}</h2>
              <div className="services-readmore">
                <p> Read more</p>
                <BsArrowRight className="right-arrow" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
