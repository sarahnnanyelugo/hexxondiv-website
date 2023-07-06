import React from "react";
import LandingImg from "../../assets/images/careerslanding.png";
import "./careers.scss";
import Icofont from "react-icofont";

import CountUp from "react-countup";

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
          <button className="apply-btn">Apply now </button>
        </div>
        <div className="col-md-4 offset-md-1">
          {" "}
          <img className="" src={LandingImg} alt="Scholar" width="100%" />{" "}
        </div>
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
