import React from 'react';
import { Link } from 'react-router-dom';
import './HowItWorksPage.css';
import processImage from '../assets/images/process-diagram.png';
import aiHumanImage from '../assets/images/ai-human-expertise.png';
import demoVideo from '../assets/images/demo-video-thumbnail.jpg';

// Components
import FAQ from '../components/common/FAQ';
import TestimonialCard from '../components/common/TestimonialCard';

const HowItWorksPage = () => {
  // Sample FAQ data
  const faqs = [
    {
      id: 1,
      question: 'How long does the assessment process take?',
      answer: 'The initial assessment takes approximately 15 minutes to complete. Once submitted, our AI analyzes your profile against all available immigration programs and provides recommendations within seconds.'
    },
    {
      id: 2,
      question: 'How accurate are the immigration recommendations?',
      answer: 'Our recommendations are based on analysis of thousands of successful immigration cases and current program requirements. Our success probability predictions achieve 83% accuracy across major immigration programs.'
    },
    {
      id: 3,
      question: 'When do I get access to human immigration experts?',
      answer: 'Navigator and Voyager plan subscribers receive access to immigration specialists at critical decision points. Voyager subscribers also receive quarterly consultation sessions and application review by human experts.'
    },
    {
      id: 4,
      question: 'How often is the immigration data updated?',
      answer: 'Our system continuously monitors immigration policy changes across all relevant authorities. Updates are implemented in real-time, ensuring you always have the most current information.'
    },
    {
      id: 5,
      question: 'Can I switch between subscription plans?',
      answer: 'Yes, you can upgrade or downgrade your subscription at any time. Changes take effect at the start of your next billing cycle.'
    }
  ];

  // Sample testimonial data
  const testimonial = {
    id: 1,
    name: 'Priya Sharma',
    role: 'Software Developer',
    image: '/testimonials/priya.jpg',
    quote: 'The step-by-step roadmap made a complex process manageable. I always knew exactly what to do next, and the document templates saved me countless hours.',
    stars: 5
  };

  return (
    <div className="how-it-works-page">
      {/* Hero Section */}
      <section className="page-hero-section">
        <div className="container">
          <div className="page-hero-content">
            <h1>How BorderBridge Works</h1>
            <p>Our AI-powered platform simplifies the complex immigration process into clear, manageable steps tailored to your unique situation.</p>
          </div>
        </div>
      </section>

      {/* Platform Overview Section */}
      <section className="platform-overview-section">
        <div className="container">
          <div className="section-header">
            <h2>The BorderBridge Platform</h2>
            <p>BorderBridge combines cutting-edge AI technology with strategic human expertise to guide you through every step of your immigration journey.</p>
          </div>
          <div className="platform-features">
            <div className="platform-feature">
              <div className="feature-icon">
                <i className="fas fa-globe"></i>
              </div>
              <h3>Global Coverage</h3>
              <p>Analysis of 427+ immigration programs across 37 countries</p>
            </div>
            <div className="platform-feature">
              <div className="feature-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Data-Driven</h3>
              <p>Recommendations based on thousands of successful cases</p>
            </div>
            <div className="platform-feature">
              <div className="feature-icon">
                <i className="fas fa-user-cog"></i>
              </div>
              <h3>Personalized</h3>
              <p>Custom roadmaps tailored to your unique profile</p>
            </div>
            <div className="platform-feature">
              <div className="feature-icon">
                <i className="fas fa-sync-alt"></i>
              </div>
              <h3>Always Current</h3>
              <p>Real-time updates when immigration policies change</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="process-steps-section">
        <div className="container">
          <div className="section-header">
            <h2>The BorderBridge Process</h2>
            <p>Four simple steps to transform your immigration journey</p>
          </div>
          <div className="process-content">
            <div className="process-image">
              <img src={processImage} alt="BorderBridge Process" />
            </div>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Complete Your Profile</h3>
                  <p>Answer questions about your skills, education, work experience, language proficiency, family situation, and immigration goals through our comprehensive assessment.</p>
                  <ul className="step-details">
                    <li>15-minute questionnaire</li>
                    <li>Secure data storage</li>
                    <li>Progressive profile building</li>
                  </ul>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Discover Your Options</h3>
                  <p>Our AI analyzes your profile against all available immigration programs to provide personalized recommendations with success probability scores.</p>
                  <ul className="step-details">
                    <li>Ranked list of immigration pathways</li>
                    <li>Side-by-side country comparison</li>
                    <li>Data-driven success probabilities</li>
                  </ul>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Follow Your Roadmap</h3>
                  <p>Get a step-by-step action plan with specific tasks, document requirements, and deadlines tailored to your chosen immigration pathway.</p>
                  <ul className="step-details">
                    <li>Interactive timeline</li>
                    <li>Document templates and guides</li>
                    <li>Automated reminders and updates</li>
                  </ul>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Achieve Your Goals</h3>
                  <p>Successfully navigate your immigration journey with ongoing support, real-time policy updates, and expert guidance when you need it most.</p>
                  <ul className="step-details">
                    <li>Application tracking</li>
                    <li>Policy change alerts</li>
                    <li>Strategic expert support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="technology-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Technology</h2>
            <p>Powered by advanced AI and data analysis</p>
          </div>
          <div className="technology-content">
            <div className="technology-info">
              <h3>The BorderBridge AI Engine</h3>
              <p>Our proprietary AI technology analyzes thousands of successful immigration cases, current program requirements, and processing trends to provide highly accurate recommendations.</p>
              
              <div className="technology-features">
                <div className="technology-feature">
                  <h4>Profile Analysis</h4>
                  <p>Evaluates 50+ personal and professional factors against historical approval data</p>
                </div>
                <div className="technology-feature">
                  <h4>Program Matching</h4>
                  <p>Identifies optimal immigration pathways across 427+ global programs</p>
                </div>
                <div className="technology-feature">
                  <h4>Success Prediction</h4>
                  <p>Calculates approval probabilities with 83% accuracy</p>
                </div>
                <div className="technology-feature">
                  <h4>Policy Monitoring</h4>
                  <p>Continuously tracks immigration policy changes worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI + Human Section */}
      <section className="ai-human-section">
        <div className="container">
          <div className="ai-human-content">
            <div className="ai-human-image">
              <img src={aiHumanImage} alt="AI + Human Expertise" />
            </div>
            <div className="ai-human-info">
              <h2>The Perfect Balance: AI + Human Expertise</h2>
              <p>BorderBridge combines the efficiency and analytical power of AI with the strategic judgment of experienced immigration specialists.</p>
              
              <div className="ai-human-comparison">
                <div className="ai-capabilities">
                  <h3>AI Handles:</h3>
                  <ul>
                    <li>Data analysis across thousands of cases</li>
                    <li>Program matching and eligibility assessment</li>
                    <li>Document preparation and checklists</li>
                    <li>Timeline management and reminders</li>
                    <li>Policy change monitoring</li>
                  </ul>
                </div>
                <div className="human-capabilities">
                  <h3>Human Experts Provide:</h3>
                  <ul>
                    <li>Strategic advice for complex cases</li>
                    <li>Nuanced interpretation of requirements</li>
                    <li>Critical application review</li>
                    <li>Emotional support and reassurance</li>
                    <li>Creative problem-solving</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="demo-video-section">
        <div className="container">
          <div className="section-header">
            <h2>See BorderBridge in Action</h2>
            <p>Watch our platform demo to see how BorderBridge transforms the immigration journey</p>
          </div>
          <div className="video-container">
            <div className="video-thumbnail">
              <img src={demoVideo} alt="BorderBridge Demo Video" />
              <div className="play-button">
                <i className="fas fa-play"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="container">
          <div className="section-header">
            <h2>User Experience</h2>
            <p>Hear from someone who's been through the BorderBridge journey</p>
          </div>
          <div className="testimonial-container">
            <TestimonialCard testimonial={testimonial} />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about how BorderBridge works</p>
          </div>
          <div className="faq-container">
            <FAQ faqs={faqs} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Immigration Journey?</h2>
            <p>Create your account today and discover your optimal immigration pathways.</p>
            <div className="cta-buttons">
              <Link to="/signup" className="btn btn-primary btn-large">Get Started Free</Link>
              <Link to="/pricing" className="btn btn-outline">View Pricing</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
