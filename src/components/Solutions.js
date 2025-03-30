import React from "react";
import "./Solutions.css";

const Solutions = () => {
  const solutions = [
    {
      id: "memclear",
      title: "Memclear",
      subtitle: "Advanced RO/NF Antiscalants & Cleaners",
      description:
        "With our cutting-edge formulations, you can maximize the efficiency and lifespan of your reverse osmosis and nanofiltration systems. Memclear products provide superior scale inhibition and membrane cleaning, ensuring consistent performance and reduced downtime.",
      features: [
        "Prevents scaling from calcium, silica, and other fouling agents",
        "Extends membrane life and enhances system reliability",
        "Compatible with a wide range of feedwater conditions",
      ],
      products: [
        {
          name: "Memclear CAL",
          desc: "For severe calcite scaling & moderate other foulants",
        },
        {
          name: "Memclear SLC",
          desc: "For severe colloidal silica fouling & moderate other foulants",
        },
        {
          name: "Memclear CAS",
          desc: "For severe scaling at neutral-alkaline pH & moderate other foulants",
        },
        {
          name: "Memclear CAP",
          desc: "For severe amorphous calcium phosphate, Hydroxyapatite & moderate other foulants",
        },
        {
          name: "Memclear SLR",
          desc: "For severe reactive silica, brucite fouling and moderate other foulants",
        },
        { name: "Memclear AKC", desc: "Alkaline offline cleaner" },
        { name: "Memclear MBC", desc: "Microbial offline cleaner" },
        { name: "Memclear ADC", desc: "Acidic offline cleaner" },
      ],
    },
    {
      id: "vapclear",
      title: "Vapclear",
      subtitle:
        "High-Performance Antiscalants for Evaporators & Thermal Desalination",
      description:
        "Designed for multi-effect evaporators and thermal desalination units, Vapclear solutions prevent scale buildup even under extreme conditions.",
      features: [
        "Ensures optimal heat transfer efficiency",
        "Reduces maintenance costs and improves plant performance",
        "Environmentally responsible formulations",
      ],
      products: [
        {
          name: "Vapclear CAL",
          desc: "For dominant aragonite/calcite scale control",
        },
        {
          name: "Vapclear CAS",
          desc: "For dominant gypsum, anhydrite scale control",
        },
        {
          name: "Vapclear SLR",
          desc: "For dominant silicates & brucite scale control",
        },
      ],
    },
    {
      id: "aquaclear",
      title: "Aquaclear",
      subtitle: "Multi-Purpose Scale & Corrosion Control for Cooling Systems",
      description:
        "A robust range of chemicals formulated for open recirculating cooling towers, offering unmatched scale and corrosion protection.",
      features: [
        "Enhances heat exchanger performance",
        "Prevents corrosion-related equipment failures",
        "Supports operational sustainability with lower water and energy consumption",
      ],
      products: [
        {
          name: "Aquaclear HHD",
          desc: "Multifunctional all organic scale & corrosion inhibitor for severe scaling cooling towers",
        },
        {
          name: "Aquaclear MHD",
          desc: "Multifunctional all organic scale & corrosion inhibitor for moderate scaling cooling towers",
        },
        {
          name: "Aquaclear LHD",
          desc: "Multifunctional scale & corrosion inhibitor for soft water or low scaling tendency cooling towers",
        },
      ],
      smartProducts: [
        { name: "Aquasmart HHD", desc: "Traceable version of Aquaclear HHD" },
        { name: "Aquasmart MHD", desc: "Traceable version of Aquaclear MHD" },
        { name: "Aquasmart LHD", desc: "Traceable version of Aquaclear LHD" },
      ],
    },
  ];

  return (
    <section id="solutions" className="solutions-section">
      <div className="section-content">
        <h2>Our Solutions</h2>
        <p className="section-intro">
          We offer a comprehensive range of advanced water treatment chemicals
          under three specialized product lines:
        </p>
        <div className="solutions-grid">
          {solutions.map((solution) => (
            <div key={solution.id} className="solution-card">
              <h3>{solution.title}</h3>
              <h4>{solution.subtitle}</h4>
              <p className="solution-description">{solution.description}</p>
              <ul className="features-list">
                {solution.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <div className="products-section">
                <h5>Product Range:</h5>
                <ul className="products-list">
                  {solution.products.map((product, index) => (
                    <li key={index}>
                      <strong>{product.name}</strong> – {product.desc}
                    </li>
                  ))}
                </ul>
                {solution.smartProducts && (
                  <>
                    <h5>Aquasmart Tagged Versions:</h5>
                    <ul className="products-list">
                      {solution.smartProducts.map((product, index) => (
                        <li key={index}>
                          <strong>{product.name}</strong> – {product.desc}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
