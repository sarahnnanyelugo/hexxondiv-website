import React from "react";
import Pagemenu from "../../components/PageMenu/Pagemenu";
import "./about-us.scss";
function AboutUs() {
  return (
    <>
      <div className="col-md-12 landing-img">
        {/* <img
          className="tech-logo"
          src={LandingImg}
          alt="Scholar"
          width="100%"
        />{" "} */}
        <div className="centered col-md-5 offset-md-1">
          <h1>About Us</h1>
        </div>
      </div>
      <Pagemenu />
    </>
  );
}

export default AboutUs;
