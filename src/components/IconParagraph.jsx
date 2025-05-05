import React from 'react';
import "../App.css";

const IconParagraph = () => {
  const items = [
    "Test, Examination & Review of Lifts & Hoist as per Section 28 of Factories Act.",
    "Test, Examination & Review of Lifting Machines, Chains, Ropes, Lifting Tackles etc. as per Section 29 of Factories Act.",
    "Test, Examination & Review of Pressure Vessels & Pressure Plants as per Section 31 of Factories Act.",
    "Inspection of Welding, Painting and Other Surface Coating.",
    "Third Party Inspection – Destructive, NDT, Attribute and Variable Inspection.",
    "Calibration of Measuring & Monitoring Equipments.",
    "On-site Quality and Safety Co-ordination & Surveillance.",
    "Vendor Assessment Services.",
  ];

  return (
    <div className="section-wrapper">
      {/* <center><hr width="500px;" size="10"/></center> */}
      <h2 className="section-heading">OUR SERVICES</h2>
      <div className="icon-list">
        {items.map((text, index) => (
          <p key={index} className="icon-item">
            <i className="fas fa-chevron-circle-right icon" />
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default IconParagraph;
