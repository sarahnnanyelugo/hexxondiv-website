import { useEffect, useState, useRef } from "react";
import "./framework.scss";
import { CSSTransition } from "react-transition-group";
import gsap from "gsap";
import FW1 from "../../../assets/images/react.png";
import FW6 from "../../../assets/images/scss.png";
import FW4 from "../../../assets/images/bootstrap.svg";
import FW10 from "../../../assets/images/material-ui.jpeg";
import FW12 from "../../../assets/images/mdb.jpg";
import FW8 from "../../../assets/images/css.png";
import FW9 from "../../../assets/images/html.jpeg";
import FW3 from "../../../assets/images/carbon-design.png";
import FW7 from "../../../assets/images/php.jpg";
import FW11 from "../../../assets/images/python.jpeg";
import FW2 from "../../../assets/images/c#.png";
import FW5 from "../../../assets/images/node.png";

function Framework() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => {
    resetAnimation();
    setTimeout(() => {
      setActiveIndex(index);
      startAnimation();
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

  // useEffect(() => {
  const blueElement = blueRef.current;
  const blueElement2 = blueRef2.current;
  const blueElement3 = blueRef3.current;
  const blueElement4 = blueRef4.current;
  const blueElement5 = blueRef5.current;
  const blueElement6 = blueRef6.current;
  const blueElement7 = blueRef7.current;
  const blueElement8 = blueRef8.current;
  const blueElement9 = blueRef9.current;
  const blueElement10 = blueRef10.current;
  const blueElement11 = blueRef11.current;
  const blueElement12 = blueRef12.current;

  console.log(blueElement2);
  const startAnimation = () => {
    switch (activeIndex) {
      case 0:
        gsap.to(blueElement, {
          duration: 1,
          scale: 1.5,
          ease: "expoScale(1, 5)",
        });
        gsap.to(blueElement4, {
          duration: 1,
          scale: 1.5,
          ease: "expoScale(1, 5)",
        });
        gsap.to(blueElement6, {
          duration: 1,
          scale: 1.5,
          ease: "expoScale(1, 5)",
        });
        gsap.to(blueElement8, {
          duration: 1,
          scale: 1.5,
          ease: "expoScale(1, 5)",
        });
        gsap.to(blueElement10, {
          duration: 1,
          scale: 1.5,
          ease: "expoScale(1, 5)",
        });

        gsap.to(blueElement12, {
          duration: 1,
          scale: 1.5,
          ease: "expoScale(1, 5)",
        });

        break;
      default:
        gsap.to(blueElement3, {
          duration: 1,
          scale: 1.5,
          ease: "expoScale(1, 5)",
        });
        gsap.to(blueElement5, {
          duration: 1,
          scale: 1.5,
          ease: "expoScale(1, 5)",
        });
        gsap.to(blueElement7, {
          duration: 1,
          scale: 1.5,
          ease: "expoScale(1, 5)",
        });
        gsap.to(blueElement9, {
          duration: 1,
          scale: 1.5,
          ease: "expoScale(1, 5)",
        });
        gsap.to(blueElement11, {
          duration: 1,
          scale: 1.5,
          ease: "expoScale(1, 5)",
        });
        gsap.to(blueElement2, {
          duration: 1,
          scale: 1.5,
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
        <center>
          <h2>
            At hexxondiv Tech Hub, we <span className="highlight">Change </span>{" "}
            the world with
          </h2>
        </center>
        <div className="offset-md-1 framework-btns">
          <button id="start" onClick={() => handleClick(0)}>
            FRONTEND
          </button>
          <button onClick={() => handleClick(1)}>BACKEND</button>
        </div>
        <div className="offset-md-9 col-md-4 flexy flexyM first-row">
          <div
            className="frames small-frames col-md-6 s1"
            id="blue"
            ref={blueRef}
          >
            <img className="   logo" src={FW1} alt="Scholar" width="50%" />
            <h6>Reactjs</h6>
          </div>
          <div className="frames small-frames col-md-6 s2" ref={blueRef2}>
            <img className="   logo" src={FW2} alt="Scholar" width="50%" />
            <h6>C#</h6>
          </div>
        </div>{" "}
        <div className=" col-md-12 flexy flexyM">
          <div className="frames small-frames col-md-2 s3" ref={blueRef3}>
            <img className="   logo" src={FW3} alt="Scholar" width="50%" />
            <h6>CarbonDesign </h6>
          </div>
          <div className="frames small-frames col-md-2 s4" ref={blueRef4}>
            <img className="   logo" src={FW4} alt="Scholar" width="50%" />
            <h6>Bootstrap</h6>
          </div>
          <div className="frames small-frames col-md-2 s5" ref={blueRef5}>
            5
          </div>
          <div className="frames small-frames col-md-2 s6" ref={blueRef6}>
            6
          </div>
          <div className="frames small-frames col-md-2 s7" ref={blueRef7}>
            7
          </div>
          <div className="frames small-frames col-md-2 s8" ref={blueRef8}>
            8
          </div>
        </div>
        <div className=" col-md-10 offset-md-2 flexy flexyM">
          <div className="frames small-frames col-md-2 s9" ref={blueRef9}>
            9
          </div>
          <div className="frames small-frames col-md-2 s10" ref={blueRef10}>
            10
          </div>
          <div className="frames small-frames col-md-2 s11" ref={blueRef11}>
            11
          </div>
          <div className="frames small-frames col-md-2 s12" ref={blueRef12}>
            12
          </div>
        </div>
      </div>
    </>
  );
}

export default Framework;
