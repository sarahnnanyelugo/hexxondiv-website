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
import Footer from "../../components/Footer/Footer";
import Logo from "../../assets/images/logo.png";
import Phone from "../../assets/images/phone.png";
import Web from "../../assets/images/web-screen.png";
function Home() {
  return (
    <>
      <div className="col-md-12 page-wrapper">
        <div className="col-md-12 home-container ">
          <div className="col-md-5 offset-md-1">
            <h1>Streamlining Operations and Driving Growth.</h1>
            <p>
              Hire a team of Developers, Designers, Quality Assurance
              Specialists, DevOps Engineers, and other experts you may need to
              work hand-by-hand on your digital product.
            </p>
            <Link to={"/contact"}>
              <button>Get started</button>
            </Link>
          </div>
          {/* <div className="col-md-6 offset-md-1 flexy flexyM second-div ">
            <div className="col-md-4 col-5">
              <FlipTab />
            </div>
            <div className="col-md-8 screen-div col-7">
              {" "}
              <img
                className="   logo"
                src={Screen}
                alt="Scholar"
                width="100%"
              />
            </div>
          </div> */}
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
          {/* <center className="mt mb10">
            <h1>
              Feel Free to Explore All Hexxondiv <br />
              Subdivisions
            </h1>
          </center> */}
          <div className="col-md-10 offset-md-1 tech-hub-div">
            <h4>
              <span className="animate-charcter">OUR SERVICES</span>
            </h4>
            <TechHub />
          </div>{" "}
        </div>
        <div className="col-md-10 offset-md-1 mt products">
          <h1 style={{ fontSize: "50px" }}>Our Products</h1>
          <div className="flexy mt">
            <div className="col-md-3">
              <Link className="product1-heading mt6">Tiny.ng</Link>
              <br />
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                finibus at quam quis vehicula. In faucibus nunc eu aliquam
                volutpat. Donec varius lectus egestas semper lobortis. Maecenas
                et scelerisque felis. In luctus turpis et metus accumsan
                tincidunt. Cras rutrum massa nec enim bibendum egestas. Nulla
                facilisi. Vestibulum finibus vulputate tortor vel vestibulum.
                Aenean volutpat sed est et semper. Duis vehicula aliquet arcu
                accumsan pulvinar.{" "}
              </p>
            </div>
            <div className="flexy col-md-8 offset-md-1">
              <div className="col-md-3">
                {" "}
                <img className="" src={Phone} alt="Scholar" width="100%" />{" "}
              </div>{" "}
              <div className="col-md-9">
                {" "}
                <img className="" src={Web} alt="Scholar" width="100%" />{" "}
              </div>
            </div>
          </div>
          <center className="mt">
            <Link to={"/products"} className="link">
              View All
            </Link>
          </center>
        </div>
        <Footer bg="#092540" logo={Logo} />
      </div>
    </>
  );
}

export default Home;
