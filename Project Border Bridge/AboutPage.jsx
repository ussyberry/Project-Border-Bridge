import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="page-hero-section">
        <div className="container">
          <div className="page-hero-content">
            <h1>About BorderBridge</h1>
            <p>Transforming the complex immigration journey into a clear, personalized pathway to success.</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>BorderBridge was founded on the belief that immigration should be accessible, transparent, and successful for everyone. We combine cutting-edge AI technology with human expertise to provide personalized immigration guidance that empowers people to make informed decisions about their global future.</p>
            
            <h3>What We Do</h3>
            <p>We analyze 427+ immigration programs across 37 countries to provide you with:</p>
            <ul>
              <li>Personalized immigration pathway recommendations</li>
              <li>Data-driven success probability scores</li>
              <li>Step-by-step guidance through the application process</li>
              <li>Expert support when you need it most</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Values</h2>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Innovation</h3>
              <p>We leverage cutting-edge AI technology to make immigration guidance more accurate and accessible.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Empathy</h3>
              <p>We understand that immigration is a deeply personal journey, and we're here to support you every step of the way.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Transparency</h3>
              <p>We provide clear, honest guidance with no hidden fees or misleading promises.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

