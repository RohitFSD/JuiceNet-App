import React from "react";
import "./JuiceNetFeatures.css";
import centerImage from "../juicenetfeatures/evJuiceCharge.png";
import GreenIcon1 from "../juicenetfeatures/green-icon1.png";
import GreenIcon2 from "../juicenetfeatures/green-icon2.png";
import GreenIcon3 from "../juicenetfeatures/green-icon3.png";
import GreenIcon4 from "../juicenetfeatures/green-icon4.png";
const JuiceNetFeatures = () => {
  return (
    <div className="juicenet-container">
      <div className="juicenet-heading">
        Key Features Of JuiceNet
        <br />
        EV Charging
      </div>
      <div className="juicenetalign">
        <div className="juicenet-grid">
          <img className="juicecanterimg" src={centerImage} alt="centerImage" />
        </div>
        <div className="juicenet-card-com">
          <div className="juicenet-card-com-icon">
            <img className="com-icon" src={GreenIcon4} alt="greenicon" />
          </div>
          <div className="juicenet-card-com-text">
            <span className="com-text-span1">Smart Fleet Management</span>
            <span className="com-text-span2">
              Optimize your fleet's charging needs with real-time management and
              reporting tools.
            </span>
          </div>
        </div>
        <div className="juicenet-card-com1">
          <div className="juicenet-card-com-icon">
            <img className="com-icon" src={GreenIcon2} alt="greenicon" />
          </div>
          <div className="juicenet-card-com-text">
            <span className="com-text-span1">User-Friendly Interface</span>
            <span className="com-text-span2">
              Navigate our platform easily with intuitive design tailored for
              all types of users.
            </span>
          </div>
        </div>
        <div className="juicenet-card-com2">
          <div className="juicenet-card-com-icon">
            <img className="com-icon" src={GreenIcon3} alt="greenico3n" />
          </div>
          <div className="juicenet-card-com-text">
            <span className="com-text-span1">Multi-Unit Solutions</span>
            <span className="com-text-span2">
              Effortlessly manage charging for multiple units, enhancing
              convenience for residents and visitors alike.
            </span>
          </div>
        </div>
        <div className="juicenet-card-com3">
          <div className="juicenet-card-com-icon">
            <img className="com-icon" src={GreenIcon1} alt="greenico1n" />
          </div>
          <div className="juicenet-card-com-text">
            <span className="com-text-span1">Sustainable Infrastructure</span>
            <span className="com-text-span2">
              Join us in building a greener future with our eco-friendly
              charging solutions.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JuiceNetFeatures;
