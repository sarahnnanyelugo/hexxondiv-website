import { useEffect, useState, useRef } from "react";
import "./framework.scss";
import { CSSTransition } from "react-transition-group";
import gsap from "gsap";

function Framework() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => {
    setActiveIndex(index);
    resetAnimation();
    setTimeout(() => {
      startAnimation();
    }, 500);
  };
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";
  const [isExpanded, setIsExpanded] = useState(false);
  const blueRef = useRef(null);
  const blueRef2 = useRef(null);
  const blueRef3 = useRef(null);

  // useEffect(() => {
  const blueElement = blueRef.current;
  const blueElement2 = blueRef2.current;
  const blueElement3 = blueRef3.current;

  const startAnimation = () => {
    gsap.to(blueElement, { duration: 1, scale: 5, ease: "expoScale(1, 5)" });
    gsap.to(blueElement2, { duration: 1, scale: 5, ease: "expoScale(1, 5)" });
    gsap.to(blueElement3, { duration: 1, scale: 5, ease: "expoScale(1, 5)" });
  };

  const resetAnimation = () => {
    gsap.to(blueElement, { duration: 1, scale: 1, ease: "expoScale(5, 1)" });
    gsap.to(blueElement2, { duration: 1, scale: 1, ease: "expoScale(5, 1)" });
    gsap.to(blueElement3, { duration: 1, scale: 1, ease: "expoScale(5, 1)" });
  };

  // const startButton = document.querySelector("#start");
  // const resetButton = document.querySelector("#reset");

  // startButton.addEventListener("click", startAnimation);
  // resetButton.addEventListener("click", resetAnimation);

  //   return () => {
  //     // Cleanup: Remove event listeners
  //     // startButton.removeEventListener("click", startAnimation);
  //     // resetButton.removeEventListener("click", resetAnimation);
  //   };
  // }, []);
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
            id="start"
          >
            FRONTEND
          </button>
          <button
            className={`tab ${checkActive(2, "active2")}`}
            onClick={() => handleClick(2)}
            id="start"
          >
            BACKEND
          </button>
        </div>{" "}
        <div className="panels  col-md-9 offset-md-1">
          <div className={`panel ${checkActive(1, "active2")}`}>
            {" "}
            <div className=" flexy  col-md-12 prices-body">
              <div className="small-frames frames">frame1</div>
              <div id="blue" ref={blueRef2} className="box big-frames frames">
                dglv
              </div>
              <div className="small-frames frames">frame1</div>{" "}
              <div className="small-frames frames">frame1</div>
              <div id="blue" ref={blueRef3} className="box big-frames frames">
                dglv
              </div>
            </div>
          </div>
          <div className={`panel ${checkActive(2, "active2")}`}>
            {" "}
            <div className=" flexy  col-md-12 prices-body">
              <div id="blue" ref={blueRef} className="box big-frames frames">
                dglv
              </div>
              <div className="small-frames frames">frame2</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button>Start</button>
        <button id="reset">Reset</button>
      </div>
    </>
  );
}

export default Framework;
