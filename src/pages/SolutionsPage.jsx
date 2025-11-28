import React from 'react';
import { Link } from 'react-router-dom';
import './SolutionsPage.css';
import professionalImage from '../assets/images/skilled-professionals.jpg';
import familyImage from '../assets/images/families.jpg';
import entrepreneurImage from '../assets/images/entrepreneurs.jpg';

const SolutionsPage = () => {
  return (
    <div className="solutions-page">
      {/* Hero Section */}
      <section className="page-hero-section">
        <div className="container">
          <div className="page-hero-content">
            <h1>Immigration Solutions for Every Journey</h1>
            <p>Discover personalized immigration pathways tailored to your unique situation and goals.</p>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="solutions-overview-section">
        <div className="container">
          <div className="section-header">
            <h2>Find Your Path</h2>
            <p>BorderBridge provides specialized guidance for different immigration needs.</p>
          </div>
          
          <div className="solutions-grid">
            <div className="solution-card">
              <div className="solution-image">
                <img src={professionalImage} alt="Skilled Professionals" />
              </div>
              <div className="solution-content">
                <h3>For Skilled Professionals</h3>
                <p>Discover global career opportunities matched to your skills and experience.</p>
                <ul className="solution-features">
                  <li>Skills demand analysis by country</li>
                  <li>Career progression pathways</li>
                  <li>Credential recognition guidance</li>
                  <li>Professional networking opportunities</li>
                </ul>
                <Link to="/solutions/skilled-professionals" className="btn btn-primary">Learn More</Link>
              </div>
            </div>
            
            <div className="solution-card">
              <div className="solution-image">
                <img src={familyImage} alt="Families" />
              </div>
              <div className="solution-content">
                <h3>For Families</h3>
                <p>Find the perfect destination for your family's education, safety, and wellbeing.</p>
                <ul className="solution-features">
                  <li>Education system comparisons</li>
                  <li>Family integration resources</li>
                  <li>Healthcare access information</li>
                  <li>Community safety metrics</li>
                </ul>
                <Link to="/solutions/families" className="btn btn-primary">Learn More</Link>
              </div>
            </div>
            
            <div className="solution-card">
              <div className="solution-image">
                <img src={entrepreneurImage} alt="Entrepreneurs" />
              </div>
              <div className="solution-content">
                <h3>For Entrepreneurs</h3>
                <p>Explore business-friendly immigration pathways to scale your venture globally.</p>
                <ul className="solution-features">
                  <li>Startup ecosystem rankings</li>
                  <li>Business regulation comparisons</li>
                  <li>Entrepreneur visa fast-tracks</li>
                  <li>Funding environment analysis</li>
                </ul>
                <Link to="/solutions/entrepreneurs" className="btn btn-primary">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Features Section */}
      <section className="common-features-section">
        <div className="container">
          <div className="section-header">
            <h2>Core Features for All Users</h2>
            <p>Every BorderBridge solution includes these powerful capabilities.</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-globe"></i>
              </div>
              <h3>Multi-Country Analysis</h3>
              <p>Compare 427+ immigration programs across 37 countries simultaneously.</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Success Probability Scoring</h3>
              <p>Get data-driven success probability scores for each pathway.</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-map-marked-alt"></i>
              </div>
              <h3>Personalized Roadmap</h3>
              <p>Follow a dynamic, interactive timeline of your immigration journey.</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-file-alt"></i>
              </div>
              <h3>Document Preparation</h3>
              <p>Access AI-generated document templates and guidance.</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Expert Support</h3>
              <p>Get strategic advice from immigration specialists at critical points.</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-bell"></i>
              </div>
              <h3>Real-Time Intelligence</h3>
              <p>Stay updated with alerts about policy changes that affect you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Find Your Immigration Path?</h2>
            <p>Take our free assessment to discover your personalized immigration options.</p>
            <Link to="/signup" className="btn btn-primary btn-large">Start Free Assessment</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;
