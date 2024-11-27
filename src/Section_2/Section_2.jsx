import React from 'react';
import "./Section_2.css";

const Section_2 = () => {
  return (
    <div className="section-container">
      <div className="feature-card">
        <img src="https://www.zidio.in/assets/images/home-2/feature-icon1.png" alt="Experience Icon" />
        <h3>3+ Year Experience</h3>
        <p>Over 3 years of expertise delivering unparalleled solutions and insights for your success.</p>
        <p><span><i class="fa-solid fa-minus"></i></span><a href="#">Read More</a></p>
      </div>

      <div className="feature-card">
        <img src="https://www.zidio.in/assets/images/home-2/feature-icon2.png" alt="Dedicated Members Icon" />
        <h3>Dedicated Members</h3>
        <p>Passionate team members dedicated to exceeding expectations and achieving mutual success.</p>
        <p><span><i class="fa-solid fa-minus"></i></span><a href="#">Read More</a></p>
      </div>

      <div className="feature-card">
        <img src="https://www.zidio.in/assets/images/home-2/feature-icon3.png" alt="Support Icon" />
        <h3>Valuable Supports</h3>
        <p>Tailored support and guidance ensuring reliability and innovation every step of the way.</p>
        <p><span><i class="fa-solid fa-minus"></i></span><a href="#">Read More</a></p>
      </div>
    </div>
  );
}

export default Section_2;
