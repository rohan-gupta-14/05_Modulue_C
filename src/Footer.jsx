import React from "react";
import '../src/css/Footer.css'
const Footer = () => {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <a href="#" className="nav-logo">
            <div className="nav-logo-icon">🌳</div>
            <div className="nav-logo-text">
              "Green Agra"
              <span>Green City Mission 2030</span>
            </div>
          </a>
          <p>"Building a sustainable, vibrant Agra for every citizen. Restoring what the city has lost - one river, one tree, one neighbourhood at a time"</p>
        </div>
        <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Our Impact</a></li>
            <li><a href='#'>Initiatives</a></li>
            <li><a href='#'>Volunteers</a></li>
        </ul>
        </div>
        <div className="footer-col">
            <h4>Initiatives</h4>
            <ul>
            <li><a href='#'>Lake Restoration </a></li>
            <li><a href='#'>Urban Forestry</a></li>
            <li><a href='#'>Green Zones</a></li>
           
        </ul>
        </div>
        <div className='footer-bottom'>
            <span>2026 Green Agra .AMC Initiative . Government of Uttarpradesh </span>
            <span>Designed with love for a greener tommorow by Rohan</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
