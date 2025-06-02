import React from "react";
import "../info/Info.css";
import InfoIcon1 from "../info/info-icon3.png";
import InfoIcon2 from "../info/info-icon2.png";
import InfoIcon3 from "../info/info-icon1.png";
import ImageBan1 from "../info/bannerimg1.jpg";
import ImageBan2 from "../info/bannerimg2.jpg";
const Info = () => {
  return (
    <div className="info-container">
      <div className="info-center-div">
        <div className="info-image-div1">
          <img className="info-banner-img" src={ImageBan1} alt="imageban" />
          <img className="info-banner-img2" src={ImageBan2} alt="imageban2" />
          <div className="info-abs-exp">
            <span className="info-abs-exp1">12K+</span>
            <span className="info-abs-exp2">Years Experience</span>
          </div>
        </div>
        <div className="info-text-div2">
          <div className="info-text-section">
            <div className="info-heading-div">
              Simplify EV Charging with JuiceNet's Innovations.
            </div>
            <div className="info-para-div">
              JuiceNet connects EV owners to a robust network of Level 2
              chargers, promoting sustainable energy use. Our user-friendly
              platform simplifies charging for residential, fleet, multi-unit,
              and commercial users.
            </div>
            <div className="info-cards">
              <div className="cards-data">
                <div className="info-cards-icon">
                  <img src={InfoIcon1} alt="infoicon" />
                </div>
                <div className="info-cards-text">
                  Extensive network for easy access to chargers
                </div>
              </div>
              <div className="cards-data">
                <div className="info-cards-icon">
                  <img src={InfoIcon2} alt="infoicon2" />
                </div>
                <div className="info-cards-text">
                  Sustainable solutions for eco-conscious users and businesses
                </div>
              </div>
              <div className="cards-data">
                <div className="info-cards-icon">
                  <img src={InfoIcon3} alt="infoicon3" />
                </div>
                <div className="info-cards-text">
                  User-friendly interface for effortless charging experiences
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
