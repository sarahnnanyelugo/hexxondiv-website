import React from "react";
import LandingImg from "../../assets/images/careerslanding.png";
import "./careers.scss";
function CareersPage() {
  return (
    <>
      <div className="col-md-12 careers-landing flexy">
        <div className="col-md-6"></div>
        <div className="col-md-4 offset-md-1">
          {" "}
          <img className="" src={LandingImg} alt="Scholar" width="100%" />{" "}
        </div>
      </div>
    </>
  );
}

export default CareersPage;
