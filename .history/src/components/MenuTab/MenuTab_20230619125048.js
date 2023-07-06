import React from "react";
import "./menu-tab.scss";
function MenuTab() {
  return (
    <div className="menu-tab-container col-md-12 ">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="vertical-tab" role="tabpanel">
              <ul class="nav nav-tabs" role="tablist">
                <li role="presentation" class="active">
                  <a
                    href="#Section1"
                    aria-controls="home"
                    role="tab"
                    data-toggle="tab"
                  >
                    Section 1
                  </a>
                </li>
                <li role="presentation">
                  <a
                    href="#Section2"
                    aria-controls="profile"
                    role="tab"
                    data-toggle="tab"
                  >
                    Section 2
                  </a>
                </li>
                <li role="presentation">
                  <a
                    href="#Section3"
                    aria-controls="messages"
                    role="tab"
                    data-toggle="tab"
                  >
                    Section 3
                  </a>
                </li>
              </ul>
              <div class="tab-content tabs">
                <div
                  role="tabpanel"
                  class="tab-pane fadeIn active"
                  id="Section1"
                >
                  <h3>Section 1</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce semper, magna a ultricies volutpat, mi eros viverra
                    massa, vitae consequat nisi justo in tortor. Proin accumsan
                    felis ac felis dapibus, non iaculis mi varius, mi eros
                    viverra massa.
                  </p>
                </div>
                <div role="tabpanel" class="tab-pane fadeIn" id="Section2">
                  <h3>Section 2</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce semper, magna a ultricies volutpat, mi eros viverra
                    massa, vitae consequat nisi justo in tortor. Proin accumsan
                    felis ac felis dapibus, non iaculis mi varius, mi eros
                    viverra massa.
                  </p>
                </div>
                <div role="tabpanel" class="tab-pane fadeIn" id="Section3">
                  <h3>Section 3</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce semper, magna a ultricies volutpat, mi eros viverra
                    massa, vitae consequat nisi justo in tortor. Proin accumsan
                    felis ac felis dapibus, non iaculis mi varius, mi eros
                    viverra massa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuTab;
