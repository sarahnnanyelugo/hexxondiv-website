import { useEffect, useState, useRef } from "react";
import "./prices.scss";
import Bio from "../../assets/images/link-in-bio.svg";
import QR from "../../assets/images/QR-Codes.svg";
import UTM from "../../assets/images/UTM-builder.svg";
import Redirect from "../../assets/images/Redirect.svg";
import Scan from "../../assets/images/Data-Analytics.svg";
import Support from "../../assets/images/chat-support.svg";
import Domain from "../../assets/images/complimentary-domain.svg";
import Code from "../../assets/images/QR-Codes.svg";
import Branded from "../../assets/images/share.svg";
import Performance from "../../assets/images/Analytics.svg";
import Campaigns from "../../assets/images/Campaigns.svg";
import Device from "../../assets/images/location-device-data.svg";

function Prices() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  return (
    <>
      <div className="prices-container  ">
        <center>
          {" "}
          <h1>Pricing for brands and businesses of all sizes</h1>
          <p>
            Connect to your audience with branded links, QR Codes, and a
            Link-in-bio that will get their attention.
          </p>
        </center>
      </div>
      <div className="col-md-12 prices-div">
        <div className=" col-md-12   ">
          <p
            className="offset-md-2"
            style={{ color: "grey", marginBottom: "40px" }}
          >
            Save up to 34% when you pay annually
          </p>
          <div className="flexy flexyM col-md-10 offset-md-2">
            <small className=" ">Pay Monthly</small>
            <div className="tabs ">
              <button
                className={`tab ${checkActive(1, "active2")}`}
                onClick={() => handleClick(1)}
              ></button>
              <button
                className={`tab ${checkActive(2, "active2")}`}
                onClick={() => handleClick(2)}
              ></button>
            </div>{" "}
            <small>Pay Annually</small>
          </div>
          <div className="panels  col-md-9 offset-md-1">
            <div className={`panel ${checkActive(1, "active2")}`}>
              {" "}
              <div className=" flexy  col-md-12 prices-body">
                <div className="col-md-3">
                  <div className="col-md-11 prices">
                    <center>
                      <h6>FREE </h6>
                    </center>
                    <hr />
                    <h3>
                      $0 <sub>/month</sub>
                    </h3>
                    <button className="started-btn">Get Started</button>
                    <p>10 tiny.ng links/month</p>
                    <p>
                      <strong>Includes:</strong>
                    </p>
                    <ul className="list-unstyled">
                      <li>
                        <img className="  " src={Bio} alt="Scholar" />
                        Link-in-bi
                      </li>{" "}
                      <li>
                        <img className="  " src={QR} alt="Scholar" />
                        QR Codes{" "}
                      </li>{" "}
                      <li>
                        <img className="  " src={UTM} alt="Scholar" />
                        UTM Builder
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="col-md-11 premium-prices">
                    <div className="col-md-12 premium-header">
                      {" "}
                      <center>
                        <h6>MOST POPULAR</h6>
                      </center>
                    </div>
                    <div className="premium-body">
                      {" "}
                      <center>
                        <h6>STARTER</h6>
                      </center>
                      <hr />
                      <h5>Annual plan only</h5>
                      <button className="started-btn">Get Started</button>
                      <p>200 bit.ly links/month</p>
                      <p>
                        <strong>Everything in Free, plus:</strong>
                      </p>
                      <ul className="list-unstyled">
                        <li>
                          <img className="  " src={Redirect} alt="Scholar" />
                          Link redirects
                        </li>{" "}
                        <li>
                          <img className="  " src={Scan} alt="Scholar" />
                          Click and scan data
                        </li>{" "}
                        <li>
                          <img className="  " src={Support} alt="Scholar" />
                          Access to support
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="col-md-11 prices">
                    <center>
                      <h6>BASIC</h6>
                    </center>
                    <hr />
                    <h3>
                      $35 <sub>/month</sub>
                    </h3>
                    <button className="started-btn">Get Started</button>
                    <p>1,500 branded links/month</p>
                    <p>
                      <strong>Everything in Starter, plus:</strong>
                    </p>
                    <ul className="list-unstyled">
                      <li>
                        <img className="  " src={Domain} alt="Scholar" />
                        Complimentary custom domain*
                      </li>{" "}
                      <li>
                        <img className="  " src={Code} alt="Scholar" />
                        QR Code colors and logos
                      </li>{" "}
                      <li>
                        <img className="  " src={Branded} alt="Scholar" />
                        Branded links
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="col-md-11 prices">
                    <center>
                      <h6>PREMIUM</h6>
                    </center>
                    <hr />
                    <h3>
                      $300 <sub>/month</sub>
                    </h3>

                    <button className="started-btn">Get Started</button>
                    <p>3,000 branded links/month</p>
                    <p>
                      <strong>Everything in Basic, plus:s</strong>
                    </p>
                    <ul className="list-unstyled">
                      <li>
                        <img className="  " src={Performance} alt="Scholar" />
                        Advanced performance dashboard
                      </li>{" "}
                      <li>
                        <img className="  " src={Campaigns} alt="Scholar" />
                        Campaigns
                      </li>{" "}
                      <li>
                        <img className="  " src={Code} alt="Scholar" />
                        QR Code multiple download formats
                      </li>{" "}
                      <li>
                        <img className="  " src={Device} alt="Scholar" />
                        Location and device type data
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className={`panel ${checkActive(2, "active2")}`}>
              <div className=" flexy  col-md-12 prices-body">
                <div className="col-md-3">
                  <div className="col-md-11 prices">
                    <center>
                      <h6>FREE </h6>
                    </center>
                    <hr />
                    <h3>
                      $0 <sub>/yearly</sub>
                    </h3>
                    <button className="started-btn">Get Started</button>
                    <p>10 tiny.ng links/month</p>
                    <p>
                      <strong>Includes:</strong>
                    </p>
                    <ul className="list-unstyled">
                      <li>
                        <img className="  " src={Bio} alt="Scholar" />
                        Link-in-bi
                      </li>{" "}
                      <li>
                        <img className="  " src={QR} alt="Scholar" />
                        QR Codes{" "}
                      </li>{" "}
                      <li>
                        <img className="  " src={UTM} alt="Scholar" />
                        UTM Builder
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="col-md-11 premium-prices2">
                    <div className="col-md-12 premium-header">
                      {" "}
                      <center>
                        <h6>MOST POPULAR</h6>
                      </center>
                    </div>
                    <div className="premium-body">
                      {" "}
                      <center>
                        <h6>STARTER</h6>
                      </center>
                      <hr />
                      <h3>
                        $8 <sub>/yearly</sub>
                      </h3>
                      <small>(annual one-time charge of $96)</small>
                      <button className="started-btn">Get Started</button>
                      <p>200 bit.ly links/month</p>
                      <p>
                        <strong>Everything in Free, plus:</strong>
                      </p>
                      <ul className="list-unstyled">
                        <li>
                          <img className="  " src={Redirect} alt="Scholar" />
                          Link redirects
                        </li>{" "}
                        <li>
                          <img className="  " src={Scan} alt="Scholar" />
                          Click and scan data
                        </li>{" "}
                        <li>
                          <img className="  " src={Support} alt="Scholar" />
                          Access to support
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="col-md-11 prices">
                    <center>
                      <h6>BASIC</h6>
                    </center>
                    <hr />
                    <h3>
                      $29 <sub>/yearly</sub>
                    </h3>
                    <small>(annual one-time charge of $348)</small>
                    <button className="started-btn">Get Started</button>
                    <p>1,500 branded links/month</p>
                    <p>
                      <strong>Everything in Starter, plus:</strong>
                    </p>
                    <ul className="list-unstyled">
                      <li>
                        <img className="  " src={Domain} alt="Scholar" />
                        Complimentary custom domain*
                      </li>{" "}
                      <li>
                        <img className="  " src={Code} alt="Scholar" />
                        QR Code colors and logos
                      </li>{" "}
                      <li>
                        <img className="  " src={Branded} alt="Scholar" />
                        Branded links
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="col-md-11 prices">
                    <center>
                      <h6>PREMIUM</h6>
                    </center>
                    <hr />
                    <h3>
                      $199 <sub>/yearly</sub>
                    </h3>
                    <small>(annual one-time charge of $2,388)</small>

                    <button className="started-btn">Get Started</button>
                    <p>3,000 branded links/year</p>
                    <p>
                      <strong>Everything in Basic, plus:s</strong>
                    </p>
                    <ul className="list-unstyled">
                      <li>
                        <img className="  " src={Performance} alt="Scholar" />
                        Advanced performance dashboard
                      </li>{" "}
                      <li>
                        <img className="  " src={Campaigns} alt="Scholar" />
                        Campaigns
                      </li>{" "}
                      <li>
                        <img className="  " src={Code} alt="Scholar" />
                        QR Code multiple download formats
                      </li>{" "}
                      <li>
                        <img className="  " src={Device} alt="Scholar" />
                        Location and device type data
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Prices;
