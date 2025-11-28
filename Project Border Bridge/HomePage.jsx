import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Navigate Your Immigration Journey with Confidence</h1>
            <p>BorderBridge combines AI-powered analysis with human expertise to transform your complex immigration journey into a clear, personalized pathway to success.</p>
            <div className="hero-cta">
              <Link to="/contact" className="btn btn-primary">Start Free Assessment</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose BorderBridge?</h2>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-globe"></i>
              </div>
              <h3>Multi-Country Analysis</h3>
              <p>Analyze 427+ immigration programs across 37 countries simultaneously to find your best options.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Success Probability Scoring</h3>
              <p>Get data-driven success probability scores for each immigration pathway based on your profile.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-route"></i>
              </div>
              <h3>Personalized Roadmaps</h3>
              <p>Receive step-by-step guidance tailored to your specific situation and goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Segments Section */}
      <section className="segments-section">
        <div className="container">
          <div className="section-header">
            <h2>Solutions for Every Journey</h2>
          </div>
          <div className="segments-grid">
            <div className="segment-card">
              <div className="segment-icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h3>Skilled Professionals</h3>
              <p>Discover global career opportunities matched to your skills and experience.</p>
            </div>
            <div className="segment-card">
              <div className="segment-icon">
                <i className="fas fa-home"></i>
              </div>
              <h3>Families</h3>
              <p>Find the perfect destination for your family's education, safety, and wellbeing.</p>
            </div>
            <div className="segment-card">
              <div className="segment-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h3>Entrepreneurs</h3>
              <p>Explore business-friendly immigration pathways to scale your venture globally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Immigration Journey?</h2>
            <p>Take our free assessment to discover your personalized immigration options.</p>
            <Link to="/contact" className="btn btn-primary btn-large">Get Started Today</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

