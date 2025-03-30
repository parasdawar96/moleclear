import React from "react";
import "./WhoWeAre.css";
import { MoleculeBackground } from "./BackgroundElements";

const WhoWeAre = () => {
  return (
    <section id="who-we-are" className="who-we-are-section">
      <MoleculeBackground className="who-we-are-bg" color="blue" />
      <div className="section-content">
        <h2>Who We Are</h2>
        <p>
          Moleclear is dedicated to delivering innovative, high-performance
          water treatment solutions that redefine industry standards. Our
          specialty chemistries are designed to enhance efficiency, reduce
          environmental impact, and optimize operational costs for industrial
          water systems.
        </p>
        <p>
          With a strong focus on research and development, our products are
          tailored for severe operating conditions while promoting
          sustainability and energy savings.
        </p>
      </div>
    </section>
  );
};

export default WhoWeAre;
