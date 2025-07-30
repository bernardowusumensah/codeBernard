import React from 'react';

const CallToAction = () => {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-content">
        <h2>Ready to Transform Your Business?</h2>
        <p>
          Join hundreds of satisfied clients who have already transformed their 
          businesses with our cutting-edge technology solutions.
        </p>
        <div className="cta-buttons">
          <a href="#contact-form" className="cta-button primary">
            Get Free Consultation
          </a>
          <a href="#portfolio" className="cta-button secondary">
            View Our Work
          </a>
        </div>
        <div className="cta-stats">
          <div className="stat">
            <span className="stat-number">50+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat">
            <span className="stat-number">98%</span>
            <span className="stat-label">Client Satisfaction</span>
          </div>
          <div className="stat">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Support Available</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
