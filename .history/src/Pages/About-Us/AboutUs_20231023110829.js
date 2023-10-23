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
      <center>
        {" "}
        <div className="col-md-5 ">
          <h1>
            Welcome to Hexxondiv Tech Hub - Transforming Ideas into Software
            Excellence
          </h1>
        </div>
      </center>
    </>
  );
}

export default AboutUs;
