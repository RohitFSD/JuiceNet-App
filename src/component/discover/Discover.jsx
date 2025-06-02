import React from "react";
import "../discover/Discover.css";
import DisIcon1 from "../discover/dis-icon1.png";
import DisIcon2 from "../discover/dis-icon2.png";
import DisIcon3 from "../discover/dis-icon3.png";
import DisIcon4 from "../discover/dis-icon4.png";
import DisIcon5 from "../discover/dis-icon5.png";
import DisIcon6 from "../discover/dis-icon6.png";

const cardData = [
  {
    icon: DisIcon1,
    title: "Multi-Family",
    desc: "Equip your property with cost-effective, managed EV charging",
  },
  {
    icon: DisIcon2,
    title: "Commercial",
    desc: "Generate revenue and attract valuable customers and employees to your business",
  },
  {
    icon: DisIcon3,
    title: "Residential",
    desc: "Rent out your home charger to reduce your electric bill and support your community.",
  },
  {
    icon: DisIcon4,
    title: "Vacation Rentals",
    desc: "Bring EV drivers to your listing and manage bookings and payments remotely",
  },
  {
    icon: DisIcon5,
    title: "Drivers",
    desc: "Locate a charging station for your EV within our nationwide network.",
  },
  {
    icon: DisIcon6,
    title: "Utilities",
    desc: "Enable customers to engage in time-of-use and demand response programs",
  },
];

const Discover = () => {
  return (
    <div className="discover-container">
      <div className="discover-main">
        <div className="discover-heading">
          Discover Our EV Charging
          <br /> Solutions
        </div>
        <div className="discover-cards">
          {cardData.map((card, index) => (
            <div className="discover-cards-section" key={index}>
              <span>
                <img
                  className="discover-big-icon"
                  src={card.icon}
                  alt={`dis-icon${index + 1}`}
                />
              </span>
              <span className="span1">{card.title}</span>
              <span className="span2">{card.desc}</span>
              <span className="span3">Learn more &rarr;</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discover;
