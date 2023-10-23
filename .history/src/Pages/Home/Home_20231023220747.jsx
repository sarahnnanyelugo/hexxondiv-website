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
import CountUp from "react-countup";
import Web from "../../assets/images/web-screen.png";
import Icon1 from "../../assets/images/trans.png";
import Icon2 from "../../assets/images/trust.png";
import Icon3 from "../../assets/images/expert.png";
import Icon4 from "../../assets/images/open.png";
import PJM from "../../assets/images/pjM2.png";
import PJW from "../../assets/images/pjW.png";
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
        </div>
        <center className="mtt">
          <h1>Some of our Trusted Partners</h1>
        </center>
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
        <div className="col-md-10 offset-md-1 mtt">
          <div className="flexy">
            <div className="flexy col-md-8">
              <div className="col-md-3">
                {" "}
                <img className="" src={PJM} alt="Scholar" width="100%" />{" "}
              </div>{" "}
              <div className="col-md-9">
                {" "}
                <img className="" src={PJW} alt="Scholar" width="100%" />{" "}
              </div>
            </div>
            <div className="col-md-3  offset-md-1">
              <a
                href="https://powerjet.ng/"
                className="product3-heading mt6"
                target="_blank"
              >
                Powerjet.ng
              </a>
              <br />
              <br />
              <p>
                PowerJet.Ng is the fastest, most reliable and simplified utility
                payment in Nigeria. It helps pay for your electricity bills
                online, from the comfort of your homes and offices, having your
                token printed out and sent to your mail or dashboard.
                Powerjet.ng has the sole purpose to bridge customers complain on
                the availability of the comfort in electricity bill/unit payment
                and ensure adequate reliable process for this need. You can send
                us a mail at{""}
                <a href="#">powerjetng@gmail.com</a>
              </p>
            </div>
          </div>
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
                <img
                  className="   logo"
                  src={Icon1}
                  alt="Scholar"
                  width="10%"
                />
              </span>
              <h3>Transparency</h3>
              <p>on every single step we make.</p>
            </div>
          </div>{" "}
          <div className="col-md-3">
            <div className="col-md-11 values">
              <span>
                <img
                  className="   logo"
                  src={Icon2}
                  alt="Scholar"
                  width="13%"
                />
              </span>
              <h3>Trust</h3>
              <p>and work of the highest quality.</p>
            </div>
          </div>{" "}
          <div className="col-md-3">
            <div className="col-md-11 values">
              <span>
                <img
                  className="   logo"
                  src={Icon3}
                  alt="Scholar"
                  width="13%"
                />
              </span>

              <h3>Expertise</h3>
              <p>in all things Webflow and design.</p>
            </div>
          </div>{" "}
          <div className="col-md-3">
            <div className="col-md-11 values">
              <span>
                <img
                  className="   logo"
                  src={Icon4}
                  alt="Scholar"
                  width="10%"
                />
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
                <p>Ratings</p>
              </center>
            </div>
          </div>
        </div>
        <Footer bg="#092540" logo={Logo} />
      </div>
    </>
  );
}

export default Home;
