import React from "react";
import "./home.scss";
import Screen from "../../assets/images/screen_shot2.png";
import Switchapp from "../../assets/images/switchapp.svg";
import Silverbird from "../../assets/images/silverbird.png";
import Educare from "../../assets/images/educare.png";
import Powerjet from "../../assets/images/powerjet.png";
import FlipTab from "./FlipTab/FlipTab";
function Home() {
  return (
    <>
      <div className="col-md-10 offset-md-1 home-container flexy">
        <div className="col-md-5">
          <h1>Streamlining Operations and Driving Growth.</h1>
          <p>
            Hire a team of Developers, Designers, Quality Assurance Specialists,
            DevOps Engineers, and other experts you may need to work
            hand-by-hand on your digital product.
          </p>
          <button>Get started</button>
        </div>
        <div className="col-md-6 offset-md-1 flexy flexyM">
          <div className="col-md-4">
            <FlipTab />
          </div>
          <div className="col-md-8 screen-div">
            {" "}
            <img className="   logo" src={Screen} alt="Scholar" width="100%" />
          </div>
        </div>
      </div>
      <div className="col-md-10 offset-md-1 flexy mt2 mb5">
        <div className="col-md-3">
          <center>
            {" "}
            <img
              className="   logo"
              src={Silverbird}
              alt="Scholar"
              width="50%"
            />
          </center>
        </div>
        <div className="col-md-3">
          <center>
            {" "}
            <img className="  mt2" src={Switchapp} alt="Scholar" width="50%" />
          </center>
        </div>
        <div className="col-md-3">
          <center>
            {" "}
            <img className=" mt1" src={Powerjet} alt="Scholar" width="50%" />
          </center>
        </div>
        <div className="col-md-3">
          <center>
            {" "}
            <img className="   logo" src={Educare} alt="Scholar" width="50%" />
          </center>
        </div>
      </div>
      <center>
        <h1>Feel Free to Explore All </h1>
      </center>
    </>
  );
}

export default Home;