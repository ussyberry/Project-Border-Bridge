import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import heroImage from '../assets/images/hero-image.png';
import howItWorksImage from '../assets/images/how-it-works.png';
import { colors } from '../assets/colors';

// Components
import TestimonialCard from '../components/common/TestimonialCard';
import FeatureCard from '../components/common/FeatureCard';
import SegmentPathway from '../components/home/SegmentPathway';
import PricingCard from '../components/common/PricingCard';
import FAQ from '../components/common/FAQ';

const HomePage = () => {
  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Software Developer',
      image: '/testimonials/priya.jpg',
      quote: 'BorderBridge helped me discover a specialized tech visa in New Zealand with an 89% approval rate after being rejected for Canadian Express Entry. The personalized roadmap made the entire process manageable.',
      stars: 5
    },
    {
      id: 2,
      name: 'Miguel Rodriguez',
      role: 'Regional Sales Manager',
      image: '/testimonials/miguel.jpg',
      quote: 'As a family of four, we were overwhelmed by immigration options. BorderBridge compared education systems and family policies across countries, helping us find the perfect destination for our children\'s future.',
      stars: 5
    },
    {
      id: 3,
      name: 'Aisha Okafor',
      role: 'Fintech Entrepreneur',
      image: '/testimonials/aisha.jpg',
      quote: 'The entrepreneur visa comparison tool saved me countless hours of research. BorderBridge identified three startup-friendly countries I hadn\'t even considered, with better funding opportunities for my business.',
      stars: 5
    }
  ];

  // Sample features data
  const features = [
    {
      id: 1,
      title: 'Multi-Country Analysis',
      description: 'Compare 427+ immigration programs across 37 countries simultaneously to find your best opportunities.',
      icon: 'globe'
    },
    {
      id: 2,
      title: 'Success Probability Scoring',
      description: 'Get data-driven success probability scores for each pathway based on your specific profile.',
      icon: 'chart-line'
    },
    {
      id: 3,
      title: 'Personalized Roadmap',
      description: 'Follow a dynamic, interactive timeline of your entire immigration journey, customized to your situation.',
      icon: 'map-marked-alt'
    },
    {
      id: 4,
      title: 'Document Preparation',
      description: 'Access AI-generated document templates and guidance specific to your application needs.',
      icon: 'file-alt'
    },
    {
      id: 5,
      title: 'Expert Support',
      description: 'Get strategic advice from immigration specialists at critical decision points in your journey.',
      icon: 'users'
    },
    {
      id: 6,
      title: 'Real-Time Intelligence',
      description: 'Stay updated with alerts about policy changes that could impact your immigration journey.',
      icon: 'bell'
    }
  ];

  // Sample segment pathways data
  const segmentPathways = [
    {
      id: 1,
      title: 'For Skilled Professionals',
      description: 'Discover global career opportunities matched to your skills and experience.',
      image: '/segments/professionals.jpg',
      link: '/solutions/skilled-professionals',
      color: colors.primary.light
    },
    {
      id: 2,
      title: 'For Families',
      description: 'Find the perfect destination for your family\'s education, safety, and wellbeing.',
      image: '/segments/families.jpg',
      link: '/solutions/families',
      color: colors.secondary.main
    },
    {
      id: 3,
      title: 'For Entrepreneurs',
      description: 'Explore business-friendly immigration pathways to scale your venture globally.',
      image: '/segments/entrepreneurs.jpg',
      link: '/solutions/entrepreneurs',
      color: colors.special.highlight
    }
  ];

  // Sample pricing data
  const pricingPlans = [
    {
      id: 1,
      name: 'Pathfinder',
      price: 9.99,
      period: 'month',
      description: 'Essential guidance for your immigration journey',
      features: [
        'Multi-country immigration assessment',
        'Basic immigration roadmap',
        'Document checklists and templates',
        'Self-service resources and guides',
        'Community forum access'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      id: 2,
      name: 'Navigator',
      price: 29.99,
      period: 'month',
      description: 'Comprehensive support for serious applicants',
      features: [
        'Everything in Pathfinder, plus:',
        'Advanced immigration roadmap with tracking',
        'AI document review and optimization',
        'Priority policy change alerts',
        'Email support from immigration specialists'
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      id: 3,
      name: 'Voyager',
      price: 49.99,
      period: 'month',
      description: 'Premium guidance with expert human support',
      features: [
        'Everything in Navigator, plus:',
        'Quarterly consultation sessions',
        'Premium document preparation assistance',
        'Application review by human experts',
        'Emergency support line'
      ],
      cta: 'Get Started',
      popular: false
    }
  ];

  // Sample FAQ data
  const faqs = [
    {
      id: 1,
      question: 'How does BorderBridge compare to traditional immigration consultants?',
      answer: 'BorderBridge combines AI efficiency with human expertise, analyzing more immigration options across more countries than traditional consultants can, at a fraction of the cost. While consultants typically specialize in specific regions, our platform analyzes 427+ programs across 37 countries simultaneously, providing truly global opportunities.'
    },
    {
      id: 2,
      question: 'How accurate are the success probability scores?',
      answer: 'Our success probability scores achieve 83% accuracy across major immigration programs, based on analysis of thousands of historical applications and current approval trends. We continuously update our algorithms as immigration policies and approval patterns change.'
    },
    {
      id: 3,
      question: 'Can I use BorderBridge if I have a complex immigration situation?',
      answer: 'Yes! BorderBridge is designed to handle complex cases. Our AI identifies unusual circumstances in your profile and connects you with immigration specialists who can provide strategic advice for your specific situation.'
    },
    {
      id: 4,
      question: 'Do I need technical knowledge to use the platform?',
      answer: 'Not at all. BorderBridge features an intuitive, user-friendly interface designed for people of all technical abilities. Our step-by-step guidance makes the process clear and manageable for everyone.'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Navigate Your Immigration Journey with Confidence</h1>
              <p>BorderBridge combines AI-powered analysis with human expertise to transform your complex immigration journey into a clear, personalized pathway to success.</p>
              <div className="hero-cta">
                <Link to="/signup" className="btn btn-primary">Get Started</Link>
                <Link to="/how-it-works" className="btn btn-outline">How It Works</Link>
              </div>
            </div>
            <div className="hero-image">
              <img src={heroImage} alt="BorderBridge Platform" />
            </div>
          </div>
        </div>
      </section>

      {/* Problem-Solution Section */}
      <section className="problem-solution-section">
        <div className="container">
          <div className="section-header">
            <h2>Immigration Shouldn't Be Overwhelming</h2>
            <p>Traditional immigration guidance is expensive, limited in scope, and often leaves you with more questions than answers.</p>
          </div>
          <div className="solution-content">
            <div className="solution-item">
              <div className="solution-icon">
                <i className="fas fa-globe"></i>
              </div>
              <h3>Limited Options</h3>
              <p>Most consultants specialize in just 1-2 countries</p>
              <div className="solution-arrow">→</div>
              <div className="solution-result">
                <h4>Global Analysis</h4>
                <p>We analyze 427+ programs across 37 countries</p>
              </div>
            </div>
            <div className="solution-item">
              <div className="solution-icon">
                <i className="fas fa-dollar-sign"></i>
              </div>
              <h3>High Costs</h3>
              <p>Traditional consultants charge $200+ per hour</p>
              <div className="solution-arrow">→</div>
              <div className="solution-result">
                <h4>Affordable Plans</h4>
                <p>Starting at just $9.99 per month</p>
              </div>
            </div>
            <div className="solution-item">
              <div className="solution-icon">
                <i className="fas fa-question-circle"></i>
              </div>
              <h3>Uncertain Outcomes</h3>
              <p>Subjective advice based on limited experience</p>
              <div className="solution-arrow">→</div>
              <div className="solution-result">
                <h4>Data-Driven Guidance</h4>
                <p>83% accurate success probability predictions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Powerful Features to Guide Your Journey</h2>
            <p>Our AI-powered platform provides everything you need to navigate your immigration process with confidence.</p>
          </div>
          <div className="features-grid">
            {features.map(feature => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Segment Pathways Section */}
      <section className="segment-pathways-section">
        <div className="container">
          <div className="section-header">
            <h2>Find Your Path</h2>
            <p>Discover immigration solutions tailored to your specific needs and goals.</p>
          </div>
          <div className="segment-pathways-grid">
            {segmentPathways.map(pathway => (
              <SegmentPathway key={pathway.id} pathway={pathway} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="container">
          <div className="section-header">
            <h2>How BorderBridge Works</h2>
            <p>Our streamlined process makes immigration planning simple and effective.</p>
          </div>
          <div className="how-it-works-content">
            <div className="how-it-works-image">
              <img src={howItWorksImage} alt="How BorderBridge Works" />
            </div>
            <div className="how-it-works-steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Complete Your Profile</h3>
                  <p>Share your skills, experience, and immigration goals through our comprehensive assessment.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Discover Your Options</h3>
                  <p>Receive personalized immigration recommendations with success probability scores.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Follow Your Roadmap</h3>
                  <p>Get step-by-step guidance through document preparation and application submission.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Achieve Your Goals</h3>
                  <p>Successfully navigate your immigration journey with ongoing support and updates.</p>
                </div>
              </div>
              <Link to="/how-it-works" className="btn btn-secondary">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>Success Stories</h2>
            <p>Join thousands of satisfied customers who have successfully navigated their immigration journey with BorderBridge.</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
          <div className="testimonials-stats">
            <div className="stat">
              <h3>73%</h3>
              <p>Discover pathways they weren't previously aware of</p>
            </div>
            <div className="stat">
              <h3>76%</h3>
              <p>Higher approval rate than global average</p>
            </div>
            <div className="stat">
              <h3>112</h3>
              <p>Hours saved on research and planning</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="container">
          <div className="section-header">
            <h2>Simple, Transparent Pricing</h2>
            <p>Choose the plan that fits your immigration needs and budget.</p>
          </div>
          <div className="pricing-grid">
            {pricingPlans.map(plan => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
          <div className="pricing-note">
            <p>All plans include a 7-day free trial. No credit card required to start.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common questions about BorderBridge.</p>
          </div>
          <div className="faq-content">
            <FAQ faqs={faqs} />
            <div className="faq-cta">
              <p>Have more questions?</p>
              <Link to="/contact" className="btn btn-outline">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta-section">
        <div className="container">
          <div className="final-cta-content">
            <h2>Start Your Immigration Journey Today</h2>
            <p>Join thousands of successful immigrants who found their path with BorderBridge.</p>
            <Link to="/signup" className="btn btn-primary btn-large">Get Started Free</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
