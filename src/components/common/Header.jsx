import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="BorderBridge Logo" />
            </Link>
          </div>

          <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          </button>

          <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
            <ul>
              <li><Link to="/how-it-works">How It Works</Link></li>
              <li className="dropdown">
                <Link to="/solutions">Solutions</Link>
                <div className="dropdown-content">
                  <Link to="/solutions/skilled-professionals">For Professionals</Link>
                  <Link to="/solutions/families">For Families</Link>
                  <Link to="/solutions/entrepreneurs">For Entrepreneurs</Link>
                </div>
              </li>
              <li><Link to="/features">Features</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>

          <div className="header-actions">
            <Link to="/login" className="btn btn-text">Log In</Link>
            <Link to="/signup" className="btn btn-primary">Get Started</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
