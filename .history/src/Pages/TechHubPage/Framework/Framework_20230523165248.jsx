import { useEffect, useState, useRef } from "react";
import "./framework.scss";
import { CSSTransition } from "react-transition-group";
import gsap from "gsap";

function Framework() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => {
    resetAnimation();
    setTimeout(() => {
      startAnimation(index);
      setActiveIndex(index);
    }, 100);
  };
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";
  const [isExpanded, setIsExpanded] = useState(false);
  const blueRef = useRef(null);
  const blueRef2 = useRef(null);
  const blueRef3 = useRef(null);
  const blueRef6 = useRef(null);
  const blueRef4 = useRef(null);
  const blueRef5 = useRef(null);
  const blueRef7 = useRef(null);
  const blueRef8 = useRef(null);
  const blueRef9 = useRef(null);
  const blueRef10 = useRef(null);
  const blueRef11 = useRef(null);
  const blueRef12 = useRef(null);
  const blueRef13 = useRef(null);
  const blueRef14 = useRef(null);

  // useEffect(() => {
  const blueElement = blueRef.current;
  const blueElement2 = blueRef2.current;
  const blueElement3 = blueRef3.current;
  const blueElement4 = blueRef3.current;
  const blueElement5 = blueRef3.current;
  const blueElement6 = blueRef3.current;
  const blueElement7 = blueRef3.current;
  const blueElement8 = blueRef3.current;
  const blueElement9 = blueRef3.current;
  const blueElement10 = blueRef3.current;
  const blueElement11 = blueRef3.current;
  const blueElement12 = blueRef3.current;

  const startAnimation = (index) => {
    switch (index) {
      case 0:
        gsap.to(blueElement, {
          duration: 1,
          scale: 5,
          ease: "expoScale(1, 5)",
        });
        gsap.to(blueElement2, {
          duration: 1,
          scale: 5,
          ease: "expoScale(1, 5)",
        });
        gsap.to(blueElement3, {
          duration: 1,
          scale: 5,
          ease: "expoScale(1, 5)",
        });
        gsap.to(blueElement4, {
          duration: 1,
          scale: 5,
          ease: "expoScale(1, 5)",
        });
        gsap.to(blueElement5, {
          duration: 1,
          scale: 5,
          ease: "expoScale(1, 5)",
        });
        gsap.to(blueElement6, {
          duration: 1,
          scale: 5,
          ease: "expoScale(1, 5)",
        });
        gsap.to(blueElement7, {
          duration: 1,
          scale: 5,
          ease: "expoScale(1, 5)",
        });
        break;
      default:
        gsap.to(blueElement8, {
          duration: 1,
          scale: 5,
          ease: "expoScale(1, 5)",
        });
        gsap.to(blueElement9, {
          duration: 1,
          scale: 5,
          ease: "expoScale(1, 5)",
        });
        gsap.to(blueElement10, {
          duration: 1,
          scale: 5,
          ease: "expoScale(1, 5)",
        });
        gsap.to(blueElement11, {
          duration: 1,
          scale: 5,
          ease: "expoScale(1, 5)",
        });
        gsap.to(blueElement12, {
          duration: 1,
          scale: 5,
          ease: "expoScale(1, 5)",
        });
    }
  };

  const resetAnimation = () => {
    gsap.to(blueElement, { duration: 1, scale: 1, ease: "expoScale(5, 1)" });
    gsap.to(blueElement2, { duration: 1, scale: 1, ease: "expoScale(5, 1)" });
    gsap.to(blueElement3, { duration: 1, scale: 1, ease: "expoScale(5, 1)" });
    gsap.to(blueElement4, { duration: 1, scale: 1, ease: "expoScale(5, 1)" });
    gsap.to(blueElement5, { duration: 1, scale: 1, ease: "expoScale(5, 1)" });
    gsap.to(blueElement6, { duration: 1, scale: 1, ease: "expoScale(5, 1)" });
    gsap.to(blueElement7, { duration: 1, scale: 1, ease: "expoScale(5, 1)" });
    gsap.to(blueElement8, { duration: 1, scale: 1, ease: "expoScale(5, 1)" });
    gsap.to(blueElement9, { duration: 1, scale: 1, ease: "expoScale(5, 1)" });
    gsap.to(blueElement10, { duration: 1, scale: 1, ease: "expoScale(5, 1)" });
    gsap.to(blueElement11, { duration: 1, scale: 1, ease: "expoScale(5, 1)" });
    gsap.to(blueElement12, { duration: 1, scale: 1, ease: "expoScale(5, 1)" });
  };

  const startButton = document.querySelector("#start");
  const resetButton = document.querySelector("#reset");

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
          <button id="start" onClick={handleClick}>
            FRONTEND
          </button>
          <button onClick={handleClick}>BACKEND</button>
        </div>
        <div className="offset-md-9 col-md-4 flexy flexyM first-row">
          <div
            className="frames small-frames col-md-6 s1"
            id="blue"
            ref={blueRef}
          >
            1
          </div>
          <div className="frames small-frames col-md-6 s2">2</div>
        </div>{" "}
        <div className=" col-md-12 flexy flexyM">
          <div className="frames small-frames col-md-2 s3">3</div>
          <div className="frames small-frames col-md-2 s4" ref={blueRef}>
            4
          </div>
          <div className="frames small-frames col-md-2 s5">5</div>
          <div className="frames small-frames col-md-2 s6">6</div>
          <div className="frames small-frames col-md-2 s7" ref={blueRef}>
            7
          </div>
          <div className="frames small-frames col-md-2 s8">8</div>
        </div>
        <div className=" col-md-10 offset-md-2 flexy flexyM">
          <div className="frames small-frames col-md-2 s9">9</div>
          <div className="frames small-frames col-md-2 s10">10</div>
          <div className="frames small-frames col-md-2 s11">11</div>
          <div className="frames small-frames col-md-2 s12">12</div>
        </div>
      </div>
    </>
  );
}

export default Framework;
