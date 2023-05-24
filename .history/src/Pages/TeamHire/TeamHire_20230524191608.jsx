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
          <div className="col-md-6">
            {" "}
            <h1>
              Why Hexxondiv <span className="highlight">Tech</span> Hub?
            </h1>
            <p>
              Many companies face challenges with finding vetted specialists.
              Our unique solution for hiring self-managed experts addresses all
              of these concerns.
            </p>
          </div>
          <div className="flexy col-md-12">
            <div className="col-md-4 first-column">
              <h2>Professional</h2>
              <p>
                Experts are chosen for their deep knowledge and successful track
                record
              </p>
              <h2>Financial control</h2>
              <p>
                We bring the knowledge and experience you need without the cost
                and commitment of a full-time employee, so you can stay on
                track.
              </p>
            </div>
            <div className="col-md-4second-column">
              <h2>Teammates</h2>
              <p>
                Experts are screened on their soft skills to ensure they are
                amazing teammates.
              </p>
              <h2>Financial control</h2>
              <p>
                We bring the knowledge and experience you need without the cost
                and commitment of a full-time employee, so you can stay on
                track.
              </p>
            </div>
            <div className="col-md-4 third-column">
              <h2>Self-managed</h2>
              <p>
                Our self-organized agile teams ensure eﬀectiveness and project
                success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamHire;