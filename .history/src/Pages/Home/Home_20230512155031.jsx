import React from "react";
import "./home.scss";
import Screen from "../../assets/images/screen_shot.png";
import FlipTab from "./FlipTab/FlipTab";
function Home() {
  return (
    <>
      <div className="col-md-8 offset-md-2 home-container flexy">
        <div className="col-md-5">
          <h1>Streamlining Operations and Driving Growth.</h1>
          <p>
            Hire a team of Developers, Designers, Quality Assurance Specialists,
            DevOps Engineers, and other experts you may need to work
            hand-by-hand on your digital product.
          </p>
          <button>Get started</button>
        </div>
        <div className="col-md-7 flexy flexyM">
          <div className="col-md-4">
            <FlipTab />
          </div>
          <div className="col-md-8">
            {" "}
            <img className="   logo" src={Screen} alt="Scholar" width="100%" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
