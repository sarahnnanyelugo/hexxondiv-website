import React from "react";
import LandingImg from "../../assets/images/careerslanding.png";
import "./careers.scss";
import Logo from "../../assets/images/tech-hub-logo2.png";

import CountUp from "react-countup";
import FAQ from "./FAQ/FAQ";
import Footer from "../../components/Footer/Footer";
function CareersPage() {
  return (
    <>
      <div className="col-md-12 page-wrapper">
        <div className="col-md-12 careers-landing flexy">
          <div className="col-md-4 offset-md-2 details-div">
            <button className="careers-btn">Careers</button>
            <h1>Start doing work that matters</h1>
            <p>Unleash your talents and shape the future with us</p>
            <button className="apply-btn">
              Apply now <i class="icofont-apply"></i>
            </button>
          </div>
          <div className="col-md-4 offset-md-1">
            {" "}
            <img
              className=""
              src={LandingImg}
              alt="Scholar"
              width="100%"
            />{" "}
          </div>
        </div>
        <center>
          <div className="col-md-6 mt">
            <h1>Working at Hexxondiv TechHub</h1>
            <p>
              The world is changing at a pace that has never been seen before.
              With new technologies emerging almost everyday, we want to
              surround ourselves with people who put their skills to use for a
              positive impact on the way we live and do business.
            </p>
            <p>
              We believe that everyone, regardless of their position, can bring
              substantial value to our company. We are flexible about
              responsibilities and there are plenty of challenging tasks to be
              done. Finding solutions is our primary goal.
            </p>
          </div>
        </center>
        <center>
          {" "}
          <h1 className=" mt ">
            Feel free to explore our career opportunities at Hexxondiv Tech Hub
          </h1>
        </center>
        <div className="col-md-10 offset-md-1 mt5 flexy">
          {" "}
          <div className="col-md-8 mt8" style={{ paddingRight: "30px" }}>
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
            <h3 className="mt6">Bootcamp</h3>
            <p>
              {" "}
              At Hexxondiv TechHub, we provide every young and interested
              individual an opportuniy to make a life changing career growth by
              being a part of our 6 months Bootcamp with{" "}
              <strong>Flexible Financing Options</strong>
            </p>{" "}
            <h3 className="mt6">Partnership Deals</h3>
            <p>
              {" "}
              At Hexxondiv TechHub, we provide every young and interested
              individual an opportuniy to make a life changing career growth by
              being a part of our 6 months Bootcamp with{" "}
              <strong>Flexible Financing Options</strong>
            </p>
          </div>
          <div classname="col-md-4">
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
          <div className="col-md-4"></div>
        </div>
        <center>
          <h1 style={{ marginTop: "150px" }}>
            Here at Hexxondiv Tech Hub, <span className="highlight">we </span>
            hold on to:
          </h1>
        </center>
        <div className="col-md-10 offset-md-1 flexy">
          <div className="col-md-3">
            <div className="col-md-11 values">
              <span>
                <i class="icofont-eye-alt"></i>
              </span>
              <h3>Transparency</h3>
              <p>on every single step we make.</p>
            </div>
          </div>{" "}
          <div className="col-md-3">
            <div className="col-md-11 values">
              <span>
                <i class="icofont-shield-alt"></i>
              </span>
              <h3>Trust</h3>
              <p>and work of the highest quality.</p>
            </div>
          </div>{" "}
          <div className="col-md-3">
            <div className="col-md-11 values">
              <span>
                <i class="icofont-medal"></i>
              </span>
              []
              <h3>Expertise</h3>
              <p>in all things Webflow and design.</p>
            </div>
          </div>{" "}
          <div className="col-md-3">
            <div className="col-md-11 values">
              <span>
                <i class="icofont-people"></i>
              </span>
              <h3>Openness</h3>
              <p>in relationships with all of our partners..</p>
            </div>
          </div>
        </div>
        <div className="col-md-10 offset-md-1 stats-div">
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
        <div className="col-md-10 offset-md-1 mtt">
          <center>
            {" "}
            <h1 style={{ fontSize: "60px" }}>Frequently asked questions</h1>
          </center>
          <FAQ />
        </div>
        <center>
          <div className="col-md-6 mt mb6">
            <h1>Apply for a position at Hexxondiv TechHub</h1>
            <p style={{ fontSize: "22px" }}>
              Click on the button below and let us know who you are! We are
              going to be in touch very soon.
            </p>
            <button className="apply-btn">Apply now</button>
          </div>
        </center>
        <Footer bg="#092540" logo={Logo} />{" "}
      </div>
    </>
  );
}

export default CareersPage;
