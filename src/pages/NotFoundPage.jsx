import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';
import notFoundImage from '../assets/images/not-found.jpg';

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div className="container">
        <div className="not-found-content">
          <div className="not-found-image">
            <img src={notFoundImage} alt="Page Not Found" />
          </div>
          <div className="not-found-text">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>The page you're looking for doesn't exist or has been moved.</p>
            <div className="not-found-actions">
              <Link to="/" className="btn btn-primary">Return to Homepage</Link>
              <Link to="/contact" className="btn btn-outline">Contact Support</Link>
            </div>
          </div>
        </div>
        
        <div className="helpful-links">
          <h3>You might be looking for:</h3>
          <div className="links-grid">
            <Link to="/how-it-works">How BorderBridge Works</Link>
            <Link to="/solutions">Immigration Solutions</Link>
            <Link to="/pricing">Pricing Plans</Link>
            <Link to="/resources">Resources</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
