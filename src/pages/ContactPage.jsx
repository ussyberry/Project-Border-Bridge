import React from 'react';
import { Link } from 'react-router-dom';
import './ContactPage.css';
import contactImage from '../assets/images/contact.jpg';

const ContactPage = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="page-hero-section">
        <div className="container">
          <div className="page-hero-content">
            <h1>Contact Us</h1>
            <p>We're here to help with any questions about your immigration journey.</p>
          </div>
        </div>
      </section>

      {/* Contact Options Section */}
      <section className="contact-options-section">
        <div className="container">
          <div className="contact-options-grid">
            <div className="contact-option-card">
              <div className="option-icon">
                <i className="fas fa-headset"></i>
              </div>
              <h3>Customer Support</h3>
              <p>For questions about your account, subscription, or using the platform.</p>
              <div className="option-details">
                <p><strong>Email:</strong> <a href="mailto:support@borderbridge.com">support@borderbridge.com</a></p>
                <p><strong>Hours:</strong> 24/7 support</p>
                <p><strong>Response Time:</strong> Within 24 hours</p>
              </div>
            </div>
            
            <div className="contact-option-card">
              <div className="option-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>Business Inquiries</h3>
              <p>For partnerships, enterprise solutions, or business opportunities.</p>
              <div className="option-details">
                <p><strong>Email:</strong> <a href="mailto:business@borderbridge.com">business@borderbridge.com</a></p>
                <p><strong>Hours:</strong> Monday-Friday, 9am-5pm EST</p>
                <p><strong>Response Time:</strong> Within 2 business days</p>
              </div>
            </div>
            
            <div className="contact-option-card">
              <div className="option-icon">
                <i className="fas fa-newspaper"></i>
              </div>
              <h3>Press & Media</h3>
              <p>For media inquiries, interview requests, or press materials.</p>
              <div className="option-details">
                <p><strong>Email:</strong> <a href="mailto:press@borderbridge.com">press@borderbridge.com</a></p>
                <p><strong>Hours:</strong> Monday-Friday, 9am-5pm EST</p>
                <p><strong>Response Time:</strong> Within 2 business days</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form-container">
            <div className="contact-form-image">
              <img src={contactImage} alt="Contact BorderBridge" />
            </div>
            <div className="contact-form">
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and we'll get back to you as soon as possible.</p>
              
              <form>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select id="subject" name="subject" required>
                    <option value="">Select a subject</option>
                    <option value="account">Account Question</option>
                    <option value="subscription">Subscription Question</option>
                    <option value="technical">Technical Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                
                <div className="form-group form-checkbox">
                  <input type="checkbox" id="privacy" name="privacy" required />
                  <label htmlFor="privacy">I agree to the <Link to="/privacy">Privacy Policy</Link></label>
                </div>
                
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
          </div>
          
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How quickly will I receive a response?</h3>
              <p>We aim to respond to all inquiries within 24 hours. For urgent matters, please indicate this in your subject line.</p>
            </div>
            
            <div className="faq-item">
              <h3>I'm having technical issues with the platform. What should I do?</h3>
              <p>Please contact our support team at support@borderbridge.com with details about the issue, including screenshots if possible. Our technical team will assist you promptly.</p>
            </div>
            
            <div className="faq-item">
              <h3>How can I request a refund?</h3>
              <p>Refund requests should be sent to support@borderbridge.com with your account details and reason for the refund. Please review our refund policy for eligibility criteria.</p>
            </div>
            
            <div className="faq-item">
              <h3>Do you offer phone support?</h3>
              <p>Phone support is available for Voyager plan subscribers. If you're on another plan, please use our email support or contact form.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location Section */}
      <section className="office-location-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Office</h2>
          </div>
          
          <div className="office-content">
            <div className="office-map">
              {/* Map placeholder */}
              <div className="map-placeholder">
                <i className="fas fa-map-marker-alt"></i>
              </div>
            </div>
            
            <div className="office-details">
              <h3>BorderBridge Headquarters</h3>
              <address>
                123 Global Avenue<br />
                Suite 500<br />
                Toronto, ON M5V 2K4<br />
                Canada
              </address>
              
              <p><strong>Note:</strong> Our office is primarily for business operations. For customer support, please use the contact options above.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="connect-section">
        <div className="container">
          <div className="connect-content">
            <h2>Connect With Us</h2>
            <p>Follow BorderBridge on social media for the latest updates, tips, and immigration insights.</p>
            
            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin"></i>
                <span>LinkedIn</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-twitter"></i>
                <span>Twitter</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-facebook"></i>
                <span>Facebook</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-instagram"></i>
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
