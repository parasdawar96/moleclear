import React from "react";
import "./WhyChoose.css";
import { WaterBackground } from "./BackgroundElements";

const WhyChoose = () => {
  const reasons = [
    {
      title: "Cutting-Edge R&D",
      description:
        "Developed through extensive research to address modern water treatment challenges.",
    },
    {
      title: "Eco-Friendly & Sustainable",
      description:
        "More environmentally responsible compared to traditional formulations.",
    },
    {
      title: "Superior Performance in Harsh Conditions",
      description:
        "Effective under high-stress environments, ensuring long-term system efficiency.",
    },
    {
      title: "Energy & Cost Savings",
      description:
        "Helps industries reduce energy consumption and operational costs.",
    },
  ];

  return (
    <section id="why-choose" className="why-choose-section">
      <WaterBackground className="why-choose-bg" />
      <div className="section-content">
        <h2>Why Choose Moleclear?</h2>
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card">
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
