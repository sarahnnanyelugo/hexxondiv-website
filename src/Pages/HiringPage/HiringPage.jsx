import React from "react";
import Logo from "../../assets/images/tech-hub.png";
import "./hiring-page.scss";
function HiringPage({ name, id, value, checked, text }) {
  const onChange = (e) => {
    const { name } = e.target;
    console.log("clicked  ==>", name);
  };
  function FormSubmit() {
    window.alert(
      "form successfully submited! kindly await a response from one of  our support staff"
    );
  }

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
        <label class="radio-container" for="rd5">
          <p>Build a project from scratch</p>
          <input type="radio" checked="checked" name="radio" id="rd5" />
          <span class="checkmark"></span>
        </label>
        <label class="radio-container" for="rd6">
          <p>Scale existing project</p>
          <input type="radio" checked="checked" name="radio" id="rd6" />
          <span class="checkmark"></span>
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
        <label class="radio-container" for="rd1">
          <p>As soon as possible</p>
          <input type="radio" checked="checked" name="radio" id="rd1" />
          <span class="checkmark"></span>
        </label>
        <label class="radio-container">
          <p>Less than 30 days</p>
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
        </label>
        <label class="radio-container">
          <p>Next 60 days</p>
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
        </label>
        <label class="radio-container">
          <p>Not sure</p>
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
        </label>
        <br />
        <h6>Project description</h6>
        <textarea
          rows="4"
          className="form-control"
          placeholder="Your message"
        />{" "}
        <div className="col-md-12 flexy mt2">
          <div className="col-md-6">
            <div className="col-md-11">
              {" "}
              <h6>First Name</h6>
              <input type="text" className="form-control" />{" "}
              <h6>Company name*</h6>
              <input type="text" className="form-control" />
              <h6>Email Address*</h6>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="col-md-11">
              {" "}
              <h6>Last name</h6>
              <input type="text" className="form-control" />
              <h6>Country/Region*</h6>
              <input type="text" className="form-control" />{" "}
              <h6>Tel (optional)</h6>
              <input type="text" className="form-control" />{" "}
            </div>
          </div>
        </div>
        <button onClick={FormSubmit} className="app-btn mt4">
          Submit
        </button>
      </form>
    </div>
  );
}

export default HiringPage;
