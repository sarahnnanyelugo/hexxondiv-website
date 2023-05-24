import React from "react";
import "./flip-tab.scss";
function FlipTab() {
  return (
    <div className="flip-tab-container">
      <div className="medcaro ">
        <Carousel fade indicatorLabels="1234">
          <Carousel.Item>
            <div className="col-md-12 flexy">
              {" "}
              <div className="col-md-4">
                <h2>Well-organized Workflows</h2>
                <p>
                  Provides schools with a centralized platform to efficiently
                  manage various pastoral care activities, such as tracking
                  student attendance, behavior, and well-being, scheduling and
                  documenting pastoral care interventions, and recording student
                  interactions.
                </p>
              </div>
              <div className="col-md-8">4</div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="col-md-12 flexy">
              {" "}
              <div className="col-md-4">
                <h2>Student Safety</h2>
                <p>
                  educare Medical prioritizes the safety and well-being of
                  students. It helps schools keep track of students’ health
                  conditions, medications, and allergies, ensuring that
                  appropriate care is provided when needed. This promotes
                  student safety and minimizes the risk of medical emergencies
                  or incidents in schools.
                </p>
              </div>
              <div className="col-md-8"> 3</div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="col-md-12 flexy">
              {" "}
              <div className="col-md-4">
                <h2>Enhanced Health Services</h2>
                <p>
                  educare”s medical helps schools streamline their health
                  services, ensuring that students receive prompt and
                  appropriate medical care. It facilitates efficient
                  communication among school staff, parents, and healthcare
                  providers, ensuring timely and accurate information exchange.
                </p>
              </div>
              <div className="col-md-8"> 2</div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="col-md-12 flexy">
              {" "}
              <div className="col-md-4">
                <h2>Customizable and Scalable</h2>
                <p>
                  The medical module of educare is highly customizable, allowing
                  schools to adapt it to their specific medical policies,
                  procedures, and workflows. It is also scalable, making it
                  suitable for schools of different sizes and types, from local
                  schools to international institutions.
                </p>
              </div>
              <div className="col-md-8"> 2</div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default FlipTab;
