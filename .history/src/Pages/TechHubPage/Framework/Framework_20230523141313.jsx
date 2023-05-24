import { useEffect, useState, useRef } from "react";
import "./framework.scss";
import { CSSTransition } from "react-transition-group";
import gsap from "gsap";

function Framework() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => {
    resetAnimation();
    setTimeout(() => {
      startAnimation();
      setActiveIndex(index);
    }, 100);
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
      <div className="framework-container  col-md-10 offset-md-1">
        <div className="offset-md-1 framework-btns">
          <button>FRONTEND</button>
          <button>BACKEND</button>
        </div>
        <div className="offset-md-10 col-md-2 flexy flexyM first-row">
          <div className="frames small-frames col-md-6 s1"></div>
          <div className="frames small-frames col-md-6 s2"></div>
        </div>{" "}
        <div className=" col-md-12 flexy flexyM">
          <div className="frames small-frames col-md-2 s3"></div>
          <div className="frames small-frames col-md-2 s4"></div>
          <div className="frames small-frames col-md-2 s5"></div>
          <div className="frames small-frames col-md-2 s6"></div>
          <div className="frames small-frames col-md-2 s7"></div>
          <div className="frames small-frames col-md-2 s8"></div>
        </div>
        <div className=" col-md-10 offset-md-2 flexy flexyM">
          <div className="frames small-frames col-md-2 s9"></div>
          <div className="frames small-frames col-md-2 s10"></div>
          <div className="frames small-frames col-md-2 s11"></div>
          <div className="frames small-frames col-md-2 s12"></div>
        </div>
      </div>
    </>
  );
}

export default Framework;
