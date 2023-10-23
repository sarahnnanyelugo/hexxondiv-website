import React from "react";
import "./about-us.scss";
import LandingImg from "../../assets/images/about.png";

function AboutUs() {
  return (
    <>
      <div className="col-md-12 left flexy">
        <div className="col-md-4 offset-md-1 mt ">
          <h1>Our passion for technology drives us to shape the future.</h1>
        </div>
        <div className="col-md-4 offset-md-1">
          <img
            className="tech-logo"
            src={LandingImg}
            alt="Scholar"
            width="100%"
          />{" "}
        </div>
      </div>
      <div className="centered col-md-5 offset-md-1">
        <h1>
          Welcome to Hexxondiv Tech Hub - Transforming Ideas into Software
          Excellence
        </h1>
      </div>
    </>
  );
}

export default AboutUs;
