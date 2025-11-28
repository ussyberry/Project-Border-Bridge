import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';
import teamImage from '../assets/images/team.jpg';
import founderImage from '../assets/images/founder.jpg';
import techImage from '../assets/images/technology.jpg';
import missionImage from '../assets/images/mission.jpg';

const AboutPage = () => {
  // Sample team members data
  const teamMembers = [
    {
      id: 1,
      name: 'Usman Alex Kadiri',
      role: 'Founder & CEO',
      image: '/team/founder.jpg',
      bio: 'Former finance professional with extensive experience in data science and AI. MSc in Finance from Leeds Beckett University and BSc in Economics from University of Abuja.'
    },
    {
      id: 2,
      name: 'Sarah Chen',
      role: 'Chief Technology Officer',
      image: '/team/cto.jpg',
      bio: 'AI specialist with 10+ years experience developing machine learning solutions. Previously led engineering teams at major tech companies.'
    },
    {
      id: 3,
      name: 'Miguel Hernandez',
      role: 'Head of Immigration Services',
      image: '/team/immigration-head.jpg',
      bio: 'Former immigration consultant with 15+ years of experience across multiple countries. Expert in global immigration policies and procedures.'
    },
    {
      id: 4,
      name: 'Aisha Okafor',
      role: 'Customer Success Director',
      image: '/team/customer-success.jpg',
      bio: 'Passionate about creating exceptional customer experiences. Previously led customer success teams at SaaS companies.'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="page-hero-section">
        <div className="container">
          <div className="page-hero-content">
            <h1>About BorderBridge</h1>
            <p>We're transforming the complex immigration journey into a clear, personalized pathway to success.</p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Story</h2>
          </div>
          <div className="story-content">
            <div className="story-image">
              <img src={founderImage} alt="BorderBridge Founder" />
            </div>
            <div className="story-text">
              <p>BorderBridge was born from personal experience. After navigating the complex immigration process himself, our founder Usman Alex Kadiri recognized the need for a more accessible, transparent, and data-driven approach to immigration guidance.</p>
              
              <p>Having worked in finance and developed expertise in data science and AI, Usman saw an opportunity to combine cutting-edge technology with immigration expertise to create a platform that would make global mobility accessible to everyone.</p>
              
              <p>In 2024, BorderBridge was launched with a mission to transform the immigration journey from an overwhelming, uncertain process into a clear, personalized pathway to success.</p>
              
              <p>Today, BorderBridge helps thousands of skilled professionals, families, and entrepreneurs navigate global immigration opportunities with confidence, combining the efficiency of AI with the strategic judgment of experienced immigration specialists.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="mission-values-section">
        <div className="container">
          <div className="mission-values-content">
            <div className="mission-values-text">
              <h2>Our Mission & Values</h2>
              
              <div className="mission">
                <h3>Mission</h3>
                <p>To empower individuals and families to access global opportunities by transforming the complex immigration journey into a clear, personalized pathway to success.</p>
              </div>
              
              <div className="values">
                <h3>Core Values</h3>
                <ul>
                  <li>
                    <strong>Accessibility</strong>
                    <p>Making expert immigration guidance available to everyone, regardless of background or resources.</p>
                  </li>
                  <li>
                    <strong>Transparency</strong>
                    <p>Providing clear, honest information about immigration options, processes, and probabilities.</p>
                  </li>
                  <li>
                    <strong>Empowerment</strong>
                    <p>Equipping people with the knowledge and tools to make informed decisions about their future.</p>
                  </li>
                  <li>
                    <strong>Innovation</strong>
                    <p>Continuously improving our technology and approaches to better serve our users.</p>
                  </li>
                  <li>
                    <strong>Integrity</strong>
                    <p>Committing to ethical practices and legitimate immigration pathways.</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mission-values-image">
              <img src={missionImage} alt="BorderBridge Mission" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Team</h2>
            <p>Meet the experts behind BorderBridge</p>
          </div>
          
          <div className="team-overview">
            <div className="team-image">
              <img src={teamImage} alt="BorderBridge Team" />
            </div>
            <div className="team-description">
              <p>BorderBridge brings together experts in immigration, technology, and customer experience to create a truly transformative platform.</p>
              <p>Our team combines decades of immigration expertise with cutting-edge AI and data science capabilities, all united by a passion for helping people access global opportunities.</p>
              <p>We're a diverse, global team that understands the immigration journey from both professional and personal perspectives.</p>
            </div>
          </div>
          
          <div className="team-members-grid">
            {teamMembers.map(member => (
              <div key={member.id} className="team-member-card">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="technology-section">
        <div className="container">
          <div className="technology-content">
            <div className="technology-image">
              <img src={techImage} alt="BorderBridge Technology" />
            </div>
            <div className="technology-text">
              <h2>Our Technology</h2>
              <p>At the heart of BorderBridge is our proprietary AI engine that analyzes thousands of successful immigration cases, current program requirements, and processing trends to provide highly accurate recommendations.</p>
              
              <div className="technology-features">
                <div className="technology-feature">
                  <h4>Data-Driven Analysis</h4>
                  <p>Our platform processes vast amounts of immigration data to identify patterns and success factors.</p>
                </div>
                <div className="technology-feature">
                  <h4>Machine Learning</h4>
                  <p>Our algorithms continuously improve as they learn from new cases and outcomes.</p>
                </div>
                <div className="technology-feature">
                  <h4>Natural Language Processing</h4>
                  <p>Advanced NLP capabilities help analyze and generate immigration documents.</p>
                </div>
                <div className="technology-feature">
                  <h4>Real-Time Monitoring</h4>
                  <p>Automated systems track policy changes across immigration authorities worldwide.</p>
                </div>
              </div>
              
              <p>We combine this technological power with human expertise at critical decision points, creating a hybrid approach that delivers the best of both worlds.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ethical Commitment Section */}
      <section className="ethical-commitment-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Ethical Commitment</h2>
          </div>
          <div className="ethical-content">
            <div className="ethical-principles">
              <div className="ethical-principle">
                <h3>Legitimate Pathways Only</h3>
                <p>We only recommend and support legal, legitimate immigration pathways. We never suggest or assist with circumventing immigration laws or regulations.</p>
              </div>
              <div className="ethical-principle">
                <h3>Honest Probability Assessment</h3>
                <p>We provide realistic success probabilities based on data, never overpromising or creating false expectations about immigration outcomes.</p>
              </div>
              <div className="ethical-principle">
                <h3>Data Privacy & Security</h3>
                <p>We maintain the highest standards of data protection, ensuring user information is secure and only used for the purposes explicitly authorized.</p>
              </div>
              <div className="ethical-principle">
                <h3>Inclusive Access</h3>
                <p>We strive to make our platform accessible to people from diverse backgrounds, offering resources in multiple languages and at various price points.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press & Media Section */}
      <section className="press-media-section">
        <div className="container">
          <div className="section-header">
            <h2>Press & Media</h2>
          </div>
          <div className="press-content">
            <p>For press inquiries, please contact <a href="mailto:press@borderbridge.com">press@borderbridge.com</a></p>
            
            <div className="press-resources">
              <h3>Resources</h3>
              <ul>
                <li><a href="#">Press Kit</a></li>
                <li><a href="#">Brand Assets</a></li>
                <li><a href="#">Company Fact Sheet</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Join Us on Our Mission</h2>
            <p>Experience how BorderBridge is transforming the immigration journey.</p>
            <div className="cta-buttons">
              <Link to="/signup" className="btn btn-primary btn-large">Get Started Free</Link>
              <Link to="/contact" className="btn btn-outline">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
