import React from 'react';

const Features = () => {
  const features = [
    {
      icon: '☁️',
      title: 'DevOps & Cloud Engineering',
      description: 'Secure, scalable cloud infrastructure with CI/CD pipelines, Kubernetes, and IaC. Security integrated across AWS, Azure, and GCP.'
    },
    {
      icon: '💻',
      title: 'Software Engineering',
      description: 'Full-stack development with React, Vue.js, Node.js. We deliver responsive UIs, scalable APIs, and maintainable codebases.'
    },
    {
      icon: '📊',
      title: 'Data Science & Analytics',
      description: 'ML models, real-time pipelines, and predictive analytics to turn data into actionable insights.'
    }
  ];

  return (
    <section className="features" id="services">
      <div className="features-content">
        <h2>Why Choose codeBernard?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
