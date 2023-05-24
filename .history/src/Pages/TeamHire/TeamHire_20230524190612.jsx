import React from "react";
import "./team-hire.scss";
function TeamHire() {
  return (
    <>
      <div className="col-md-10 offset-md-1 hire-container">
        <div className="col-md-6">
          <h1>Self-managed Teams</h1>
          <p>
            Hire a team of Developers, Designers, Quality Assurance Specialists,
            DevOps Engineers, and other experts you may need to work
            hand-by-hand on your digital product.
          </p>
          <button className="hire-btn">Hire Managed Teams</button>
        </div>
      </div>
      <div className="col-md-12 why-hexxondiv">
        <div className="col-md-10 offset-md-1">
          <h1>
            Why Hexxondiv <span className="highlight">Tech</span> Hub?
          </h1>
        </div>
      </div>
    </>
  );
}

export default TeamHire;