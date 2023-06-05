import React from "react";
import "./faq.scss";
function FAQ() {
  return (
    <div className="col-md-12 questions-div">
      <div class="row">
        <div class="col">
          <h2>
            Open <b>one</b>
          </h2>
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
                Item 2
              </label>
              <div class="tab-content">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
                aut.
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
