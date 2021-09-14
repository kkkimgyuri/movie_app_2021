
import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>
        “규리의 다급하게 하는 웹공부 .. 코딩하는 도롱규 .. 도롱도롱 잠오는 지금.. "
      </span>
      <span>− 2021.09.14 김규리</span>
    </div>
  );
}

export default About;