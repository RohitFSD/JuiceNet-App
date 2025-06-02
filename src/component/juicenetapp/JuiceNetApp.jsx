import React from "react";
import "../juicenetapp/JuiceNetApp.css";
import JuiceAppPhone from "../juicenetapp/juicenetappimg.png";
import GoogleBtn from "../herosection/googlePlayButton.png";
import PlayStore from "../herosection/PlayBtn.jpeg";
import Badge from "../juicenetapp/verifybadge.png";
const JuiceNetApp = () => {
  return (
    <div className="juicenetapp-container">
      <div className="juicenetapp-main">
        <div className="juicenetapp-left">
          <img
            className="juiceappphone"
            src={JuiceAppPhone}
            alt="Mobilephone"
          />
        </div>
        <div className="juicenetapp-right">
          <span className="juicenetapp-span1">
            Download the JuiceNet Mobile App
          </span>
          <span className="juicenetapp-span2">
            Get on-the-go access to a vast EV charging network with the JuiceNet
            app. Download on iOS or Android to ensure you’re always ready to
            charge
          </span>
          <span className="juicenetapp-span3">
            <span className="juicenetapp-inner-span">
              <img className="badgrt" src={Badge} alt="badger" /> Find chargers
              by connector type, speed, availability, and price
            </span>
            <span className="juicenetapp-inner-span">
              <img className="badgrt" src={Badge} alt="badger" /> Securely load
              your wallet and pay directly from your device
            </span>
            <span className="juicenetapp-inner-span">
              <img className="badgrt" src={Badge} alt="badger" />
              Securely load your wallet and pay directly from your device.
            </span>
            <span className="juicenetapp-inner-span">
              <img className="badgrt" src={Badge} alt="badger" /> Receive
              notifications for new charging requests and manage sessions
              seamlessly
            </span>
            <span className="juicenetapp-inner-span">
              <img className="badgrt" src={Badge} alt="badger" /> Effortlessly
              handle hosting reservations and monitor usage in real time.
            </span>
          </span>
          <span className="juicenetapp-span4">
            <img src={PlayStore} alt="apple" />
            <img src={GoogleBtn} alt="gol" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default JuiceNetApp;
