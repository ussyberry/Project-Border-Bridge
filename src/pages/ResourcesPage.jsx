import React from 'react';
import { Link } from 'react-router-dom';
import './ResourcesPage.css';
import blogImage1 from '../assets/images/blog-image-1.jpg';
import blogImage2 from '../assets/images/blog-image-2.jpg';
import blogImage3 from '../assets/images/blog-image-3.jpg';
import guideImage1 from '../assets/images/guide-image-1.jpg';
import guideImage2 from '../assets/images/guide-image-2.jpg';
import storyImage1 from '../assets/images/story-image-1.jpg';
import storyImage2 from '../assets/images/story-image-2.jpg';

const ResourcesPage = () => {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'Top 5 Countries for Tech Professionals in 2025',
      excerpt: 'Discover which countries offer the best opportunities for tech workers based on job market, visa policies, and quality of life.',
      image: blogImage1,
      category: 'Global Immigration Insights',
      date: 'June 2, 2025',
      readTime: '8 min read'
    },
    {
      id: 2,
      title: 'How to Prepare for Immigration Language Tests',
      excerpt: 'Practical strategies and resources to help you achieve the language proficiency scores needed for your immigration application.',
      image: blogImage2,
      category: 'Immigration Document Mastery',
      date: 'May 28, 2025',
      readTime: '6 min read'
    },
    {
      id: 3,
      title: 'Understanding Points-Based Immigration Systems',
      excerpt: 'A comprehensive breakdown of how points-based systems work across different countries and how to maximize your score.',
      image: blogImage3,
      category: 'Personalized Pathway Planning',
      date: 'May 21, 2025',
      readTime: '10 min read'
    }
  ];

  // Sample guides data
  const guides = [
    {
      id: 1,
      title: 'The Complete Guide to Express Entry',
      description: 'Everything you need to know about Canada's Express Entry system, from eligibility to application submission.',
      image: guideImage1,
      downloadable: true
    },
    {
      id: 2,
      title: 'Family Immigration Pathways Comparison',
      description: 'Compare family reunification programs across major destination countries to find your best option.',
      image: guideImage2,
      downloadable: true
    }
  ];

  // Sample success stories data
  const successStories = [
    {
      id: 1,
      title: 'From Rejection to Approval: Priya's Journey',
      description: 'How a software developer found success after being rejected for Canadian Express Entry.',
      image: storyImage1,
      country: 'New Zealand'
    },
    {
      id: 2,
      title: 'Building a New Life: The Rodriguez Family Story',
      description: 'How a family of four navigated the immigration process to find the perfect home abroad.',
      image: storyImage2,
      country: 'Australia'
    }
  ];

  return (
    <div className="resources-page">
      {/* Hero Section */}
      <section className="page-hero-section">
        <div className="container">
          <div className="page-hero-content">
            <h1>Immigration Resources & Insights</h1>
            <p>Expert guidance, tools, and stories to help you navigate your immigration journey with confidence.</p>
            <div className="resource-search">
              <input type="text" placeholder="Search resources..." />
              <button className="btn btn-primary">Search</button>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="resource-categories-section">
        <div className="container">
          <div className="categories-grid">
            <Link to="/resources/blog" className="category-card">
              <div className="category-icon">
                <i className="fas fa-newspaper"></i>
              </div>
              <h3>Blog</h3>
              <p>Latest insights and analysis</p>
            </Link>
            <Link to="/resources/guides" className="category-card">
              <div className="category-icon">
                <i className="fas fa-book"></i>
              </div>
              <h3>Immigration Guides</h3>
              <p>Comprehensive resources</p>
            </Link>
            <Link to="/resources/success-stories" className="category-card">
              <div className="category-icon">
                <i className="fas fa-star"></i>
              </div>
              <h3>Success Stories</h3>
              <p>Real immigration journeys</p>
            </Link>
            <Link to="/resources/tools" className="category-card">
              <div className="category-icon">
                <i className="fas fa-calculator"></i>
              </div>
              <h3>Tools & Calculators</h3>
              <p>Interactive planning tools</p>
            </Link>
            <Link to="/resources/webinars" className="category-card">
              <div className="category-icon">
                <i className="fas fa-video"></i>
              </div>
              <h3>Webinars & Events</h3>
              <p>Live and recorded sessions</p>
            </Link>
            <Link to="/resources/glossary" className="category-card">
              <div className="category-icon">
                <i className="fas fa-book-open"></i>
              </div>
              <h3>Immigration Glossary</h3>
              <p>Key terms explained</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="featured-blog-section">
        <div className="container">
          <div className="section-header">
            <h2>Latest from Our Blog</h2>
            <Link to="/resources/blog" className="view-all">View All Posts</Link>
          </div>
          <div className="blog-posts-grid">
            {blogPosts.map(post => (
              <div key={post.id} className="blog-post-card">
                <div className="post-image">
                  <img src={post.image} alt={post.title} />
                  <span className="post-category">{post.category}</span>
                </div>
                <div className="post-content">
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="post-meta">
                    <span className="post-date">{post.date}</span>
                    <span className="post-read-time">{post.readTime}</span>
                  </div>
                  <Link to={`/resources/blog/${post.id}`} className="read-more">Read More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Immigration Guides */}
      <section className="immigration-guides-section">
        <div className="container">
          <div className="section-header">
            <h2>Immigration Guides</h2>
            <Link to="/resources/guides" className="view-all">View All Guides</Link>
          </div>
          <div className="guides-grid">
            {guides.map(guide => (
              <div key={guide.id} className="guide-card">
                <div className="guide-image">
                  <img src={guide.image} alt={guide.title} />
                  {guide.downloadable && <span className="downloadable-badge">Downloadable</span>}
                </div>
                <div className="guide-content">
                  <h3>{guide.title}</h3>
                  <p>{guide.description}</p>
                  <Link to={`/resources/guides/${guide.id}`} className="btn btn-outline">View Guide</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="success-stories-section">
        <div className="container">
          <div className="section-header">
            <h2>Success Stories</h2>
            <Link to="/resources/success-stories" className="view-all">View All Stories</Link>
          </div>
          <div className="stories-grid">
            {successStories.map(story => (
              <div key={story.id} className="story-card">
                <div className="story-image">
                  <img src={story.image} alt={story.title} />
                  <span className="story-country">{story.country}</span>
                </div>
                <div className="story-content">
                  <h3>{story.title}</h3>
                  <p>{story.description}</p>
                  <Link to={`/resources/success-stories/${story.id}`} className="read-more">Read Full Story</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Calculators */}
      <section className="tools-section">
        <div className="container">
          <div className="section-header">
            <h2>Tools & Calculators</h2>
            <Link to="/resources/tools" className="view-all">View All Tools</Link>
          </div>
          <div className="tools-grid">
            <div className="tool-card">
              <div className="tool-icon">
                <i className="fas fa-calculator"></i>
              </div>
              <h3>Points Calculator</h3>
              <p>Estimate your score for points-based immigration systems.</p>
              <Link to="/resources/tools/points-calculator" className="btn btn-outline">Use Calculator</Link>
            </div>
            <div className="tool-card">
              <div className="tool-icon">
                <i className="fas fa-coins"></i>
              </div>
              <h3>Cost Estimator</h3>
              <p>Calculate the total cost of your immigration journey.</p>
              <Link to="/resources/tools/cost-estimator" className="btn btn-outline">Use Estimator</Link>
            </div>
            <div className="tool-card">
              <div className="tool-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>Processing Time Tracker</h3>
              <p>Check current processing times for various programs.</p>
              <Link to="/resources/tools/processing-times" className="btn btn-outline">View Tracker</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay Updated</h2>
            <p>Subscribe to our newsletter for the latest immigration news, tips, and resources.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" required />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
            <p className="newsletter-note">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Immigration Journey?</h2>
            <p>Take our free assessment to discover your personalized immigration options.</p>
            <Link to="/signup" className="btn btn-primary btn-large">Start Free Assessment</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
