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
      <div className="col-md-8 offset-md-2 ">
        <div className="flexy mt8">
          <div className="col-md-6">
            <h1>Our Story</h1>
            <p>
              Founded on the belief that technology has the power to reshape
              industries and improve lives, Hexxondiv Tech Hub was born out of a
              passion for coding and a vision for a better digital world. Over
              the years, we've grown into a dynamic hub of tech enthusiasts who
              are dedicated to crafting software that sets new standards and
              drives business success.
            </p>
          </div>
        </div>
        <div className="flexy">
          <div className="col-md-6">&nbsp;</div>
          <div className="col-md-6">
            <h1>What Sets Us Apart</h1>
            <p>
              <strong> Expertise: </strong>Our team of developers, designers,
              and project managers are experts in their fields. We continually
              invest in learning the latest technologies and methodologies to
              deliver world-class solutions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
