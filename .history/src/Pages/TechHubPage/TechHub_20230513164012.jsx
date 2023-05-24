import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Video from "../../assets/images/tech_vid.mp4";
import "./tech-hub.scss";
function TechHub() {
  return (
    <>
      <div id="outer" className="col-md-12">
        <h1>tech-hub</h1>
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
