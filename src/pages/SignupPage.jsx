import React from 'react';
import { Link } from 'react-router-dom';
import './SignupPage.css';
import signupImage from '../assets/images/signup.jpg';

const SignupPage = () => {
  return (
    <div className="signup-page">
      <div className="container">
        <div className="signup-content">
          <div className="signup-image">
            <img src={signupImage} alt="Start Your Immigration Journey" />
            <div className="image-overlay">
              <h2>Begin Your Global Journey Today</h2>
              <p>Join thousands of successful immigrants who found their optimal pathway with BorderBridge</p>
            </div>
          </div>
          
          <div className="signup-form-container">
            <div className="signup-header">
              <h1>Create Your Free Account</h1>
              <p>Start with a free assessment to discover your immigration options</p>
            </div>
            
            <form className="signup-form">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="Enter your email address" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Create a password (min. 8 characters)" required />
              </div>
              
              <div className="form-group">
                <label>I am interested in:</label>
                <div className="checkbox-group">
                  <div className="checkbox-item">
                    <input type="checkbox" id="skilled" name="interests" value="skilled" />
                    <label htmlFor="skilled">Skilled Professional Immigration</label>
                  </div>
                  <div className="checkbox-item">
                    <input type="checkbox" id="family" name="interests" value="family" />
                    <label htmlFor="family">Family Immigration</label>
                  </div>
                  <div className="checkbox-item">
                    <input type="checkbox" id="entrepreneur" name="interests" value="entrepreneur" />
                    <label htmlFor="entrepreneur">Entrepreneur/Business Immigration</label>
                  </div>
                </div>
              </div>
              
              <div className="form-group form-checkbox">
                <input type="checkbox" id="terms" name="terms" required />
                <label htmlFor="terms">I agree to the <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link></label>
              </div>
              
              <button type="submit" className="btn btn-primary btn-large">Create Free Account</button>
            </form>
            
            <div className="social-signup">
              <p>Or sign up with:</p>
              <div className="social-buttons">
                <button className="btn btn-social btn-google">
                  <i className="fab fa-google"></i> Google
                </button>
                <button className="btn btn-social btn-linkedin">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </button>
              </div>
            </div>
            
            <div className="login-link">
              <p>Already have an account? <Link to="/login">Log In</Link></p>
            </div>
          </div>
        </div>
        
        <div className="signup-benefits">
          <h3>What You'll Get With Your Free Account:</h3>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <div className="benefit-text">
                <h4>Personalized Assessment</h4>
                <p>Discover your top immigration pathways based on your unique profile</p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <div className="benefit-text">
                <h4>Success Probability Scores</h4>
                <p>See your chances of approval for different immigration programs</p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <div className="benefit-text">
                <h4>Multi-Country Comparison</h4>
                <p>Compare options across 37 countries simultaneously</p>
              </div>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <div className="benefit-text">
                <h4>Resource Library Access</h4>
                <p>Browse guides, tools, and articles to support your journey</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="signup-testimonials">
          <h3>What Our Users Say:</h3>
          <div className="testimonials-carousel">
            <div className="testimonial-item">
              <div className="testimonial-quote">
                <p>"BorderBridge showed me immigration options I never knew existed. I'm now working in my dream job in Australia!"</p>
              </div>
              <div className="testimonial-author">
                <img src="/testimonials/user1.jpg" alt="User Testimonial" />
                <div className="author-info">
                  <h4>David Chen</h4>
                  <p>Software Engineer</p>
                  <div className="stars">★★★★★</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="signup-guarantee">
          <div className="guarantee-icon">
            <i className="fas fa-shield-alt"></i>
          </div>
          <div className="guarantee-text">
            <h3>No Risk, No Obligation</h3>
            <p>Your free assessment comes with no obligation to purchase. We're confident you'll find value in our personalized insights.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
