import React from "react";
import "../herosection/Herosection.css";
// import DownloadIcon from "../../utils/DownloadIcon";
import HomeBanner from "../herosection/home-banner.png";
import PlayButton from "../herosection/Button1.png";
import AppStore from "../herosection/Button.png";
import Arrow from "../herosection/duplicate.svg";
const Herosection = () => {
  return (
    <div className="hero-container">
      <div className="upper-main">
        <div className="upper-section">
          <div className="heading-text">
            Experience the Seamless Future of EV Charging
          </div>
          <div className="hero-download-section">
            <div className="hero-forget">
              <img className="arrow-dwnd" src={Arrow} alt="Arrow" />
              <div className="download-btn-section">
                <div className="dwnd-btn-text">
                  Download the JuiceNet app now!
                </div>
                <div className="dwnd-store-btn">
                  <img
                    className="hero-play-btn"
                    src={AppStore}
                    alt="appStore"
                  />
                  <img
                    className="hero-play-btn"
                    src={PlayButton}
                    alt="playbt"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-banner-image-section">
          <img src={HomeBanner} alt="EV banner" className="hero-banner-image" />
        </div>
      </div>
      <div className="lower">
        <div className="hero-lower-section">
          <div className="hero-lower-div1">
            Transforming the way the world refuels.
          </div>
          <div className="hero-lower-div2">
            <div className="lower-div2-info">
              <div className="lower-num">24k+</div>
              <div className="lower-text">Total chargers in network</div>
            </div>
            <div className="lower-div2-info">
              <div className="lower-num">150k+</div>
              <div className="lower-text">Total EVs charged</div>
            </div>
            <div className="lower-div2-info">
              <div className="lower-num">95%</div>
              <div className="lower-text">Charger Availiblity</div>
            </div>
            <div className="lower-div2-info">
              <div className="lower-num">4.8/5</div>
              <div className="lower-text">Average user rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
