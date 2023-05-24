import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Video from "../../assets/images/tech_vid.mp4";
import Logo from "../../assets/images/tech-hub.png";

import "./tech-hub.scss";
function TechHub() {
  return (
    <>
      <div id="outer" className="col-md-12">
        <div className="tech-nav col-md-12">
          {" "}
          <div className="offset-md-1 col-md-2 tech-logo-div">
            {" "}
            <img className="tech-logo" src={Logo} alt="Scholar" width="100%" />
          </div>
          <ul className="list-inline list-unstyled tech-links">
            <li className="list-inline-item">
              <NavLink>Contact</NavLink>
            </li>
            <li className="list-inline-item">
              <NavLink>Contact</NavLink>
            </li>
            <li className="list-inline-item">
              <NavLink>Contact</NavLink>
            </li>
            <li className="list-inline-item">
              <NavLink>Contact</NavLink>
            </li>
            <li className="list-inline-item">
              <NavLink>Contact</NavLink>
            </li>
          </ul>
        </div>
        <div id="home-top-video">
          <video
            className="viddeo "
            width="100%"
            autoplay="true"
            loop="true"
            muted="true"
            playsinline=""
            src={Video}
          ></video>
        </div>
      </div>
    </>
  );
}

export default TechHub;
