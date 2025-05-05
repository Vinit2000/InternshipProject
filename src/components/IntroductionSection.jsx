import React from "react";
import "../App.css";
import hotWelding from "../assets/hot-weilding.jpg";
import scaffolding from "../assets/scaffolding.jpg";
import crane from "../assets/crane.jpg";
import service1 from "../assets/train3.jpg";
import service2 from "../assets/compressor.jpg";
import service3 from "../assets/loadtest.jpg";
import service4 from "../assets/thparty.jpg";

const IntroductionSection = () => {
  return (
    <div className="intro-section">
      
      <h2 className="intro-heading">Introduction</h2>
      
      <p className="intro-text">
        <strong>AAKKAI ENGINEERS & ASSOCIATES</strong> is an ISO 9001 (QMS) Certified company and a leading name
        in fabrication, erection, repair, surface coating, waterproofing, grouting, and strengthening
        of civil and mechanical structures. We also specialize in the supply, installation, and servicing
        of solar equipment. Our mission is to deliver high-quality services powered by advanced technologies.

        <br /><br />
        AAKKAI is widely trusted for inspection, testing, technical services, training, and calibration across
        diverse engineering sectors—power, TLT, refinery, construction, fabrication, and industrial/domestic.
        We are empanelled with NABL-accredited labs and committed to quality, safety, environment, and
        engineering excellence. Our inspection services ensure the safety and efficiency of plants and machinery
        through audits, training, calibration, and destructive/non-destructive testing.
      </p>

      <div className="image-row">
        <img src={hotWelding} alt="Hot Welding" className="intro-image" />
        <img src={scaffolding} alt="Scaffolding" className="intro-image" />
        <img src={crane} alt="Crane" className="intro-image" />
      </div>
      {/* <center><hr width="800px;" size="10"/></center> */}
      <h2 className="section-heading">What We Do?</h2>
      <div className="what-we-do-row">
        <div className="service-item">
          <img src={service3} alt="Load Test" className="service-image" />
          <p className="services-title">Load Testing</p>
        </div>
        <div className="service-item">
          <img src={service2} alt="Compressor" className="service-image" />
          <p className="services-title">Compressor</p>
        </div>
        <div className="service-item">
          <img src={service1} alt="Training" className="service-image" />
          <p className="services-title">Training</p>
        </div>
        <div className="service-item">
          <img src={service4} alt="Third-Party" className="service-image" />
          <p className="services-title">Third-Party Inspection</p>
        </div>
      </div>
    </div>
  );
};

export default IntroductionSection;