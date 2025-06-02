import React from "react";
import "../evdata/EvData.css";
const EvData = () => {
  return (
    <div className="evdata-container">
      <div className="evdata-main">
        <div className="evdata-heading">
          Transforming EV Charging for a Sustainable Future
        </div>
        <div className="evdata-para">
          <div className="evdata-para-upper">
            JuiceNet connects thousands of EV owners to reliable Level 2
            chargers. Our commitment to sustainability is reflected in our
            growing network and user engagement.
          </div>
          <div className="evdata-para-lower">
            <div className="evdata-span">
              <div className="evdata-percent">75%</div>
              <div className="evdata-precent-text">
                Users report increased charging convenience and satisfaction
              </div>
            </div>
            <div className="evdata-span">
              <div className="evdata-percent">60%</div>
              <div className="evdata-precent-text">
                Reduction in carbon footprint through our network
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvData;
