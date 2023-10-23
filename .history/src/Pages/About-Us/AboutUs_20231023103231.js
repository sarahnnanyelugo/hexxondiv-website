import React from "react";
import "./about-us.scss";
import LandingImg from "../../assets/images/about.png";

function AboutUs() {
  return (
    <>
      <div className="col-md-12 mt2">
        <div className="col-md-6 offset-md-6">
          <img
            className="tech-logo"
            src={LandingImg}
            alt="Scholar"
            width="100%"
          />{" "}
        </div>
      </div>
      <div className="centered col-md-5 offset-md-1">
        <h1>About Us</h1>
      </div>
    </>
  );
}

export default AboutUs;
