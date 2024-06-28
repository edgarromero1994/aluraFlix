import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-col">
        <h3>Top Courses</h3>
        <li>Data Science</li>
        <li>Frontend Development</li>
        <li>Backend Development</li>
        <li>Innovation</li>
        <li>Management</li>
      </div>

      <div className="footer-col">
        <h3>Top Courses</h3>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node</li>
      </div>

      <div className="footer-col">
        <h3>Newsletter</h3>
        <p>You can trust us. We only send promo offers.</p>
        <div className="subscribe">
          <input type="text" placeholder="Your Email Address" />
          <a href="#" className="yellow">SUBSCRIBE</a>
        </div>
      </div>

      <div className="cpyright">
        <p>Copyright {currentYear} esta página fue hecha por Edgardev</p>
        <div className="pro-links">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin-in"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;