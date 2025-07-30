import React from 'react';
import meImage from '../assets/me.jpg';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <div className="about-text">
              <h1>About Bernard</h1>
              <p className="about-intro">
                Passionate technology professional with expertise in DevOps, Cloud Engineering, 
                Software Development, and Data Science. I bring innovative solutions to complex 
                challenges and help organizations thrive in the digital landscape.
              </p>
            </div>
            <div className="about-image">
              <img src={meImage} alt="Bernard Owusu-Mensah" />
            </div>
          </div>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-section">
            <h2>My Journey</h2>
            <p>
              With a strong foundation in computer science and years of hands-on experience, 
              I've developed a comprehensive skill set that spans multiple domains of technology. 
              My journey began with a fascination for how technology can solve real-world problems, 
              and it has evolved into a career dedicated to building robust, scalable, and 
              innovative solutions.
            </p>
            <p>
              From designing cloud architectures to developing data-driven applications and 
              implementing DevOps practices, I've had the privilege of working on diverse 
              projects that have shaped my understanding of modern technology ecosystems.
            </p>
          </div>

          <div className="about-section">
            <h2>My Expertise</h2>
            <div className="expertise-grid">
              <div className="expertise-item">
                <h4>☁️ DevOps & Cloud Engineering</h4>
                <p>
                  Designing and implementing scalable cloud infrastructures, CI/CD pipelines, 
                  and automated deployment strategies using AWS, Azure, Docker, and Kubernetes.
                </p>
              </div>
              <div className="expertise-item">
                <h4>💻 Software Engineering</h4>
                <p>
                  Full-stack development with modern frameworks, API design, microservices 
                  architecture, and building maintainable, high-performance applications.
                </p>
              </div>
              <div className="expertise-item">
                <h4>📊 Data Science & Analytics</h4>
                <p>
                  Machine learning, data analysis, predictive modeling, and transforming 
                  raw data into actionable business insights using Python, R, and modern ML frameworks.
                </p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>My Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <h4>💡 Innovation</h4>
                <p>Always exploring new technologies and approaches to solve complex problems.</p>
              </div>
              <div className="value-item">
                <h4>🤝 Collaboration</h4>
                <p>Believing in the power of teamwork and open communication.</p>
              </div>
              <div className="value-item">
                <h4>📈 Continuous Learning</h4>
                <p>Staying current with industry trends and continuously improving my skills.</p>
              </div>
              <div className="value-item">
                <h4>🎯 Quality</h4>
                <p>Committed to delivering high-quality, reliable, and maintainable solutions.</p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>Let's Connect</h2>
            <p>
              I'm always interested in discussing new opportunities, sharing knowledge, or collaborating 
              on exciting projects. Feel free to reach out!
            </p>
            <div className="contact-info">
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
        </div>
      </section>
    </div>
  );
};

export default About;
