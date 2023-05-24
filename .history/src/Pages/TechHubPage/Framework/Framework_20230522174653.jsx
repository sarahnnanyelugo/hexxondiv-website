import { useEffect, useState, useRef } from "react";
import "./framework.scss";
import { CSSTransition } from "react-transition-group";

function Framework() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => {
    setActiveIndex(index);
    setIsExpanded(!isExpanded);
  };
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";
  const [isExpanded, setIsExpanded] = useState(false);

  // const handleButtonClick = () => {};
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
        <div className="tabs ">
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
            <div className=" flexy  col-md-12 prices-body">
              <div className="small-frames frames">frame1</div>

              <div className="box-wrapper">
                <CSSTransition in={isExpanded} timeout={300} classNames="box">
                  <div className="box big-frames frames" />
                </CSSTransition>
              </div>
            </div>
          </div>
          <div className={`panel ${checkActive(2, "active2")}`}>
            {" "}
            <div className=" flexy  col-md-12 prices-body">
              <div className="box-wrapper">
                <CSSTransition in={isExpanded} timeout={300} classNames="box">
                  <div className="box big-frames frames" />
                </CSSTransition>
              </div>
              <div className="small-frames frames">frame2</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Framework;
