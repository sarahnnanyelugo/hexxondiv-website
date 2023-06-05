import React from "react";
import "./contact.scss";
export default function Contact() {
  return (
    <div className="col-md-12 contact-div">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d63433.250437120376!2d3.511189825029477!3d6.44816894698984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x103bf73bdd2b5ecf%3A0xdeb8a08bb7d635b7!2sHexxondiv%20Global%20Services%2C%20Road%204%2C%20No%2011%20Golden%20Pearl&#39;s%20Estate%2C%20Lekki!3m2!1d6.448143099999999!2d3.5524033999999998!4m5!1s0x103bf73bdd2b5ecf%3A0xdeb8a08bb7d635b7!2sRoad%204%2C%20No%2011%20Golden%20Pearl&#39;s%20Estate%2C%20106104%2C%20Lekki!3m2!1d6.448143099999999!2d3.5524033999999998!5e0!3m2!1sen!2sng!4v1685992050025!5m2!1sen!2sng"
        style={{ width: "100%", height: "1200px" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="offset-md-4 col-md-4 form-div"></div>
    </div>
  );
}
