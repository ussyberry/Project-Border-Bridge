import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturesPage.css';
import featureImage1 from '../assets/images/multi-country-analysis.jpg';
import featureImage2 from '../assets/images/success-probability.jpg';
import featureImage3 from '../assets/images/personalized-roadmap.jpg';
import featureImage4 from '../assets/images/document-preparation.jpg';
import featureImage5 from '../assets/images/expert-support.jpg';
import featureImage6 from '../assets/images/real-time-intelligence.jpg';

const FeaturesPage = () => {
  return (
    <div className="features-page">
      {/* Hero Section */}
      <section className="page-hero-section">
        <div className="container">
          <div className="page-hero-content">
            <h1>Powerful Features for Your Immigration Journey</h1>
            <p>Discover how BorderBridge's innovative features transform the complex immigration process into a clear, manageable path.</p>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="features-overview-section">
        <div className="container">
          <div className="section-header">
            <h2>The BorderBridge Advantage</h2>
            <p>Our platform combines cutting-edge technology with immigration expertise to provide a comprehensive solution.</p>
          </div>
        </div>
      </section>

      {/* Feature 1: Multi-Country Analysis */}
      <section className="feature-detail-section">
        <div className="container">
          <div className="feature-detail">
            <div className="feature-image">
              <img src={featureImage1} alt="Multi-Country Analysis" />
            </div>
            <div className="feature-content">
              <div className="feature-icon">
                <i className="fas fa-globe"></i>
              </div>
              <h2>Multi-Country Analysis</h2>
              <p>Unlike traditional consultants who specialize in single countries or regions, BorderBridge simultaneously analyzes immigration programs across multiple countries to identify your optimal global opportunities.</p>
              
              <h3>How It Works</h3>
              <p>Our platform actively tracks 427+ immigration programs across 37 countries, updated in real-time. By analyzing your profile against all available options, we identify opportunities you might never have considered.</p>
              
              <div className="feature-stats">
                <div className="stat">
                  <h4>427+</h4>
                  <p>Immigration programs tracked</p>
                </div>
                <div className="stat">
                  <h4>37</h4>
                  <p>Countries covered</p>
                </div>
                <div className="stat">
                  <h4>73%</h4>
                  <p>Discover new pathways</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Success Probability Scoring */}
      <section className="feature-detail-section feature-alt">
        <div className="container">
          <div className="feature-detail">
            <div className="feature-content">
              <div className="feature-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h2>Success Probability Scoring</h2>
              <p>BorderBridge assigns data-driven success probability scores to each immigration pathway based on your specific profile, allowing you to prioritize applications with the highest likelihood of approval.</p>
              
              <h3>How It Works</h3>
              <p>Our proprietary algorithm analyzes over 50 personal and professional factors against historical approval data. This provides you with clear, data-backed insights into your chances of success with each program.</p>
              
              <div className="feature-stats">
                <div className="stat">
                  <h4>83%</h4>
                  <p>Prediction accuracy</p>
                </div>
                <div className="stat">
                  <h4>50+</h4>
                  <p>Factors analyzed</p>
                </div>
                <div className="stat">
                  <h4>76%</h4>
                  <p>Higher approval rate</p>
                </div>
              </div>
            </div>
            <div className="feature-image">
              <img src={featureImage2} alt="Success Probability Scoring" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Personalized Immigration Roadmap */}
      <section className="feature-detail-section">
        <div className="container">
          <div className="feature-detail">
            <div className="feature-image">
              <img src={featureImage3} alt="Personalized Immigration Roadmap" />
            </div>
            <div className="feature-content">
              <div className="feature-icon">
                <i className="fas fa-map-marked-alt"></i>
              </div>
              <h2>Personalized Immigration Roadmap</h2>
              <p>BorderBridge creates a dynamic, interactive timeline of your entire immigration journey, automatically adjusting to policy changes, your evolving qualifications, and application progress.</p>
              
              <h3>How It Works</h3>
              <p>Once you select your preferred immigration pathway, we generate a step-by-step action plan with specific tasks, document requirements, and deadlines. The roadmap updates automatically as you progress or if immigration policies change.</p>
              
              <div className="feature-stats">
                <div className="stat">
                  <h4>112</h4>
                  <p>Hours saved on research</p>
                </div>
                <div className="stat">
                  <h4>200+</h4>
                  <p>Trackable milestones</p>
                </div>
                <div className="stat">
                  <h4>91%</h4>
                  <p>Report reduced stress</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 4: Document Preparation */}
      <section className="feature-detail-section feature-alt">
        <div className="container">
          <div className="feature-detail">
            <div className="feature-content">
              <div className="feature-icon">
                <i className="fas fa-file-alt"></i>
              </div>
              <h2>AI-Powered Document Preparation</h2>
              <p>BorderBridge provides intelligent assistance with preparing and reviewing immigration documents and applications to maximize approval chances.</p>
              
              <h3>How It Works</h3>
              <p>Access AI-generated document templates pre-filled with your information, receive guidance on gathering supporting evidence, and get language optimization recommendations to align with successful applications.</p>
              
              <div className="feature-stats">
                <div className="stat">
                  <h4>65%</h4>
                  <p>Faster document preparation</p>
                </div>
                <div className="stat">
                  <h4>98%</h4>
                  <p>Document compliance rate</p>
                </div>
                <div className="stat">
                  <h4>100+</h4>
                  <p>Document templates</p>
                </div>
              </div>
            </div>
            <div className="feature-image">
              <img src={featureImage4} alt="Document Preparation" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 5: Expert Support */}
      <section className="feature-detail-section">
        <div className="container">
          <div className="feature-detail">
            <div className="feature-image">
              <img src={featureImage5} alt="Expert Support" />
            </div>
            <div className="feature-content">
              <div className="feature-icon">
                <i className="fas fa-users"></i>
              </div>
              <h2>Strategic Human Expert Support</h2>
              <p>BorderBridge combines AI efficiency with strategic human expertise, offering automated guidance for standard processes and specialized human support for complex situations.</p>
              
              <h3>How It Works</h3>
              <p>Our AI identifies complex decision points or unusual circumstances in your case, allowing you to schedule focused consultation sessions with specialists in your target country when you need them most.</p>
              
              <div className="feature-stats">
                <div className="stat">
                  <h4>75+</h4>
                  <p>Years of combined experience</p>
                </div>
                <div className="stat">
                  <h4>87%</h4>
                  <p>Queries handled by AI</p>
                </div>
                <div className="stat">
                  <h4>68%</h4>
                  <p>Savings on consultation fees</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 6: Real-Time Intelligence */}
      <section className="feature-detail-section feature-alt">
        <div className="container">
          <div className="feature-detail">
            <div className="feature-content">
              <div className="feature-icon">
                <i className="fas fa-bell"></i>
              </div>
              <h2>Real-Time Immigration Intelligence</h2>
              <p>BorderBridge continuously monitors global immigration policies and trends relevant to your specific case, with instant alerts about changes that could impact your journey.</p>
              
              <h3>How It Works</h3>
              <p>Our system tracks policy changes across all relevant immigration authorities, sending you immediate notifications about changes affecting your chosen pathway and automatically adjusting your immigration roadmap.</p>
              
              <div className="feature-stats">
                <div className="stat">
                  <h4>24/7</h4>
                  <p>Policy monitoring</p>
                </div>
                <div className="stat">
                  <h4>100%</h4>
                  <p>Policy change coverage</p>
                </div>
                <div className="stat">
                  <h4>Real-time</h4>
                  <p>Roadmap updates</p>
                </div>
              </div>
            </div>
            <div className="feature-image">
              <img src={featureImage6} alt="Real-Time Intelligence" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="feature-comparison-section">
        <div className="container">
          <div className="section-header">
            <h2>Feature Comparison</h2>
            <p>See how BorderBridge's features compare across our subscription plans.</p>
          </div>
          
          <div className="comparison-table-container">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Pathfinder<br /><span className="price">$9.99/mo</span></th>
                  <th>Navigator<br /><span className="price">$29.99/mo</span></th>
                  <th>Voyager<br /><span className="price">$49.99/mo</span></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Multi-Country Assessment</td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-check"></i></td>
                </tr>
                <tr>
                  <td>Success Probability Scoring</td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-check"></i></td>
                </tr>
                <tr>
                  <td>Basic Immigration Roadmap</td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-check"></i></td>
                </tr>
                <tr>
                  <td>Document Checklists</td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-check"></i></td>
                </tr>
                <tr>
                  <td>Community Forum Access</td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-check"></i></td>
                </tr>
                <tr>
                  <td>Advanced Interactive Roadmap</td>
                  <td><i className="fas fa-times"></i></td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-check"></i></td>
                </tr>
                <tr>
                  <td>AI Document Review</td>
                  <td><i className="fas fa-times"></i></td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-check"></i></td>
                </tr>
                <tr>
                  <td>Priority Policy Alerts</td>
                  <td><i className="fas fa-times"></i></td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-check"></i></td>
                </tr>
                <tr>
                  <td>Email Support</td>
                  <td><i className="fas fa-times"></i></td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-check"></i></td>
                </tr>
                <tr>
                  <td>Expert Consultation Sessions</td>
                  <td><i className="fas fa-times"></i></td>
                  <td><i className="fas fa-times"></i></td>
                  <td><i className="fas fa-check"></i></td>
                </tr>
                <tr>
                  <td>Human Expert Application Review</td>
                  <td><i className="fas fa-times"></i></td>
                  <td><i className="fas fa-times"></i></td>
                  <td><i className="fas fa-check"></i></td>
                </tr>
                <tr>
                  <td>Emergency Support Line</td>
                  <td><i className="fas fa-times"></i></td>
                  <td><i className="fas fa-times"></i></td>
                  <td><i className="fas fa-check"></i></td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="comparison-cta">
            <Link to="/pricing" className="btn btn-primary">View Full Pricing Details</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Experience BorderBridge for Yourself</h2>
            <p>Start your free assessment today and discover how our features can transform your immigration journey.</p>
            <Link to="/signup" className="btn btn-primary btn-large">Start Free Assessment</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
