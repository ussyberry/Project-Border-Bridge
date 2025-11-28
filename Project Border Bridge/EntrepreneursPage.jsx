import React from 'react';
import { Link } from 'react-router-dom';
import './EntrepreneursPage.css';
import heroImage from '../../assets/images/entrepreneurs-hero.jpg';
import pathwayImage from '../../assets/images/entrepreneur-pathway.jpg';
import successStoryImage from '../../assets/images/entrepreneur-success-story.jpg';

// Components
import TestimonialCard from '../../components/common/TestimonialCard';

const EntrepreneursPage = () => {
  // Sample testimonial data
  const testimonial = {
    id: 1,
    name: 'Aisha Okafor',
    role: 'Fintech Entrepreneur',
    image: '/testimonials/aisha.jpg',
    quote: 'The entrepreneur visa comparison tool saved me countless hours of research. BorderBridge identified three startup-friendly countries I hadn\'t even considered, with better funding opportunities for my business.',
    stars: 5
  };

  return (
    <div className="entrepreneurs-page">
      {/* Hero Section */}
      <section className="page-hero-section">
        <div className="container">
          <div className="page-hero-content">
            <h1>Immigration Solutions for Entrepreneurs</h1>
            <p>Explore business-friendly immigration pathways to scale your venture globally.</p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-section">
        <div className="container">
          <div className="overview-content">
            <div className="overview-image">
              <img src={heroImage} alt="Entrepreneur Immigration" />
            </div>
            <div className="overview-text">
              <h2>Expand Your Business Globally Through Strategic Immigration</h2>
              <p>As an entrepreneur, your business vision isn't limited by borders. BorderBridge helps you identify the most advantageous global locations to scale your venture, with immigration pathways designed specifically for business founders and investors.</p>
              
              <p>Our AI-powered platform analyzes entrepreneur-focused immigration programs across 37 countries, comparing startup ecosystems, business regulations, funding environments, and market opportunities to find your optimal expansion destinations.</p>
              
              <div className="overview-stats">
                <div className="stat">
                  <h3>180+</h3>
                  <p>Entrepreneur visa programs analyzed</p>
                </div>
                <div className="stat">
                  <h3>68%</h3>
                  <p>Secure funding in their new location</p>
                </div>
                <div className="stat">
                  <h3>3.2x</h3>
                  <p>Average business growth within 2 years</p>
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
            <h2>Key Benefits for Entrepreneurs</h2>
          </div>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Startup Ecosystem Rankings</h3>
              <p>Compare global startup hubs based on funding availability, talent pools, and industry specializations.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-balance-scale"></i>
              </div>
              <h3>Business Regulation Comparisons</h3>
              <p>Understand regulatory environments, tax implications, and business formation requirements across countries.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h3>Entrepreneur Visa Fast-Tracks</h3>
              <p>Discover expedited immigration pathways specifically designed for business founders and investors.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-coins"></i>
              </div>
              <h3>Funding Environment Analysis</h3>
              <p>Evaluate venture capital availability, government grants, and investor networks in potential destinations.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>Business Partner Matching</h3>
              <p>Connect with potential business partners, mentors, and advisors in your target countries.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-file-signature"></i>
              </div>
              <h3>Business Plan Optimization</h3>
              <p>Receive guidance on adapting your business plan to meet immigration requirements and local market needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="container">
          <div className="section-header">
            <h2>How It Works for Entrepreneurs</h2>
          </div>
          
          <div className="how-it-works-content">
            <div className="how-it-works-image">
              <img src={pathwayImage} alt="Entrepreneur Immigration Pathway" />
            </div>
            <div className="how-it-works-steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Complete Your Business Profile</h3>
                  <p>Share details about your business, industry, growth stage, funding history, and global expansion goals.</p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Define Your Business Priorities</h3>
                  <p>Indicate what matters most for your venture: funding access, talent pool, market size, or other factors.</p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Discover Business-Friendly Destinations</h3>
                  <p>Receive personalized recommendations for countries with optimal conditions for your specific business.</p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Follow Your Entrepreneur Immigration Roadmap</h3>
                  <p>Get step-by-step guidance through the application process, with business plan development support.</p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h3>Prepare for Business Launch</h3>
                  <p>Access resources for business registration, banking setup, hiring, and local market entry.</p>
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
              <h3>Global Expansion: Aisha's Fintech Journey</h3>
              <p>Aisha Okafor had built a promising fintech startup in Nigeria but was looking to scale globally. She was considering the UK as her expansion destination but wasn't sure if it offered the best environment for her specific business model.</p>
              
              <p>Using BorderBridge, she discovered that Estonia, Singapore, and Canada offered more favorable conditions for her business, with better funding opportunities and regulatory frameworks for fintech companies. The platform provided detailed comparisons of startup ecosystems, visa requirements, and market potential.</p>
              
              <p>Today, Aisha has successfully expanded her business to Estonia, accessing the EU market while benefiting from the country's digital-friendly policies and vibrant startup ecosystem.</p>
              
              <div className="testimonial-container">
                <TestimonialCard testimonial={testimonial} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Entrepreneur Categories Section */}
      <section className="entrepreneur-categories-section">
        <div className="container">
          <div className="section-header">
            <h2>Solutions for Every Entrepreneur</h2>
            <p>BorderBridge provides specialized guidance for entrepreneurs at different stages and with different goals.</p>
          </div>
          
          <div className="categories-grid">
            <div className="category-card">
              <div className="category-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h3>Startup Founders</h3>
              <p>Early-stage entrepreneurs looking to build in innovation-friendly ecosystems.</p>
              <Link to="/solutions/entrepreneurs/startup" className="btn btn-outline">Learn More</Link>
            </div>
            
            <div className="category-card">
              <div className="category-icon">
                <i className="fas fa-chart-pie"></i>
              </div>
              <h3>Business Investors</h3>
              <p>Established entrepreneurs seeking investment opportunities in new markets.</p>
              <Link to="/solutions/entrepreneurs/investor" className="btn btn-outline">Learn More</Link>
            </div>
            
            <div className="category-card">
              <div className="category-icon">
                <i className="fas fa-laptop"></i>
              </div>
              <h3>Digital Nomads</h3>
              <p>Location-independent entrepreneurs looking for flexible visa options.</p>
              <Link to="/solutions/entrepreneurs/digital-nomad" className="btn btn-outline">Learn More</Link>
            </div>
            
            <div className="category-card">
              <div className="category-icon">
                <i className="fas fa-globe"></i>
              </div>
              <h3>Global Expansion</h3>
              <p>Established businesses looking to enter new international markets.</p>
              <Link to="/solutions/entrepreneurs/expansion" className="btn btn-outline">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="resources-section">
        <div className="container">
          <div className="section-header">
            <h2>Resources for Entrepreneurs</h2>
          </div>
          
          <div className="resources-grid">
            <div className="resource-card">
              <div className="resource-icon">
                <i className="fas fa-file-alt"></i>
              </div>
              <h3>Global Startup Ecosystem Report</h3>
              <p>Compare innovation hubs based on funding, talent, and industry strengths.</p>
              <Link to="/resources/guides/startup-ecosystems" className="resource-link">Download Report</Link>
            </div>
            
            <div className="resource-card">
              <div className="resource-icon">
                <i className="fas fa-calculator"></i>
              </div>
              <h3>Business Expansion Calculator</h3>
              <p>Estimate costs and ROI for expanding your business to different countries.</p>
              <Link to="/resources/tools/expansion-calculator" className="resource-link">Use Calculator</Link>
            </div>
            
            <div className="resource-card">
              <div className="resource-icon">
                <i className="fas fa-book"></i>
              </div>
              <h3>Entrepreneur Visa Guide</h3>
              <p>Detailed comparison of visa programs designed for business founders and investors.</p>
              <Link to="/resources/guides/entrepreneur-visas" className="resource-link">Read Guide</Link>
            </div>
            
            <div className="resource-card">
              <div className="resource-icon">
                <i className="fas fa-comments"></i>
              </div>
              <h3>Entrepreneur Network</h3>
              <p>Connect with other business founders navigating global expansion.</p>
              <Link to="/community/entrepreneurs" className="resource-link">Join Network</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Take Your Business Global?</h2>
            <p>Take our free assessment to discover the best destinations to scale your venture.</p>
            <Link to="/signup" className="btn btn-primary btn-large">Start Free Business Assessment</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EntrepreneursPage;
