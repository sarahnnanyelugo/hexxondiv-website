import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Logo from "../../../assets/images/logo.png";
import QR from "../../../assets/images/qr.png";

import "./flip-tab.scss";
function FlipTab() {
  return (
    <div className="flip-tab-container">
      <center>
        {" "}
        <img className="" src={Logo} alt="Scholar" width="20%" />
      </center>
      <Carousel fade indicatorLabels="1234" controls={false} interval={5000}>
        <Carousel.Item>
          {" "}
          <div
            class="flip-container"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div class="flipper">
              <div class="front">
                <img className="" src={QR} alt="Scholar" width="100%" />
              </div>
              <div class="back">
                <img className="" src={QR} alt="Scholar" width="100%" />
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          {" "}
          <div
            class="flip-container"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div class="flipper">
              <div class="front">
                <img className="" src={QR} alt="Scholar" width="100%" />
              </div>
              <div class="back">
                <img className="" src={QR} alt="Scholar" width="100%" />
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default FlipTab;
