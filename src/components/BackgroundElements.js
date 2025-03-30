import React from "react";
import "./BackgroundElements.css";

export const WaterBackground = ({ className }) => (
  <div className={`background-elements water-theme ${className}`}>
    <div className="droplet droplet-1"></div>
    <div className="droplet droplet-2"></div>
    <div className="droplet droplet-3"></div>
    <div className="droplet droplet-4"></div>
    <div className="droplet droplet-5"></div>
  </div>
);

export const MoleculeBackground = ({ className, color = "green" }) => {
  const colors = {
    green: {
      primary: "#2ecc71",
      secondary: "#27ae60",
    },
    blue: {
      primary: "#3498db",
      secondary: "#2980b9",
    },
  };

  return (
    <div className={`background-elements molecule-theme ${className}`}>
      <svg className="molecule molecule-1" viewBox="0 0 400 400" fill="none">
        <circle
          cx="200"
          cy="200"
          r="60"
          fill={colors[color].primary}
          fillOpacity="0.1"
        />
        <circle
          cx="320"
          cy="200"
          r="25"
          fill={colors[color].secondary}
          fillOpacity="0.1"
        />
        <circle
          cx="80"
          cy="200"
          r="25"
          fill={colors[color].secondary}
          fillOpacity="0.1"
        />
        <line
          x1="200"
          y1="140"
          x2="200"
          y2="260"
          stroke={colors[color].primary}
          strokeWidth="2"
        />
      </svg>
      <svg className="molecule molecule-2" viewBox="0 0 300 300" fill="none">
        <circle
          cx="150"
          cy="150"
          r="50"
          fill={colors[color].secondary}
          fillOpacity="0.1"
        />
        <path
          d="M50 150C50 94.7715 94.7715 50 150 50C205.228 50 250 94.7715 250 150"
          stroke={colors[color].primary}
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};
