import React from "react";
import "./faq.scss";
function FAQ() {
  return (
    <div className="col-md-12 questions-div mt9">
      <div class="row">
        <div class="col">
          <div class="tabs">
            <div class="tab">
              <input type="radio" id="rd1" name="rd" />
              <label class="tab-label" for="rd1">
                Do you use Agile Project Management?{" "}
              </label>
              <div class="tab-content">
                We employ modified agile processes focused on fast iterations
                and pushing new releases every 2 weeks after the initial launch.
              </div>
            </div>
            <div class="tab">
              <input type="radio" id="rd2" name="rd" />
              <label class="tab-label" for="rd2">
                How is the team typically structured?
              </label>
              <div class="tab-content">
                Every team starts with a planning phase to define a Minimum
                Viable Product (MVP) that enables software testing. We suggest
                to brake down projects into releases to address key
                functionalities that provide certain business results over time.
              </div>
            </div>{" "}
            <div class="tab">
              <input type="radio" id="rd3" name="rd" />
              <label class="tab-label" for="rd3">
                Will we be working directly with the Specialists?
              </label>
              <div class="tab-content">
                Our Tech Hub provides self-managed specialists, so you work
                directly with a team of technicians. With bigger teams, you
                usually are going to communicate with the team leader.
              </div>
            </div>{" "}
            <div class="tab">
              <input type="radio" id="rd2" name="rd" />
              <label class="tab-label" for="rd2">
                How can I be sure my project is kept confidential?
              </label>
              <div class="tab-content">
                All members of the Chimera Prime are under a strict NDA, and by
                extension to any client's project.
              </div>
            </div>
            <div class="tab">
              <input type="radio" id="rd3" name="rd" />
              <label for="rd3" class="tab-close">
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
