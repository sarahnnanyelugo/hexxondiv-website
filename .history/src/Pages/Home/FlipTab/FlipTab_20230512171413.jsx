import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Logo from "../../../assets/images/logo.png";

import "./flip-tab.scss";
function FlipTab() {
  return (
    <div className="flip-tab-container">
      <center>
        {" "}
        <img className="" src={Logo} alt="Scholar" width="20%" />
      </center>
      <Carousel fade indicatorLabels="1234">
        <Carousel.Item>1</Carousel.Item>

        <Carousel.Item>2</Carousel.Item>
      </Carousel>
    </div>
  );
}

export default FlipTab;
