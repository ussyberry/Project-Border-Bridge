import React from 'react';
import { Link } from 'react-router-dom';
import './FamiliesPage.css';
import heroImage from '../../assets/images/families-hero.jpg';
import pathwayImage from '../../assets/images/family-pathway.jpg';
import successStoryImage from '../../assets/images/family-success-story.jpg';

// Components
import TestimonialCard from '../../components/common/TestimonialCard';

const FamiliesPage = () => {
  // Sample testimonial data
  const testimonial = {
    id: 1,
    name: 'Miguel Rodriguez',
    role: 'Regional Sales Manager',
    image: '/testimonials/miguel.jpg',
    quote: 'As a family of four, we were overwhelmed by immigration options. BorderBridge compared education systems and family policies across countries, helping us find the perfect destination for our children\'s future.',
    stars: 5
  };

  return (
    <div className="families-page">
      {/* Hero Section */}
      <section className="page-hero-section">
        <div className="container">
          <div className="page-hero-content">
            <h1>Immigration Solutions for Families</h1>
            <p>Find the perfect destination for your family's education, safety, and wellbeing.</p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-section">
        <div className="container">
          <div className="overview-content">
            <div className="overview-image">
              <img src={heroImage} alt="Family Immigration" />
            </div>
            <div className="overview-text">
              <h2>Secure Your Family's Future with Personalized Immigration Planning</h2>
              <p>Moving your family to a new country is a significant decision that impacts every family member. BorderBridge helps you find the perfect destination that prioritizes your children's education, family stability, and overall wellbeing.</p>
              
              <p>Our AI-powered platform analyzes family-friendly immigration programs across 37 countries, comparing education systems, healthcare access, community safety, and family support policies to identify your best options.</p>
              
              <div className="overview-stats">
                <div className="stat">
                  <h3>250+</h3>
                  <p>Family immigration programs analyzed</p>
                </div>
                <div className="stat">
                  <h3>85%</h3>
                  <p>Report finding better options than initially considered</p>
                </div>
                <div className="stat">
                  <h3>92%</h3>
                  <p>Successfully settle with their entire family</p>
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
            <h2>Key Benefits for Families</h2>
          </div>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Education System Comparison</h3>
              <p>Compare school quality, curriculum options, and educational outcomes across different countries and regions.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-home"></i>
              </div>
              <h3>Family Integration Resources</h3>
              <p>Access guides and tools to help your family integrate smoothly into your new community and culture.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-heartbeat"></i>
              </div>
              <h3>Healthcare Access Information</h3>
              <p>Understand healthcare systems, coverage options, and special considerations for family medical needs.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Community Safety Metrics</h3>
              <p>Review detailed safety data for potential neighborhoods and communities in your target countries.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h3>Family Support Policy Analysis</h3>
              <p>Compare parental leave, childcare subsidies, family benefits, and work-life balance policies.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-file-signature"></i>
              </div>
              <h3>Family Documentation Guidance</h3>
              <p>Get specialized assistance with family-specific immigration documents and requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="container">
          <div className="section-header">
            <h2>How It Works for Families</h2>
          </div>
          
          <div className="how-it-works-content">
            <div className="how-it-works-image">
              <img src={pathwayImage} alt="Family Immigration Pathway" />
            </div>
            <div className="how-it-works-steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Complete Your Family Profile</h3>
                  <p>Share details about all family members, including ages, education levels, language proficiency, and special needs.</p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Define Your Family Priorities</h3>
                  <p>Indicate what matters most to your family: education quality, healthcare, safety, community, or other factors.</p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Discover Family-Friendly Destinations</h3>
                  <p>Receive personalized recommendations for countries and regions that best match your family's needs.</p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Follow Your Family Immigration Roadmap</h3>
                  <p>Get step-by-step guidance through the application process, with family-specific document preparation.</p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h3>Prepare for Your Family's Transition</h3>
                  <p>Access resources for school enrollment, housing, healthcare registration, and community integration.</p>
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
              <h3>Building a New Life: The Rodriguez Family Story</h3>
              <p>Miguel and Elena Rodriguez wanted to provide better educational opportunities for their two children, but were overwhelmed by the different immigration options and uncertain which country would best suit their family's needs.</p>
              
              <p>Using BorderBridge, they compared education systems, healthcare access, and family support policies across multiple countries. The platform helped them discover that Australia offered the perfect combination of quality education, outdoor lifestyle, and family-friendly policies for their situation.</p>
              
              <p>Today, the Rodriguez family is thriving in Melbourne, with their children enrolled in excellent schools and Miguel working in his field with better work-life balance than before.</p>
              
              <div className="testimonial-container">
                <TestimonialCard testimonial={testimonial} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Categories Section */}
      <section className="family-categories-section">
        <div className="container">
          <div className="section-header">
            <h2>Solutions for Every Family</h2>
            <p>BorderBridge provides specialized guidance for families with different needs and priorities.</p>
          </div>
          
          <div className="categories-grid">
            <div className="category-card">
              <div className="category-icon">
                <i className="fas fa-school"></i>
              </div>
              <h3>Education-Focused Families</h3>
              <p>Prioritizing top-quality education and academic opportunities for children.</p>
              <Link to="/solutions/families/education" className="btn btn-outline">Learn More</Link>
            </div>
            
            <div className="category-card">
              <div className="category-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Safety & Stability Seekers</h3>
              <p>Looking for secure environments with political and economic stability.</p>
              <Link to="/solutions/families/safety" className="btn btn-outline">Learn More</Link>
            </div>
            
            <div className="category-card">
              <div className="category-icon">
                <i className="fas fa-heartbeat"></i>
              </div>
              <h3>Healthcare Access Priority</h3>
              <p>Families with specific healthcare needs or medical considerations.</p>
              <Link to="/solutions/families/healthcare" className="btn btn-outline">Learn More</Link>
            </div>
            
            <div className="category-card">
              <div className="category-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Community Integration Focus</h3>
              <p>Prioritizing cultural fit and strong community connections.</p>
              <Link to="/solutions/families/community" className="btn btn-outline">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="resources-section">
        <div className="container">
          <div className="section-header">
            <h2>Resources for Families</h2>
          </div>
          
          <div className="resources-grid">
            <div className="resource-card">
              <div className="resource-icon">
                <i className="fas fa-file-alt"></i>
              </div>
              <h3>Global Education Systems Guide</h3>
              <p>Compare curriculum approaches, assessment methods, and educational outcomes.</p>
              <Link to="/resources/guides/education-systems" className="resource-link">Download Guide</Link>
            </div>
            
            <div className="resource-card">
              <div className="resource-icon">
                <i className="fas fa-calculator"></i>
              </div>
              <h3>Family Cost of Living Calculator</h3>
              <p>Estimate expenses for housing, education, healthcare, and daily living.</p>
              <Link to="/resources/tools/family-cost-calculator" className="resource-link">Use Calculator</Link>
            </div>
            
            <div className="resource-card">
              <div className="resource-icon">
                <i className="fas fa-book"></i>
              </div>
              <h3>Children's Transition Guide</h3>
              <p>Help children adapt to a new country, school, and culture.</p>
              <Link to="/resources/guides/children-transition" className="resource-link">Read Guide</Link>
            </div>
            
            <div className="resource-card">
              <div className="resource-icon">
                <i className="fas fa-comments"></i>
              </div>
              <h3>Family Community Forum</h3>
              <p>Connect with other families navigating the immigration journey.</p>
              <Link to="/community/families" className="resource-link">Join Community</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Find the Perfect Destination for Your Family?</h2>
            <p>Take our free family assessment to discover your best immigration options.</p>
            <Link to="/signup" className="btn btn-primary btn-large">Start Free Family Assessment</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FamiliesPage;
