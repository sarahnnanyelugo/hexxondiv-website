import React from "react";
import "./home.scss";
import Screen from "../../assets/images/screen_shot2.png";
import Switchapp from "../../assets/images/switchapp.svg";
import Silverbird from "../../assets/images/silverbird.png";
import Educare from "../../assets/images/educare.png";
import Powerjet from "../../assets/images/powerjet.png";
import FlipTab from "./FlipTab/FlipTab";
import TechHub from "./TechHub/TechHub";
import Agro from "./Agro/Agro";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="col-md-11 offset-md-1 home-container flexy">
        <div className="col-md-5">
          <h1>Streamlining Operations and Driving Growth.</h1>
          <p>
            Hire a team of Developers, Designers, Quality Assurance Specialists,
            DevOps Engineers, and other experts you may need to work
            hand-by-hand on your digital product.
          </p>
          <button>Get started</button>
        </div>
        <div className="col-md-6 offset-md-1 flexy flexyM second-div ">
          <div className="col-md-4 col-5">
            <FlipTab />
          </div>
          <div className="col-md-8 screen-div col-7">
            {" "}
            <img className="   logo" src={Screen} alt="Scholar" width="100%" />
          </div>
        </div>
      </div>
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

      <div className="col-md-12 divisions-div">
        <center className="mt mb10">
          <h1>
            Feel Free to Explore All Hexxondiv <br />
            Subdivisions
          </h1>
        </center>
        <div className="col-md-8 offset-md-2 tech-hub-div">
          <h4>
            Hexxondiv <span className="animate-charcter">Tech Hub</span>
          </h4>
          <TechHub />
          <center>
            <Link to={"/tech-hub-page"}>
              {" "}
              <button className="division-btn tech">Check it out!</button>
            </Link>
          </center>
        </div>{" "}
        <div className="col-md-8 offset-md-2 agro-div">
          <h4>
            Hexxondiv <span className="animate-charcter2">AGRICULTURE</span>
          </h4>{" "}
          <div className="content offset-md-6">
            <h2>AGRICULTURE</h2>
            <h2>AGRICULTURE</h2>
          </div>
          <Agro />
          <center>
            <button className="division-btn agro">Check it out!</button>
          </center>
        </div>
      </div>
    </>
  );
}

export default Home;
