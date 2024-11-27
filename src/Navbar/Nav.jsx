import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav-top">
      <div className="nav-info">
        <h4>
          <i className="fa-solid fa-location-dot"></i> Bengaluru, Karnataka,
          India
        </h4>
        <h4>
          <i className="fa-regular fa-envelope"></i> support@zidio.in
        </h4>
      </div>
      <div className="nav-icons">
  <h4>
    <i className="fa-regular fa-clock"></i> 9.00 am - 5.30 pm
  </h4>
  <h4 className="nav-icons">
    <a href="https://www.facebook.com/profile.php?id=61556709391417" target="_self" rel="noopener noreferrer">
      <i className="fa-brands fa-facebook"></i>
    </a>
    <a href="https://x.com/zidioDev" target="_self" rel="noopener noreferrer">
      <i className="fa-brands fa-twitter"></i>
    </a>
    <a href="https://www.linkedin.com/company/zidio-development/posts/?feedView=all" target="_self" rel="noopener noreferrer">
      <i className="fa-brands fa-linkedin"></i>
    </a>
    <a href="https://www.youtube.com/channel/UCvxJRddqZowVyN6AXjylnMg" target="_self" rel="noopener noreferrer">
      <i className="fa-brands fa-youtube"></i>
    </a>
  </h4>
</div>

    </div>
  );
};

export default Nav;
