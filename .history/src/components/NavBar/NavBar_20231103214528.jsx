import React, { useEffect, useState, useRef } from "react";
// import Arrow from "../../assets/images/arrowdown.svg";
import { Link, NavLink } from "react-router-dom";
import "./_navbar.scss";
import { useLocation } from "react-router-dom";
// import Icofont from "react-icofont";
import Logo from "../../assets/images/tech-logo.png";

function NavBar() {
  const prevUrlRef = useRef(null);
  const [themeSet, setTheme] = useState("");
  const location = useLocation();
  function SwitchTheme(theme) {
    switch (location.pathname) {
      // case "/":
      //   setTheme("transparent");

      //   break;
      default:
      case "/team-hire":
        setTheme("#2F99DA");
        break;

      case "/careers":
        setTheme("#092540");
        break;

      case "/":
        setTheme("transparent");
    }
  }
  useEffect(() => {
    SwitchTheme("#2f99da");
  }, []);
  useEffect(() => {
    SwitchTheme("#2f99da");
  }, [location.pathname]);
  return (
    <>
      <div className="col-md-12 navigation" style={{ background: themeSet }}>
        <div className="tech-nav col-md-10 offset-md-1">
          {" "}
          <div className=" col-md-2 tech-logo-div">
            {" "}
            <Link to={"/"}>
              {" "}
              <img className="tech-logo" src={Logo} alt="Scholar" width="20%" />
            </Link>
          </div>
          <ul className="list-inline list-unstyled web-view">
            <li className="list-inline-item">
              <NavLink
                className="tech-links cool-link"
                to={"/"}
                activeclassname="active"
              >
                Home
              </NavLink>
            </li>
            {/* <li className="list-inline-item web-nav">
              <a href="#click" class="menu">
                <NavLink
                  to={"/finance-overview"}
                  activeClassName="active"
                  className="tech-links cool-link"
                >
                  Our Divisions <i class="icofont-curved-down"></i>
                </NavLink>
                <div class="menu-dropdown ">
                  <ul>
                    <li className="">
                      <NavLink
                        to={"/tech-hub-page"}
                        className="links menu-links list-group-item list-group-item-action"
                      >
                        Hexxondiv TechHub
                      </NavLink>
                    </li>{" "}
                    <li className="">
                      <NavLink
                        to={"/tech-hub"}
                        className="links menu-links list-group-item list-group-item-action"
                      >
                        Hexxondiv Agriculture
                      </NavLink>
                    </li>
                    <li className="">
                      <NavLink
                        to={"/tech-hub"}
                        className="links menu-links list-group-item list-group-item-action"
                      >
                        Hexxondiv Arts
                      </NavLink>
                    </li>
                    <li className="">
                      <NavLink
                        to={"/tech-hub"}
                        className="links menu-links list-group-item list-group-item-action"
                      >
                        Hexxondiv Investments
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </a>
            </li>{" "} */}
            <li className="list-inline-item">
              <NavLink
                className="tech-links cool-link"
                to={"/about"}
                activeclassname="active"
              >
                About Us
              </NavLink>
            </li>
            <li className="list-inline-item">
              <NavLink
                className="tech-links cool-link"
                to={"/products"}
                activeclassname="active"
              >
                Products
              </NavLink>
            </li>

            <li className="list-inline-item">
              <NavLink
                className="tech-links cool-link"
                to={"/portfolio"}
                activeclassname="active"
              >
                Portfolio
              </NavLink>
            </li>
            <li className="list-inline-item">
              <NavLink
                className="tech-links cool-link"
                to={"/contact"}
                activeclassname="active"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className=" mobile-navigation ">
        <div className="phone ">
          <div className="menu">
            <div class="list-group options ">
              <NavLink to={"/"} className="menu-navs" activeclassname="active2">
                {" "}
                <button
                  type="button"
                  class="list-group-item list-group-item-action"
                  onClick={() => {
                    document
                      .querySelector(".phone")
                      .classList.toggle("active3");
                  }}
                >
                  Home
                </button>
              </NavLink>{" "}
              <NavLink
                to={"/about"}
                className="menu-navs"
                activeclassname="active2"
              >
                {" "}
                <button
                  type="button"
                  class="list-group-item list-group-item-action"
                  onClick={() => {
                    document
                      .querySelector(".phone")
                      .classList.toggle("active3");
                  }}
                >
                  About us
                </button>
              </NavLink>{" "}
              <NavLink
                to={"/products"}
                className="menu-navs"
                activeclassname="active2"
              >
                {" "}
                <button
                  type="button"
                  class="list-group-item list-group-item-action"
                  onClick={() => {
                    document
                      .querySelector(".phone")
                      .classList.toggle("active3");
                  }}
                >
                  Products
                </button>
              </NavLink>{" "}
              <NavLink
                to={"/portfolio"}
                className="menu-navs"
                activeclassname="active2"
              >
                {" "}
                <button
                  type="button"
                  class="list-group-item list-group-item-action"
                  onClick={() => {
                    document
                      .querySelector(".phone")
                      .classList.toggle("active3");
                  }}
                >
                  Portfolio
                </button>
              </NavLink>{" "}
              <NavLink
                to={"/contact"}
                className="menu-navs"
                activeclassname="active2"
              >
                {" "}
                <button
                  type="button"
                  class="list-group-item list-group-item-action"
                  onClick={() => {
                    document
                      .querySelector(".phone")
                      .classList.toggle("active3");
                  }}
                >
                  Contact Us
                </button>
              </NavLink>{" "}
            </div>
          </div>

          <svg
            className="x"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 220 400"
            height="400"
            width="220"
          >
            <g className="top-bars" stroke-width="4">
              <path className="bar bar1" d="M 178,20 H 202" />
              <path className="bar bar2" d="M 178,29 H 202" />
            </g>
          </svg>
          <div
            className="menu-click-area"
            onClick={() => {
              document.querySelector(".phone").classList.toggle("active3");
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
