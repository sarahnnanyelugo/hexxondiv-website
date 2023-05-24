import { useEffect, useState, useRef } from "react";
import "./framework.scss";

function Framework() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  return (
    <>
      <div className="frameworks-container  ">
        <center>
          {" "}
          <h1>Pricing for brands and businesses of all sizes</h1>
          <p>
            Connect to your audience with branded links, QR Codes, and a
            Link-in-bio that will get their attention.
          </p>
        </center>
      </div>
      <div className="col-md-12 prices-div">
        <div className="tabs offset-md-3 col-md-3">
          <button
            className={`tab ${checkActive(1, "active2")}`}
            onClick={() => handleClick(1)}
          >
            FRONTEND
          </button>
          <button
            className={`tab ${checkActive(2, "active2")}`}
            onClick={() => handleClick(2)}
          >
            BACKEND
          </button>
        </div>{" "}
        <div className="panels  col-md-9 offset-md-1">
          <div className={`panel ${checkActive(1, "active2")}`}>
            {" "}
            <div className=" flexy  col-md-12 prices-body">1</div>
          </div>
          <div className={`panel ${checkActive(2, "active2")}`}>
            <div className=" flexy  col-md-12 prices-body">2</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Framework;
