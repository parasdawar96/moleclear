import React from "react";
import "./Industries.css";

const Industries = () => {
  const industries = [
    "Automotive & Ancillaries",
    "Pharmaceuticals & Fine chemicals",
    "Mining & cement",
    "Food & Beverage",
    "Power & Energy",
    "Industrial Manufacturing",
    "Desalination & Water Reuse",
  ];

  return (
    <section id="industries" className="industries-section">
      <div className="section-content">
        <h2>Industries We Serve</h2>
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div key={index} className="industry-card">
              <h3>{industry}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
