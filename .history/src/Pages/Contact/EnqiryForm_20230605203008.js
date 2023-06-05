import React from "react";

export const EnqiryForm = () => {
  return (
    <div>
      <h6>Inquiry Form</h6>
      <form className="enquiry-form">
        <div className="form-heading">
          <center>
            <h6>Talk to a Human</h6>
            <p>
              You're not going to hit a ridiculously long phone menu when you
              call us. Your email isn't going to the inbox abyss, never to be
              seen or heard from again. At Hexxondiv Tech Hub, we provide the
              exceptional service we'd want to experience ourselves!
            </p>
          </center>
        </div>
        <input type="text" placeholder="Full name" />
        <input type="text" placeholder="Email address" />
        <input type="text" placeholder="Subject Title" />
        <textarea placeholder="Enter your message" className="form-control" />
        <div className="offset-md-10 col-md-2">
          <button className="app-btn mt4">Submit</button>
        </div>
      </form>
    </div>
  );
};
