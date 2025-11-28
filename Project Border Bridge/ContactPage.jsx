import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="page-hero-section">
        <div className="container">
          <div className="page-hero-content">
            <h1>Contact Us</h1>
            <p>Ready to start your immigration journey? Get in touch with our team.</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Get Started Today</h2>
              <p>Fill out the form below to begin your free immigration assessment. Our team will review your information and get back to you within 24 hours.</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p>hello@borderbridge.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div>
                    <h4>Response Time</h4>
                    <p>Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
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
                  <label htmlFor="country">Current Country</label>
                  <input type="text" id="country" name="country" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="profession">Profession/Field</label>
                  <input type="text" id="profession" name="profession" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Tell us about your immigration goals</label>
                  <textarea id="message" name="message" rows="4" placeholder="What are you hoping to achieve through immigration?"></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">Start Free Assessment</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

