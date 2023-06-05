import React from "react";
import "./team-hire.scss";
import Service2 from "../../assets/images/hire-team.jpeg";
import FAQIMG from "../../assets/images/faq-img.png";
import { Link, NavLink, useLocation } from "react-router-dom";

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
            <div className="col-md-4 column">
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
            <div className="col-md-4 column">
              <h2>Teammates</h2>
              <p>
                Experts are screened on their soft skills to ensure they are
                amazing teammates.
              </p>
              <h2>Scandinavian work culture</h2>
              <p>
                We bring the knowledge and experience you need without the cost
                and commitment of a full-time employee, so you can stay on
                track.
              </p>
            </div>
            <div className="col-md-4 column">
              <h2>Self-managed</h2>
              <p>
                We believe in a work culture that creates the sense of happiness
                and ensures a high quality of life. More about work culture.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 flexy">
        <div className="col-md-6">
          <img className="" src={Service2} alt="Scholar" width="100%" />
        </div>
        <div className="col-md-6 hire-steps">
          <center>
            <h1>How to hire Managed Teams</h1>
          </center>
          <div className="flexy col-md-10 offset-md-1">
            <div className="col-md-4">
              <center>
                <div className="circle"></div>
                <h5>Request</h5>
                <p>
                  Start with submitting <br />
                  <Link to={"/"}>→ Hire form</Link>
                </p>
              </center>
            </div>

            <div className="col-md-4">
              <center>
                <div className="circle"></div>
                <h5>Match</h5>
                <p>
                  Within a few days we will introduce you to the right
                  specialists.
                </p>
              </center>
            </div>

            <div className="col-md-4">
              <center>
                {" "}
                <div className="circle"></div>
                <h5>Trial period</h5>
                <p>
                  Work together for a trial period to ensure it's the right fit
                  before starting the engagement.
                </p>
              </center>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-10 offset-md-1 flexy">
        <div className="col-md-6">
          <img className="" src={FAQIMG} alt="Scholar" width="100%" />
        </div>
        <div className="col-md-6">
          <div class="container">
            <label for="chk-1">
              <input id="chk-1" type="checkbox" checked />
              <div class="title">
                <h3>Accordion Heading One</h3>
              </div>
              <div class="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Velit delectus sapiente dicta eligendi quis minus nulla maxime
                  illo reiciendis corporis repudiandae excepturi? Velit
                  molestiae reprehenderit eligendi neque repellendus! Illum
                  molestiae quam iusto doloribus culpa sint similique quaerat
                  libero! Molestiae facilis quidem explicabo totam nostrum in
                  voluptatum ipsam sequi officia error id rerum unde nisi neque!
                </p>
              </div>
            </label>

            <label for="chk-2">
              <input id="chk-2" type="checkbox" />
              <div class="title">
                <h3>Accordion Heading Two</h3>
              </div>

              <div class="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Velit delectus sapiente dicta eligendi quis minus nulla maxime
                  illo reiciendis corporis repudiandae excepturi? Velit
                  molestiae reprehenderit eligendi neque repellendus! Illum
                  molestiae quam iusto doloribus culpa sint similique quaerat
                  libero! Molestiae facilis quidem explicabo totam nostrum in
                  voluptatum ipsam sequi officia error id rerum unde nisi neque!
                </p>
              </div>
            </label>

            <label for="chk-3">
              <input id="chk-3" type="checkbox" />
              <div class="title">
                <h3>Accordion Heading Three</h3>
              </div>
              <div class="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Velit delectus sapiente dicta eligendi quis minus nulla maxime
                  illo reiciendis corporis repudiandae excepturi? Velit
                  molestiae reprehenderit eligendi neque repellendus! Illum
                  molestiae quam iusto doloribus culpa sint similique quaerat
                  libero! Molestiae facilis quidem explicabo totam nostrum in
                  voluptatum ipsam sequi officia error id rerum unde nisi neque!
                </p>
              </div>
            </label>

            <label for="chk-4">
              <input id="chk-4" type="checkbox" />
              <div class="title">
                <h3>Accordion Heading Four</h3>
              </div>
              <div class="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Velit delectus sapiente dicta eligendi quis minus nulla maxime
                  illo reiciendis corporis repudiandae excepturi? Velit
                  molestiae reprehenderit eligendi neque repellendus! Illum
                  molestiae quam iusto doloribus culpa sint similique quaerat
                  libero! Molestiae facilis quidem explicabo totam nostrum in
                  voluptatum ipsam sequi officia error id rerum unde nisi neque!
                </p>
              </div>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamHire;
