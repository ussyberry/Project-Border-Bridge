import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="BorderBridge Logo" />
            <p>Transforming the complex immigration journey into a clear, personalized pathway to success.</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>Solutions</h4>
              <ul>
                <li><Link to="/solutions/skilled-professionals">For Professionals</Link></li>
                <li><Link to="/solutions/families">For Families</Link></li>
                <li><Link to="/solutions/entrepreneurs">For Entrepreneurs</Link></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/about#mission">Our Mission</Link></li>
                <li><Link to="/about#team">Team</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Resources</h4>
              <ul>
                <li><Link to="/resources">Blog</Link></li>
                <li><Link to="/resources/guides">Immigration Guides</Link></li>
                <li><Link to="/resources/success-stories">Success Stories</Link></li>
                <li><Link to="/resources/tools">Tools & Calculators</Link></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Legal</h4>
              <ul>
                <li><Link to="/terms">Terms of Service</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/cookies">Cookie Policy</Link></li>
                <li><Link to="/accessibility">Accessibility</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          
          <p className="copyright">© {new Date().getFullYear()} BorderBridge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
