import React from 'react';
import FabricationUnit from "../assets/fabricationunit.jpeg";
import piping from "../assets/piping.jpeg";
import SolarEnergy from "../assets/solarenergy.jpg";
import Refineries from "../assets/Refineries.jpg";
import "../App.css";

const ServicesTo = () => {
  const services = [
    { src: FabricationUnit, label: "Fabrication Unit" },
    { src: piping, label: "Piping" },
    { src: SolarEnergy, label: "Solar Energy" },
    { src: Refineries, label: "Refineries" },
  ];

  return (
    <div className="section-wrapper">
      {/* <center><hr width="500px;" size="10"/></center> */}
      <h2 className="section-heading">THE MARKET WE SERVE</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-box" key={index}>
            <img src={service.src} alt={service.label} className="market-image" />
            <p className="service-label">{service.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesTo;
