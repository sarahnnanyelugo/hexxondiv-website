import React from "react";

function Framework() {
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
        <SearchBar />
      </div>
    </>
  );
}

export default Framework;
