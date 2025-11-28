import React from 'react';
import { Link } from 'react-router-dom';
import './PricingPage.css';

// Components
import PricingCard from '../components/common/PricingCard';
import FAQ from '../components/common/FAQ';

const PricingPage = () => {
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
      question: 'Can I change plans later?',
      answer: 'Yes, you can upgrade or downgrade your subscription at any time. Changes take effect at the start of your next billing cycle.'
    },
    {
      id: 2,
      question: 'Is there a free trial?',
      answer: 'Yes, all plans include a 7-day free trial. You can explore the platform and even complete your initial assessment without entering payment information.'
    },
    {
      id: 3,
      question: 'How do the consultation sessions work?',
      answer: 'Voyager plan subscribers receive quarterly 30-minute consultation sessions with immigration specialists. These can be scheduled through your dashboard and conducted via video call or phone.'
    },
    {
      id: 4,
      question: 'What if I need more expert support?',
      answer: 'Additional consultation sessions can be purchased separately if you need more support beyond what\'s included in your plan.'
    },
    {
      id: 5,
      question: 'Are there any hidden fees?',
      answer: 'No, the subscription price covers all features listed in your plan. Government application fees and third-party service fees (translations, certifications, etc.) are not included.'
    },
    {
      id: 6,
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee if you\'re not satisfied with our service. Simply contact our support team to process your refund.'
    }
  ];

  return (
    <div className="pricing-page">
      {/* Hero Section */}
      <section className="page-hero-section">
        <div className="container">
          <div className="page-hero-content">
            <h1>Simple, Transparent Pricing</h1>
            <p>Choose the plan that fits your immigration needs and budget.</p>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="pricing-plans-section">
        <div className="container">
          <div className="pricing-toggle">
            <span className={`toggle-option active`}>Monthly</span>
            <span className={`toggle-option`}>Annual (Save 20%)</span>
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

      {/* Enterprise Section */}
      <section className="enterprise-section">
        <div className="container">
          <div className="enterprise-content">
            <div className="enterprise-info">
              <h2>Enterprise Solutions</h2>
              <p>Custom immigration solutions for businesses relocating employees internationally.</p>
              <ul className="enterprise-features">
                <li>Bulk employee assessment and management</li>
                <li>Custom immigration policy development</li>
                <li>Dedicated account management</li>
                <li>Advanced analytics and reporting</li>
                <li>Employee support services</li>
              </ul>
              <Link to="/contact" className="btn btn-outline">Contact Sales</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Comparison Section */}
      <section className="plan-comparison-section">
        <div className="container">
          <div className="section-header">
            <h2>Plan Comparison</h2>
            <p>Compare features across our subscription plans.</p>
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
                <tr className="category-row">
                  <td colSpan="4">Assessment & Planning</td>
                </tr>
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
                  <td>Advanced Interactive Roadmap</td>
                  <td><i className="fas fa-times"></i></td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-check"></i></td>
                </tr>
                <tr>
                  <td>Personalized Timeline</td>
                  <td><i className="fas fa-times"></i></td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-check"></i></td>
                </tr>
                
                <tr className="category-row">
                  <td colSpan="4">Document Preparation</td>
                </tr>
                <tr>
                  <td>Document Checklists</td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-check"></i></td>
                </tr>
                <tr>
                  <td>Basic Document Templates</td>
                  <td><i className="fas fa-check"></i></td>
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
                  <td>Premium Document Templates</td>
                  <td><i className="fas fa-times"></i></td>
                  <td><i className="fas fa-check"></i></td>
                  <td><i className="fas fa-check"></i></td>
                </tr>
                <tr>
                  <td>Human Expert Document Review</td>
                  <td><i className="fas fa-times"></i></td>
                  <td><i className="fas fa-times"></i></td>
                  <td><i className="fas fa-check"></i></td>
                </tr>
                
                <tr className="category-row">
                  <td colSpan="4">Support & Resources</td>
                </tr>
                <tr>
                  <td>Self-Service Resources</td>
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
                  <td>Policy Change Alerts</td>
                  <td>Basic</td>
                  <td>Priority</td>
                  <td>Priority</td>
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
                  <td>Quarterly</td>
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
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="guarantee-section">
        <div className="container">
          <div className="guarantee-content">
            <div className="guarantee-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h2>30-Day Money-Back Guarantee</h2>
            <p>If you\'re not completely satisfied with BorderBridge, simply contact our support team within 30 days of your purchase for a full refund.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about our pricing and plans.</p>
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
            <p>Begin with a free assessment and discover your personalized immigration options.</p>
            <Link to="/signup" className="btn btn-primary btn-large">Start Free Trial</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;


