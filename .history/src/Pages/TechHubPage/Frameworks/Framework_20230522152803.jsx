import React, { useState } from "react";

function Framework() {
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
          All Payments
        </button>
        <button
          className={`tab ${checkActive(2, "active2")}`}
          onClick={() => handleClick(2)}
        >
          Account Credit
        </button>
        <button
          className={`tab ${checkActive(3, "active2")}`}
          onClick={() => handleClick(3)}
        >
          Money Spent
        </button>{" "}
        <button
          className={`tab ${checkActive(4, "active2")}`}
          onClick={() => handleClick(4)}
        >
          Refund
        </button>{" "}
        <button
          className={`tab ${checkActive(5, "active2")}`}
          onClick={() => handleClick(5)}
        >
          Withdrawal
        </button>{" "}
        <button
          className={`tab ${checkActive(6, "active2")}`}
          onClick={() => handleClick(6)}
        >
          Regular Payments
        </button>
      </div>
    </>
  );
}

export default Framework;
