import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    });
    setShowForm(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-content">
        <h2>Let's Solve Your Water Treatment Challenges</h2>
        <p className="section-intro">
          Looking to enhance system performance while reducing environmental
          impact? Contact us today for a consultation or submit your water
          treatment challenges, and let our experts recommend the best solution
          for your needs.
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-cards-container">
              <div className="info-card">
                <h3>Visit Us</h3>
                <p>123 Industrial Avenue</p>
                <p>Tech Park, Suite 200</p>
                <p>Innovation City, 12345</p>
              </div>

              <div className="info-card">
                <h3>Contact Info</h3>
                <p>Email: info@moleclear.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Fax: +1 (555) 123-4568</p>
              </div>
            </div>

            <button
              className="consultation-btn"
              onClick={() => setShowForm(true)}
            >
              Schedule a Consultation
            </button>
          </div>

          {showForm && (
            <div className="form-overlay">
              <div className="consultation-form">
                <button
                  className="close-btn"
                  onClick={() => setShowForm(false)}
                >
                  ×
                </button>
                <h3>Schedule a Consultation</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      placeholder="Tell us about your needs"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="submit-btn">
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
