import React from "react";
import LandingImg from "../../assets/images/careerslanding.png";
import "./careers.scss";
import Icofont from "react-icofont";

import CountUp from "react-countup";
import FAQ from "./FAQ/FAQ";
function CareersPage() {
  return (
    <>
      <div className="col-md-12 careers-landing flexy">
        <div className="col-md-4 offset-md-2 details-div">
          <button className="careers-btn">Careers</button>
          <h1>Start doing work that matters</h1>
          <p>
            Join our team of extraordinary people to build awesome products and
            transform ideas into beautiful websites.
          </p>
          <button className="apply-btn">
            Apply now <i class="icofont-apply"></i>
          </button>
        </div>
        <div className="col-md-4 offset-md-1">
          {" "}
          <img className="" src={LandingImg} alt="Scholar" width="100%" />{" "}
        </div>
      </div>
      <center>
        {" "}
        {/* <h1>
          Feel free to explore our career opportunities at Hexxondiv Tech Hub
        </h1> */}
      </center>
      <div className="col-md-10 offset-md-1 mt flexy">
        {" "}
        <div className="col-md-4">
          <lottie-player
            class="m-auto"
            src="https://assets6.lottiefiles.com/packages/lf20_jhudx27y.json"
            background="transparent"
            speed="1"
            loop
            // controls
            autoplay
          ></lottie-player>
        </div>
        <div className="col-md-8 mt8">
          {" "}
          <h3>Internships</h3>
          <p>
            We offer a select number of organizations a free non-committal
            6months internship with our outstanding developers prior to
            graduation. At Hexxondiv TechHub, we believe the decision you make
            to invest in your future is worth it! One of the ways we ensure
            this, is by providing our students with the opportunity to intern
            and potentially transition to a full-time career as a software
            engineer/developer with any of our reputable hiring partners.
          </p>
          <h3 className="mt6">Trainings</h3>
          At Hexxondiv TechHub, we provide every young and interested individual
          an opportuniy to make a life changing career growth by being a part of
          our 6 months Web development training with{" "}
          <strong>Flexible Financing Options</strong>
        </div>
        <div classname="col-md-4"></div>
      </div>
      <div className="col-md-10 offset-md-1">
        <FAQ />
      </div>
      <div className="col-md-8 offset-md-2 stats-div">
        <center>
          {" "}
          <h1>Hexxondiv Tech Hub in numbers</h1>
        </center>
        <div className="flexy">
          {" "}
          <div className="col-md-4 stat">
            <center>
              {" "}
              <h1>
                {" "}
                <CountUp
                  start={0}
                  end={30}
                  duration={3}
                  decimal=""
                  prefix=" "
                  suffix="+"
                  enableScrollSpy={true}
                />
              </h1>
              <p>Customers served</p>
            </center>
          </div>{" "}
          <div className="col-md-4 stat">
            <center>
              {" "}
              <h1>
                {" "}
                <CountUp
                  start={0}
                  end={100}
                  duration={3}
                  decimal=""
                  prefix=" "
                  suffix="+"
                  enableScrollSpy={true}
                />
              </h1>
              <p>Projects completed</p>
            </center>
          </div>{" "}
          <div className="col-md-4 stat">
            <center>
              {" "}
              <h1>
                {" "}
                <CountUp
                  start={0}
                  end={5.0}
                  duration={3}
                  decimal=""
                  prefix=" "
                  suffix=".0"
                  enableScrollSpy={true}
                />
              </h1>
              <p>Rating on Clutch</p>
            </center>
          </div>
        </div>
      </div>
    </>
  );
}

export default CareersPage;
