import React from "react";
import "./about-us.scss";
import LandingImg from "../../assets/images/about.png";
import TechHub from "../Home/TechHub/TechHub";
import Switchapp from "../../assets/images/switchapp.svg";
import Silverbird from "../../assets/images/silverbird.png";
import Educare from "../../assets/images/educare.png";
import Powerjet from "../../assets/images/powerjet.png";
import { Link } from "react-router-dom";
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
        <div className="flexy mt">
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
        <div className="flexy mt">
          <div className="col-md-6">&nbsp;</div>
          <div className="col-md-6">
            <h1>What Sets Us Apart</h1>
            <p>
              <strong> Expertise: </strong>Our team of developers, designers,
              and project managers are experts in their fields. We continually
              invest in learning the latest technologies and methodologies to
              deliver world-class solutions.
            </p>
            <p>
              <strong> Innovation: </strong>We thrive on innovation. We're not
              just trend followers; we are trendsetters. Our solutions leverage
              the latest trends and technologies, ensuring your project is
              always at the forefront of digital advancement.
            </p>
            <p>
              <strong> Client-Centric Approach:</strong> Your success is our
              success. We work closely with you to understand your unique needs
              and goals. Our agile development approach ensures you're always in
              the loop and can provide feedback throughout the project's
              lifecycle.
            </p>
            <p>
              <strong> Quality Assurance:</strong> We are committed to
              delivering reliable, scalable, and secure software. Rigorous
              quality assurance and testing processes guarantee that your
              product is ready for the market.
            </p>
          </div>
        </div>
      </div>
      <div className="services-div">
        {" "}
        <div className="col-md-10 offset-md-1 ">
          <h1>Our Services</h1>
          <TechHub />
        </div>
      </div>
      <center>
        {" "}
        <div className="col-md-8 mtt">
          <h1>Industries We Serve</h1>
          <p>
            We have worked with a diverse range of industries, including
            healthcare, finance, e-commerce, education, and more. Our ability to
            adapt and cater to specific industry needs is what makes us a
            reliable partner for businesses of all kinds.
          </p>
        </div>
      </center>
      <div className="col-md-10 offset-md-1 flexy mt2 mb5 partners">
        <div className="col-md-3">
          <center>
            {" "}
            <img className="   logo" src={Silverbird} alt="Scholar" />
          </center>
        </div>
        <div className="col-md-3 col-12">
          <center>
            {" "}
            <img className="  mt2" src={Switchapp} alt="Scholar" />
          </center>
        </div>
        <div className="col-md-3">
          <center>
            {" "}
            <img className=" mt1 " src={Powerjet} alt="Scholar" />
          </center>
        </div>
        <div className="col-md-3">
          <center>
            {" "}
            <img className="   logo" src={Educare} alt="Scholar" />
          </center>
        </div>
      </div>
      <div className="col-md-5 offset-md-2">
        <p>
          If you're looking for a software development company that combines
          innovation, expertise, and a dedication to your success, Hexxondiv
          Tech Hub is here for you. Let's collaborate, innovate, and create
          software solutions that will drive your business forward.
        </p>
        <p>
          Ready to get started? <Link to={"/contact"}>Contact</Link> us today{" "}
        </p>
      </div>
    </>
  );
}

export default AboutUs;
