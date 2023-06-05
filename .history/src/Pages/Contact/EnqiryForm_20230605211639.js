import React from "react";
import ContactImg from "../../assets/images/contact-bg.jpg";

export const EnqiryForm = () => {
  return (
    <div className="enquiry-form col-md-12">
      <div className="form-heading">
        <div className="col-md-12">
          {" "}
          <img className="" src={ContactImg} alt="Scholar" width="100%" />{" "}
        </div>

        <div className="form-write-up">
          <center>
            <h6>Talk to a Human</h6>
            <p>
              You're not going to hit a ridiculously long phone menu when you
              call us. Your email isn't going to the inbox abyss, never to be
              seen or heard from again. At{" "}
              <span className="highlight">Hexxondiv Tech Hub</span>, we provide
              the exceptional service we'd want to experience ourselves!
            </p>
          </center>
        </div>
      </div>
      <form className="col-md-12">
        <div className="form-body">
          {" "}
          <input type="text" placeholder="Full name" />
          <input type="text" placeholder="Email address" />
          <input type="text" placeholder="Subject Title" />
          <input type="tel" placeholder="Phone Num" />
          <textarea placeholder="Enter your message" className="form-control" />
          <div className="offset-md-10 col-md-2">
            <button className="app-btn mt2">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};
