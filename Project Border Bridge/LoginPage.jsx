import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import loginImage from '../assets/images/login.jpg';

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="container">
        <div className="login-content">
          <div className="login-image">
            <img src={loginImage} alt="Welcome Back to BorderBridge" />
            <div className="image-overlay">
              <h2>Welcome Back</h2>
              <p>Continue your immigration journey with BorderBridge</p>
            </div>
          </div>
          
          <div className="login-form-container">
            <div className="login-header">
              <h1>Log In to Your Account</h1>
              <p>Access your personalized immigration dashboard</p>
            </div>
            
            <form className="login-form">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="Enter your email address" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" required />
                <div className="forgot-password">
                  <Link to="/forgot-password">Forgot password?</Link>
                </div>
              </div>
              
              <div className="form-group form-checkbox">
                <input type="checkbox" id="remember" name="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              
              <button type="submit" className="btn btn-primary btn-large">Log In</button>
            </form>
            
            <div className="social-login">
              <p>Or log in with:</p>
              <div className="social-buttons">
                <button className="btn btn-social btn-google">
                  <i className="fab fa-google"></i> Google
                </button>
                <button className="btn btn-social btn-linkedin">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </button>
              </div>
            </div>
            
            <div className="signup-link">
              <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            </div>
          </div>
        </div>
        
        <div className="login-help">
          <h3>Need Help?</h3>
          <p>If you're having trouble accessing your account, our support team is here to help.</p>
          <Link to="/contact" className="btn btn-outline">Contact Support</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
