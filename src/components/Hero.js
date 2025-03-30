import React from "react";
import "./Hero.css";
import molecule1 from "../assets/images/molecule1.svg";
import molecule2 from "../assets/images/molecule2.svg";
import droplet from "../assets/images/droplet.svg";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="background-elements">
        <div className="water-bg"></div>
        <img src={molecule1} alt="" className="molecule molecule-1" />
        <img src={molecule2} alt="" className="molecule molecule-2" />
        <img src={droplet} alt="" className="droplet droplet-1" />
        <img src={droplet} alt="" className="droplet droplet-2" />
      </div>
      <div className="hero-content">
        <h1>Sustainable Solutions for Clear Water & Cleaner Processes</h1>
        <p>
          Moleclear is evolving sustainable solutions by exploiting molecular
          chemistries for clear water & cleaner processes.
        </p>
      </div>
    </section>
  );
};

export default Hero;
