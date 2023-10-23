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
        <div className="col-md-5 mtt about-body">
          <h1>
            Welcome to Hexxondiv Tech Hub
            <span> - Transforming Ideas into Software Excellence</span>
          </h1>
          <p>
            At Hexxondiv Tech Hub, we are more than just a software development
            company. We are your strategic partner in turning visionary ideas
            into cutting-edge software solutions. With a relentless commitment
            to innovation and a team of highly skilled professionals, we bring
            your digital dreams to life.
          </p>
        </div>
      </center>
    </>
  );
}

export default AboutUs;
