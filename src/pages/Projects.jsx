import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const apiUrl = 'https://expressjsonapi-1.onrender.com/api/projects';
      
      try {
        console.log('Fetching projects directly from live API...');
        
        // Fetching directly from your live Render URL now that CORS is active
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log('✅ Projects loaded successfully:', data);
        setProjects(data);
        
      } catch (err) {
        console.error('❌ Failed to fetch projects:', err);
        setError(err.message || 'Failed to load projects. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="projects-page">
        <div className="loading-container" style={{ textAlign: 'center', padding: '50px' }}>
          <h2>Loading Projects...</h2>
          <p>Please wait while we wake up the server (this may take up to a minute).</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="projects-page">
        <div className="error-container" style={{ textAlign: 'center', padding: '50px', color: 'red' }}>
          <h2>Error Loading Projects</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="projects-page">
      <section className="projects-hero">
        <div className="projects-hero-content">
          <h1>Projects</h1>
          <p className="projects-hero-subtitle">
            Showcase of innovative solutions and technical achievements
          </p>
        </div>
      </section>

      <section className="projects-main">
        <div className="projects-container">
          <div className="section-header">
            <h2>Featured Projects</h2>
            <p>Here are some of my featured projects built with modern technologies</p>
          </div>
          
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project._id} className="project-card">
                <div className="project-image">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/300x200?text=Project+Image';
                    }}
                  />
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.githubLink && (
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link github-link"
                      >
                        GitHub
                      </a>
                    )}
                    {project.liveLink && (
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link live-link"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-cta">
        <div className="projects-container">
          <div className="cta-content">
            <h2>Interested in Working Together?</h2>
            <p>Let's discuss your project requirements and how we can bring your ideas to life.</p>
            <div className="cta-buttons">
              <a href="#contact" className="cta-button primary">
                Start a Project
              </a>
              <a href="/services" className="cta-button secondary">
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;