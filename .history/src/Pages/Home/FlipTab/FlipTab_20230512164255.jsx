import React from "react";
import Carousel from "react-bootstrap/Carousel";

import "./flip-tab.scss";
function FlipTab() {
  return (
    <div className="flip-tab-container">
      <div className="medcaro ">
        <Carousel fade indicatorLabels="1234">
          <Carousel.Item>1</Carousel.Item>

          <Carousel.Item>2</Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default FlipTab;
