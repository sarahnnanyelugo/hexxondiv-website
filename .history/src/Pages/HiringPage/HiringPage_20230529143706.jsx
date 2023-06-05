import React from "react";
import Logo from "../../assets/images/tech-hub.png";
import "./hiring-page.scss";
function HiringPage({ name, id, value, checked, text }) {
  const onChange = (e) => {
    const { name } = e.target;
    console.log("clicked  ==>", name);
  };

  return (
    <div className="col-md-8 offset-md-2 hire-form">
      <center>
        <img className="tech-logo" src={Logo} alt="Scholar" width="20%" />
      </center>
      <center>
        <div className="col-md-6 intro-div">
          <p>
            Thanks for your interest in hiring Hexxondiv Tech Hub. Before we get
            started, we’d like to ask a few questions to better understand your
            business needs.
          </p>
        </div>
      </center>
      <h5>I want to*</h5>
      <form>
        <input type="radio" id="html" name="fav_language" value="HTML" />
        <label for="html">
          <p>Build a project from scratch</p>
        </label>
        <br />
        <input type="radio" id="css" name="fav_language" value="CSS" />
        <label for="css">
          <p>Scale existing project</p>
        </label>
        <br />
        <br />
        <br />
        <h5>What kind of project do you need?*</h5> <br />
        <br />
        <label class="mylabel">
          <input class="myinput" type="checkbox" name="mobile" value="mobile" />
          <div class="mydisplay"></div>
          <div class="mylabel">
            <p>Mobile</p>
          </div>
        </label>
        <label class="mylabel">
          <input class="myinput" type="checkbox" name="web" value="web" />
          <div class="mydisplay"></div>
          <div class="mylabel">
            <p>Web</p>
          </div>
        </label>
        <label class="mylabel">
          <input
            class="myinput"
            type="checkbox"
            name="backend"
            value="backend"
          />
          <div class="mydisplay"></div>
          <div class="mylabel">
            <p>Backend</p>
          </div>
        </label>
        <label class="mylabel">
          <input
            class="myinput"
            type="checkbox"
            name="integration
"
            value="integration
"
          />
          <div class="mydisplay"></div>
          <div class="mylabel">
            <p>Integration</p>
          </div>
        </label>
        <label class="mylabel">
          <input class="myinput" type="checkbox" name="design" value="design" />
          <div class="mydisplay"></div>
          <div class="mylabel">
            <p>UI/UX design</p>
          </div>
        </label>
        <label class="mylabel">
          <input class="myinput" type="checkbox" name="checkbox" />
          <div class="mydisplay"></div>
          <div class="mylabel">
            <p>Integration</p>
          </div>
        </label>
        <label class="mylabel">
          <input
            class="myinput"
            type="checkbox"
            name="migration"
            value="migration"
          />
          <div class="mydisplay"></div>
          <div class="mylabel">
            <p>DevOps/Cloud migration</p>
          </div>
        </label>
        <label class="mylabel">
          <input class="myinput" type="checkbox" name="review" value="review" />
          <div class="mydisplay"></div>
          <div class="mylabel">
            <p>Code review</p>
          </div>
        </label>
        <br />
        <br />
        <h6>How soon would you like to start?*</h6>
        <label class="container">
          <p>As soon as possible</p>
          <input type="radio" checked="checked" name="radio" />
          <span class="checkmark"></span>
        </label>
        <label class="container">
          <p></p>
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
        </label>
        <label class="container">
          Three
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
        </label>
        <label class="container">
          Four
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
        </label>
        <h6>Project description</h6>
        <textarea
          rows="4"
          className="form-control"
          placeholder="Your message"
        />{" "}
        <div className="col-md-12 flexy">
          <div className="col-md-6">
            {" "}
            <h6>Project description</h6>
            <input type="text" className="form-control" /> <h6>First name*</h6>
            <input type="text" className="form-control" />
            <h6>Last name*</h6>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-6">
            <h6>Company name</h6>
            <input type="text" className="form-control" />
            <h6>Country/Region*</h6>
            <input type="text" className="form-control" /> <h6>Email*</h6>
            <input type="text" className="form-control" />{" "}
          </div>
        </div>
        <button className="app-btn mt4">Submit</button>
      </form>
    </div>
  );
}

export default HiringPage;
