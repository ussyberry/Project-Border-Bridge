import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>BorderBridge</h3>
            <p>AI-powered immigration guidance for your global journey.</p>
          </div>
          <div className="footer-links">
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 BorderBridge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

