import React from "react";
import "./Section_3.css";

const Section_3 = () => {
  return (
    <div className="section-3-container">
      <div className="section-3-experience">
        <div className="experience-info">
          <h1>3+</h1>
          <h2>___</h2>
          <h3>Years Of Experience</h3>
        </div>
        <div className="experience-image">
          <img
            src="https://www.zidio.in/assets/images/home-2/about-thumb.png"
            alt="Experience Thumbnail"
          />
        </div>
        <div className="shape-image">
          <img
            src="https://www.zidio.in/assets/images/home-2/about-shape.png"
            alt="Background Shape"
          />
        </div>
      </div>

      <div className="section-3-content">
        <h3>Software Development & Services</h3>
        <h2>Your Reliable Partner for IT Services Dedicated to Your Success</h2>
        <p>
          At Zidio, we're your trusted IT services partner, ensuring your
          success with reliable solutions tailored to your business needs. Count
          on us for robust software development, comprehensive IT support, and
          cutting-edge technology solutions that empower your business to
          thrive.
        </p>
        <div className="service-features">
          <div className="service-card">
            <img
              src="https://www.zidio.in/assets/images/home-2/about-icon1.png"
              alt="Cost Effective Solutions"
            />
            <h4>Cost Effective Solutions</h4>
          </div>
          <div className="service-card">
            <img
              src="https://www.zidio.in/assets/images/home-2/about-icon2.png"
              alt="Dedicated Team"
            />
            <h4>Expert & Dedicated Team Members</h4>
          </div>
          <div className="service-card">
            <img
              src="https://www.zidio.in/assets/images/home-2/about-icon3.png"
              alt="24/7 Support"
            />
            <h4>24/7 Free Technical Support</h4>
          </div>
          <div className="service-card">
            <img
              src="https://www.zidio.in/assets/images/home-2/about-icon4.png"
              alt="Customer Satisfaction"
            />
            <h4>100% Customer Satisfaction</h4>
          </div>
        </div>
        <div className="about-more">
          <a href="#">
            <span>
              About More <i className="fa-solid fa-circle-right"></i>{" "}
            </span>
          </a>
          <img
            src="https://www.zidio.in/assets/images/home-2/about-shape2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Section_3;
