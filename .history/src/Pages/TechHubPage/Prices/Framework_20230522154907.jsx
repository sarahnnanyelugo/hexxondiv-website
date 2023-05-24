import { useEffect, useState, useRef } from "react";
import "./prices.scss";

function Prices() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  return (
    <>
      <div className="prices-container  ">
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
        <div className=" col-md-12   ">
          <p
            className="offset-md-2"
            style={{ color: "grey", marginBottom: "40px" }}
          >
            Save up to 34% when you pay annually
          </p>
          <div className="flexy flexyM col-md-10 offset-md-2">
            <small className=" ">Pay Monthly</small>
            <div className="tabs ">
              <button
                className={`tab ${checkActive(1, "active2")}`}
                onClick={() => handleClick(1)}
              ></button>
              <button
                className={`tab ${checkActive(2, "active2")}`}
                onClick={() => handleClick(2)}
              ></button>
            </div>{" "}
            <small>Pay Annually</small>
          </div>
          <div className="panels  col-md-9 offset-md-1">
            <div className={`panel ${checkActive(1, "active2")}`}>
              {" "}
              <div className=" flexy  col-md-12 prices-body"></div>
            </div>
            <div className={`panel ${checkActive(2, "active2")}`}>
              <div className=" flexy  col-md-12 prices-body"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Prices;