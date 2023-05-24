import React from "react";
import "./home.scss";
import Screen from "../../assets/images/screen_shot2.png";
import Screen from "../../assets/images/screen_shot2.png";
import Screen from "../../assets/images/screen_shot2.png";
import Screen from "../../assets/images/screen_shot2.png";
import Screen from "../../assets/images/screen_shot2.png";
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
      <div className="col-md-10 offset-md-1 flexy">
        <div className="col-md-3">
          <img
            className="   logo"
            src={Silverbird}
            alt="Scholar"
            width="100%"
          />
        </div>
        <div className="col-md-3">
          <img className="   logo" src={Switchapp} alt="Scholar" width="100%" />
        </div>
        <div className="col-md-3">
          <img className="   logo" src={Powerjet} alt="Scholar" width="100%" />
        </div>
        <div className="col-md-3">
          <img className="   logo" src={Educare} alt="Scholar" width="100%" />
        </div>
      </div>
    </>
  );
}

export default Home;
