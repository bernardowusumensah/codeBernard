import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>codeBernard</h3>
            <p>
              Leading the way in innovative technology solutions. 
              We help businesses transform and thrive in the digital age.
            </p>
          </div>
          
          <div className="footer-section">
            <h3>Services</h3>
            <p><a href="#web-development">Web Development</a></p>
            <p><a href="#mobile-apps">Mobile Applications</a></p>
            <p><a href="#cloud-solutions">Cloud Solutions</a></p>
            <p><a href="#consulting">IT Consulting</a></p>
          </div>
          
          <div className="footer-section">
            <h3>Company</h3>
            <p><a href="#about">About Us</a></p>
            <p><a href="#careers">Careers</a></p>
            <p><a href="#blog">Blog</a></p>
            <p><a href="#news">News</a></p>
          </div>
          
          <div className="footer-section">
            <h3>Contact</h3>
            <p>📧 tgatelbernard@gmail.com</p>
            <p>📞 +1 437-440-9767</p>
            <p>📍 Finch/Weston, North York, Toronto Canada</p>
            <div className="social-links">
              <a href="https://github.com/bernardowusumensah/" target="_blank" rel="noopener noreferrer">
                🔗 GitHub
              </a>
              <a href="https://www.linkedin.com/in/owusu-mensah-bernard-77a62aaa/" target="_blank" rel="noopener noreferrer">
                💼 LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 codeBernard. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
