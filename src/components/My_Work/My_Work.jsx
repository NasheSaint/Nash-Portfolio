import React from "react";
import "./My_Work.css";
import myWorkImg1 from "../../assets/mywork1.png";
import myWorkImg2 from "../../assets/mywork2.png";
import myWorkImg3 from "../../assets/mywork3.png";
import myWorkImg4 from "../../assets/mywork4.png";
import { BsArrowRight } from "react-icons/bs";

const mywork_data = [
  {
    id: 1,
    name: "Web Development",
    workImg: myWorkImg1,
  },
  {
    id: 2,
    name: "E-Commerce Website",
    workImg: myWorkImg2,
  },
  {
    id: 3,
    name: "Mobile Developement",
    workImg: myWorkImg3,
  },
  {
    id: 3,
    name: "Graphics Designing",
    workImg: myWorkImg4,
  },
];

function My_Work() {
  return (
    <div id="mywork" className="mywork">
      <div className="mywork-title">
        <h1>My Work</h1>
      </div>
      <div className="mywork-container">
        {mywork_data.map((mywork, index) => {
          return (
            <img
              key={index}
              src={mywork.workImg}
              alt="/"
              width={270}
              height={170}
            />
          );
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <BsArrowRight />
      </div>
    </div>
  );
}

export default My_Work;
