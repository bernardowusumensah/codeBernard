import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission logic (connect to backend)
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      projectType: ''
    });
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      detail: 'tgatelbernard@gmail.com',
      description: 'Send us an email anytime'
    },
    {
      icon: '📞',
      title: 'Phone',
      detail: '+1 437-440-9767',
      description: 'Mon-Fri from 9am to 6pm EST'
    },
    {
      icon: '📍',
      title: 'Location',
      detail: 'Finch/Weston, North York',
      description: 'Toronto, Canada'
    },
    {
      icon: '🔗',
      title: 'GitHub',
      detail: 'bernardowusumensah',
      description: 'Check out my latest projects',
      link: 'https://github.com/bernardowusumensah/'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      detail: 'Bernard Owusu-Mensah',
      description: 'Let\'s connect professionally',
      link: 'https://www.linkedin.com/in/owusu-mensah-bernard-77a62aaa/'
    }
  ];

  const projectTypes = [
    'Web Development',
    'Mobile Application',
    'Cloud Infrastructure',
    'Data Analytics',
    'DevOps Implementation',
    'Consulting',
    'Other'
  ];

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Get In Touch</h1>
          <p className="contact-hero-subtitle">
            Ready to start your next project? Let's discuss how we can help bring your ideas to life.
          </p>
        </div>
      </section>

      <section className="contact-main">
        <div className="contact-container">
          <div className="contact-content">
            
            {/* Contact Information */}
            <div className="contact-info-section">
              <h2>Contact Information</h2>
              <p>Reach out to us through any of the following channels:</p>
              
              <div className="contact-info-grid">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-info-card">
                    <div className="contact-icon">{info.icon}</div>
                    <h3>{info.title}</h3>
                    {info.link ? (
                      <a href={info.link} target="_blank" rel="noopener noreferrer" className="contact-link">
                        <p className="contact-detail">{info.detail}</p>
                      </a>
                    ) : (
                      <p className="contact-detail">{info.detail}</p>
                    )}
                    <p className="contact-description">{info.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-section">
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and we'll get back to you within 24 hours.</p>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="projectType">Project Type</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Brief subject of your inquiry"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us about your project, requirements, timeline, and any specific questions you have..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="contact-container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>
              Whether you need a complete solution or consultation on your existing project, 
              we're here to help you succeed.
            </p>
            <div className="cta-buttons">
              <a href="/services" className="cta-button primary">
                View Our Services
              </a>
              <a href="/about" className="cta-button secondary">
                Learn About Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
