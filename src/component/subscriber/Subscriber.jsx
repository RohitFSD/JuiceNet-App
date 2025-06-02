import React from "react";
import "../subscriber/Suscriber.css";
import BadgeSubs from "../juicenetapp/verifybadge.png";
const Subscriber = () => {
  return (
    <div className="subscriber-container">
      <div className="subscriber-main">
        <div className="subscriber-upper">
          Join for free or enjoy the benefits of being a subscriber. Subscribe
          Now!
        </div>
        <div className="subscriber-lower">
          <div className="subscriber-card">
            <div className="subscriber-card-inner">
              <div className="align-div-sub">
                <div className="subscriber-price">
                  <span className="subscriber-price-head">Guest</span>
                  <span>
                    <span className="dollar-price">$9.95</span>
                    <span className="month">/Month</span>
                  </span>
                </div>
                <div className="sub-brdr"></div>
                <div className="subscriber-text">
                  <div className="subs-heading-collector">
                    <span className="subs-heading-collector1">Features</span>
                    <span className="subs-heading-collector2">
                      <img className="subbadge" src={BadgeSubs} alt="badfe" />{" "}
                      25% Discount on Session Fees
                    </span>
                    <span className="subs-heading-collector3">
                      <img className="subbadge" src={BadgeSubs} alt="badfe" />{" "}
                      Auto renews until you cancel at anytime
                    </span>
                    <span className="subs-heading-collector3">
                      <img className="subbadge" src={BadgeSubs} alt="badfe" />{" "}
                      Auto renews until you cancel at anytime
                    </span>
                  </div>
                </div>
                <span className="subs-btn-div">
                  <button className="subs-btn">Subscribe</button>
                </span>
              </div>
            </div>
          </div>
          <div className="subscriber-card">
            <div className="subscriber-card-inner">
              <div className="align-div-sub">
                <div className="subscriber-price">
                  <span className="subscriber-price-head">Host</span>
                  <span>
                    <span className="dollar-price">$9.95</span>
                    <span className="month">/Month</span>
                  </span>
                </div>
                <div className="sub-brdr"></div>
                <div className="subscriber-text">
                  <div className="subs-heading-collector">
                    <span className="subs-heading-collector1">Features</span>
                    <span className="subs-heading-collector2">
                      <img className="subbadge" src={BadgeSubs} alt="badfe" />{" "}
                      Charge Up to an Extra 30% of the Service Fee
                    </span>
                    <span className="subs-heading-collector3">
                      <img className="subbadge" src={BadgeSubs} alt="badfe" />{" "}
                      Earn Up to 25% of every Guest's Session Fee
                    </span>
                    <span className="subs-heading-collector3">
                      <img className="subbadge" src={BadgeSubs} alt="badfe" />{" "}
                      Auto renews until you cancel at anytime
                    </span>
                  </div>
                  <span className="subs-btn-div">
                    <button className="subs-btn">Subscribe</button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscriber;
