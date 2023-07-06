import React from "react";
import "./faq.scss";
function FAQ() {
  return (
    <div className="col-md-12 careers-faq mt9">
      <div class="row">
        <div class="col">
          <div class="tabs">
            <div class="tab">
              <input type="radio" id="rd1" name="rd" />
              <label class="tab-label" for="rd1">
                How does your interviewing process look like?
              </label>
              <div class="tab-content">
                After applying we will carefully look through all your social
                profiles and see what you're made of and what kind of stuff you
                worked on in the past. If we see a fit we will invite you to a
                short 15min call where we will talk and get to know each other.
                After that we will finalise the deal if we are a fit in less
                than 1 week.
              </div>
            </div>
            <div class="tab">
              <input type="radio" id="rd2" name="rd" />
              <label class="tab-label" for="rd2">
                Can I apply for an internship?
              </label>
              <div class="tab-content">
                We are currently not looking for interns. But that might change
                in the future.
              </div>
            </div>{" "}
            <div class="tab">
              <input type="radio" id="rd3" name="rd" />
              <label class="tab-label" for="rd3">
                How do I apply for a position?
              </label>
              <div class="tab-content">
                Click on the button next to a job post to open a google form.
                Input your information and wait for a couple of days. We will be
                definitely be in touch in 2-4 business days.
              </div>
            </div>{" "}
            <div class="tab">
              <input type="radio" id="rd4" name="rd" />
              <label class="tab-label" for="rd4">
                Can I work remote?
              </label>
              <div class="tab-content">
                Yes! We are completely remote and async
              </div>
            </div>
            <div class="tab">
              <input type="radio" id="rd5" name="rd" />
              <label class="tab-label" for="rd5">
                What kind of benefits do you offer?
              </label>
              <div class="tab-content">
                If you get a full time position at Hexxondiv TechHub you will be
                eligible to at least 20 vacation days and a bunch of other fun
                stuff
              </div>
            </div>
            <div class="tab">
              <input type="radio" id="rd5" name="rd" />
              <label class="tab-label" for="rd5">
                Do you accept part time positions?
              </label>
              <div class="tab-content">
                For now we are focusing on growing only with full time
                employees.
              </div>
            </div>
            <div class="tab">
              <input type="radio" id="rd7" name="rd" />
              <label for="rd7" class="tab-close">
                Close others &times;
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
