import React, { useState } from "react";
import "./frameworks.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
function Frameworks() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";
  return (
    <>
      <div className="tabs">
        <button
          className={`tab ${checkActive(1, "active2")}`}
          onClick={() => handleClick(1)}
        >
          Front End
        </button>
        <button
          className={`tab ${checkActive(2, "active2")}`}
          onClick={() => handleClick(2)}
        >
          Backend
        </button>
      </div>
      <div className="panels">
        <div className={`panel ${checkActive(1, "active2")}`}>1</div>
        <div className={`panel ${checkActive(2, "active2")}`}>2</div>
      </div>
    </>
  );
}

export default Frameworks;
