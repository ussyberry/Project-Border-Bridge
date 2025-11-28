import React from 'react';
import { Link } from 'react-router-dom';
import './SkilledProfessionalsPage.css';
import heroImage from '../../assets/images/skilled-professionals-hero.jpg';
import pathwayImage from '../../assets/images/skilled-pathway.jpg';
import successStoryImage from '../../assets/images/skilled-success-story.jpg';

// Components
import TestimonialCard from '../../components/common/TestimonialCard';

const SkilledProfessionalsPage = () => {
  // Sample testimonial data
  const testimonial = {
    id: 1,
    name: 'Priya Sharma',
    role: 'Software Developer',
    image: '/testimonials/priya.jpg',
    quote: 'BorderBridge helped me discover a specialized tech visa in New Zealand with an 89% approval rate after being rejected for Canadian Express Entry. The personalized roadmap made the entire process manageable.',
    stars: 5
  };

  return (
    <div className="skilled-professionals-page">
      {/* Hero Section */}
      <section className="page-hero-section">
        <div className="container">
          <div className="page-hero-content">
            <h1>Immigration Solutions for Skilled Professionals</h1>
            <p>Discover global career opportunities matched to your skills and experience.</p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-section">
        <div className="container">
          <div className="overview-content">
            <div className="overview-image">
              <img src={heroImage} alt="Skilled Professional Immigration" />
            </div>
            <div className="overview-text">
              <h2>Navigate Global Career Opportunities with Data-Driven Confidence</h2>
              <p>As a skilled professional, you have valuable expertise that's in demand worldwide. BorderBridge helps you identify and access the global opportunities that best match your skills, experience, and career goals.</p>
              
              <p>Our AI-powered platform analyzes your professional profile against immigration programs in 37 countries to find your optimal pathways, with personalized success probability scores and step-by-step guidance.</p>
              
              <div className="overview-stats">
                <div className="stat">
                  <h3>427+</h3>
                  <p>Skilled immigration programs analyzed</p>
                </div>
                <div className="stat">
                  <h3>73%</h3>
                  <p>Discover new pathways they weren't aware of</p>
                </div>
                <div className="stat">
                  <h3>76%</h3>
                  <p>Higher approval rate than global average</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="key-benefits-section">
        <div className="container">
          <div className="section-header">
            <h2>Key Benefits for Skilled Professionals</h2>
          </div>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Skills Demand Analysis</h3>
              <p>Discover where your specific skills are most in demand and valued, with data on salary ranges and job market trends.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-route"></i>
              </div>
              <h3>Career Progression Pathways</h3>
              <p>Understand how different immigration choices could impact your long-term career trajectory and advancement opportunities.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-certificate"></i>
              </div>
              <h3>Credential Recognition Guidance</h3>
              <p>Navigate the process of getting your qualifications recognized in different countries with country-specific guidance.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-network-wired"></i>
              </div>
              <h3>Professional Networking</h3>
              <p>Connect with industry peers in your target countries through our community platform and partner organizations.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-file-signature"></i>
              </div>
              <h3>Specialized Document Preparation</h3>
              <p>Access templates and guidance for profession-specific documents like credential assessments and reference letters.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-comments-dollar"></i>
              </div>
              <h3>Salary & Cost Comparison</h3>
              <p>Compare potential earnings against cost of living across different locations to maximize your financial outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="container">
          <div className="section-header">
            <h2>How It Works for Skilled Professionals</h2>
          </div>
          
          <div className="how-it-works-content">
            <div className="how-it-works-image">
              <img src={pathwayImage} alt="Skilled Professional Pathway" />
            </div>
            <div className="how-it-works-steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Complete Your Professional Profile</h3>
                  <p>Share details about your education, work experience, skills, certifications, and language proficiency.</p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Discover Your Optimal Pathways</h3>
                  <p>Receive ranked immigration options based on your profile, with success probability scores and processing times.</p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Explore Career Opportunities</h3>
                  <p>Review job market data, salary information, and professional growth potential in your recommended countries.</p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Follow Your Personalized Roadmap</h3>
                  <p>Get step-by-step guidance through credential assessment, document preparation, and application submission.</p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h3>Prepare for Your New Role</h3>
                  <p>Access resources for professional integration, networking, and career success in your new country.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="success-story-section">
        <div className="container">
          <div className="section-header">
            <h2>Success Story</h2>
          </div>
          
          <div className="success-story-content">
            <div className="success-story-image">
              <img src={successStoryImage} alt="Success Story" />
            </div>
            <div className="success-story-text">
              <h3>From Rejection to Success: Priya's Journey</h3>
              <p>After being rejected for Canadian Express Entry despite her strong tech background, Priya was discouraged and uncertain about her global career options.</p>
              
              <p>Using BorderBridge, she discovered a specialized tech visa in New Zealand that perfectly matched her skills profile, with an 89% approval probability. The platform guided her through the entire process, from credential verification to job market research.</p>
              
              <p>Today, Priya works as a senior developer at a growing tech company in Auckland, with a higher salary and better work-life balance than she had previously.</p>
              
              <div className="testimonial-container">
                <TestimonialCard testimonial={testimonial} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Categories Section */}
      <section className="professional-categories-section">
        <div className="container">
          <div className="section-header">
            <h2>Solutions for Every Professional</h2>
            <p>BorderBridge provides specialized guidance for professionals across various fields.</p>
          </div>
          
          <div className="categories-grid">
            <div className="category-card">
              <div className="category-icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h3>Tech Professionals</h3>
              <p>Software developers, data scientists, cybersecurity experts, and IT specialists.</p>
              <Link to="/solutions/skilled-professionals/tech" className="btn btn-outline">Learn More</Link>
            </div>
            
            <div className="category-card">
              <div className="category-icon">
                <i className="fas fa-heartbeat"></i>
              </div>
              <h3>Healthcare Professionals</h3>
              <p>Doctors, nurses, pharmacists, therapists, and medical researchers.</p>
              <Link to="/solutions/skilled-professionals/healthcare" className="btn btn-outline">Learn More</Link>
            </div>
            
            <div className="category-card">
              <div className="category-icon">
                <i className="fas fa-hard-hat"></i>
              </div>
              <h3>Engineers</h3>
              <p>Civil, mechanical, electrical, chemical, and other engineering specialties.</p>
              <Link to="/solutions/skilled-professionals/engineering" className="btn btn-outline">Learn More</Link>
            </div>
            
            <div className="category-card">
              <div className="category-icon">
                <i className="fas fa-chart-pie"></i>
              </div>
              <h3>Business Professionals</h3>
              <p>Managers, consultants, financial analysts, and marketing specialists.</p>
              <Link to="/solutions/skilled-professionals/business" className="btn btn-outline">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="resources-section">
        <div className="container">
          <div className="section-header">
            <h2>Resources for Skilled Professionals</h2>
          </div>
          
          <div className="resources-grid">
            <div className="resource-card">
              <div className="resource-icon">
                <i className="fas fa-file-alt"></i>
              </div>
              <h3>Global Skills Recognition Guide</h3>
              <p>Understand how your qualifications transfer across different countries and systems.</p>
              <Link to="/resources/guides/skills-recognition" className="resource-link">Download Guide</Link>
            </div>
            
            <div className="resource-card">
              <div className="resource-icon">
                <i className="fas fa-calculator"></i>
              </div>
              <h3>Salary & Cost of Living Calculator</h3>
              <p>Compare potential earnings against living costs in different locations.</p>
              <Link to="/resources/tools/salary-calculator" className="resource-link">Use Calculator</Link>
            </div>
            
            <div className="resource-card">
              <div className="resource-icon">
                <i className="fas fa-globe"></i>
              </div>
              <h3>Global Job Market Trends</h3>
              <p>Stay updated on international demand for your skills and expertise.</p>
              <Link to="/resources/blog/job-market-trends" className="resource-link">Read Report</Link>
            </div>
            
            <div className="resource-card">
              <div className="resource-icon">
                <i className="fas fa-comments"></i>
              </div>
              <h3>Professional Community</h3>
              <p>Connect with other skilled professionals navigating global opportunities.</p>
              <Link to="/community" className="resource-link">Join Community</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Discover Your Global Career Opportunities?</h2>
            <p>Take our free assessment to find your optimal immigration pathways.</p>
            <Link to="/signup" className="btn btn-primary btn-large">Start Free Assessment</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkilledProfessionalsPage;
