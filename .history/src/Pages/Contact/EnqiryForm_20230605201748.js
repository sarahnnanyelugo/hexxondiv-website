import React from "react";

export const EnqiryForm = () => {
  return (
    <div>
      <h6>Inquiry Form</h6>
      <form className="enquiry-form">
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
