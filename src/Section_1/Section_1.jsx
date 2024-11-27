import React from 'react'
import "./Section_1.css"
const Section_1 = () => {
  return (
    <div className="hero-section">
    <div className="hero-content">
      <h4 className="hero-subtitle">SOFTWARE DEVELOPMENT & CONSULTANCY</h4>
      <h1 className="hero-title">BUSINESS INNOVATION THROUGH TECHNOLOGY</h1>
      <h4 className="hero-description">
        Leading Business Evolution with Tailored and Innovative Software Solutions for Sustainable Growth
      </h4>
      <div className="hero-buttons">
        <a href="/contact" className="btn-primary">
          Let's Talk <i className="fa-solid fa-arrow-right"></i>
        </a>
        <a href="/about" className="btn-secondary">
          Read More <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>
    <div className="hero-images">
      <img src="https://www.zidio.in/assets/images/home-2/hero-shape.png" alt="Decorative Shape" className="hero-shape" />
      <img src="https://www.zidio.in/assets/images/home-2/hero-thumb.png" alt="Hero Thumbnail" className="hero-thumb" />
    </div>
  </div>
  
  )
}

export default Section_1
