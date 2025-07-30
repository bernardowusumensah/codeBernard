import React from 'react';

const Services = () => {
  const services = [
    {
      icon: '☁️',
      title: 'DevOps & Cloud Engineering',
      description: 'Secure, scalable cloud infrastructure with CI/CD pipelines, Kubernetes, and IaC. Security integrated across AWS, Azure, and GCP.',
      features: [
        'Cloud Infrastructure Design & Migration',
        'Kubernetes & Docker Containerization',
        'CI/CD Pipeline Implementation',
        'Infrastructure as Code (Terraform, CloudFormation)',
        'Monitoring & Logging Solutions',
        'Security & Compliance Implementation'
      ],
      technologies: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker', 'Jenkins', 'Terraform', 'Ansible']
    },
    {
      icon: '💻',
      title: 'Software Engineering',
      description: 'Full-stack development with React, Vue.js, Node.js. We deliver responsive UIs, scalable APIs, and maintainable codebases.',
      features: [
        'Frontend Development (React, Vue.js, Angular)',
        'Backend API Development (Node.js, ASP.NET)',
        'Database Design & Optimization',
        'Mobile Application Development',
        'E-commerce Platform Development',
        'Enterprise Software Solutions'
      ],
      technologies: ['React', 'Vue.js', 'Node.js', 'ASP.NET', 'C#', 'PHP-Laravel', 'Express', 'PostgreSQL', 'MongoDB']
    },
    {
      icon: '📊',
      title: 'Data Science & Analytics',
      description: 'ML models, real-time pipelines, and predictive analytics to turn data into actionable insights.',
      features: [
        'Machine Learning Model Development',
        'Real-time Data Pipeline Architecture',
        'Predictive Analytics Solutions',
        'Business Intelligence Dashboards',
        'Data Visualization & Reporting',
        'Big Data Processing & Analysis'
      ],
      technologies: ['Python', 'R', 'TensorFlow', 'PyTorch', 'Apache Spark', 'Tableau', 'Power BI', 'Jupyter']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We start by understanding your business needs, current challenges, and project goals through detailed consultation.'
    },
    {
      step: '02',
      title: 'Architecture & Design',
      description: 'Our team designs a comprehensive solution architecture tailored to your specific requirements and scalability needs.'
    },
    {
      step: '03',
      title: 'Development & Implementation',
      description: 'Using agile methodologies, we develop and implement solutions with regular updates and feedback cycles.'
    },
    {
      step: '04',
      title: 'Testing & Deployment',
      description: 'Rigorous testing ensures quality, followed by smooth deployment with minimal disruption to your operations.'
    },
    {
      step: '05',
      title: 'Support & Maintenance',
      description: 'Ongoing support, monitoring, and maintenance to ensure optimal performance and continuous improvement.'
    }
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="services-hero-content">
          <h1>Our Services</h1>
          <p className="services-hero-subtitle">
            Comprehensive technology solutions designed to transform your business and drive growth
          </p>
        </div>
      </section>

      <section className="services-main">
        <div className="services-container">
          <div className="section-header">
            <h2>What We Offer</h2>
            <p>From cloud infrastructure to data analytics, we provide end-to-end technology solutions</p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-header">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                </div>
                <p className="service-description">{service.description}</p>
                
                <div className="service-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="service-technologies">
                  <h4>Technologies:</h4>
                  <div className="tech-tags">
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="services-container">
          <div className="section-header">
            <h2>Our Process</h2>
            <p>A proven methodology that ensures successful project delivery every time</p>
          </div>

          <div className="process-steps">
            {processSteps.map((process, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{process.step}</div>
                <div className="step-content">
                  <h3>{process.title}</h3>
                  <p>{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="services-container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Let's discuss how we can help transform your business with the right technology solutions.</p>
            <div className="cta-buttons">
              <a href="#contact" className="cta-button primary">
                Get In Touch
              </a>
              <a href="/about" className="cta-button secondary">
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
