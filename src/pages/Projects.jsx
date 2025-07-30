import React, { useState, useEffect } from 'react';

// Static fallback data (backup if API fails)
const fallbackProjects = [
  {
    "_id": "68794a5bc5e112180e816f36",
    "title": "Peer to Peer Library",
    "description": "A community base book sharing platform for ease of access.",
    "githubLink": "https://github.com/bernardowusumensah/p2p",
    "liveLink": "https://bernardowusumensah.github.io/p2p/",
    "imageUrl": "https://via.placeholder.com/300x200/667eea/white?text=P2P+Library",
    "technologies": ["HTML", "CSS", "JavaScript", "LocalStorage"]
  },
  {
    "_id": "6879490dc5e112180e816f31",
    "title": "City Weather Condition",
    "description": "A web base app that instantly predicts the weather conditions of two major provinces in Canada",
    "githubLink": "https://github.com/bernardowusumensah/openweather",
    "liveLink": "https://bernardowusumensah.github.io/openweather/",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTlNhIma5xw9N7pGiDy8cMz8S5cVj7ggZWxnioJYdKe793xGwcICtCf0ESXwUrkr77J8&usqp=CAU",
    "technologies": ["JavaScript", "DOM manipulation", "XMLHttpRequest()", "OpenWeatherMap API"]
  },
  {
    "_id": "68794726c5e112180e816f21",
    "title": "Deployment Prank",
    "description": "A useless website that blends fun and creativity for develops yet to deploy an application but realises the code isn't truly working",
    "githubLink": "https://github.com/bernardowusumensah/deploymentPrank",
    "liveLink": "https://bernardowusumensah.github.io/deploymentPrank/",
    "imageUrl": "https://dev-tester.com/content/images/2022/11/facebook_cover_feel_free_to_deploy_on_friday.png",
    "technologies": ["HTML", "CSS", "Javascript"]
  }
];

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        console.log('Fetching projects from API...');
        
        // Try direct API call first
        try {
          const response = await fetch('https://expressjsonapi-1.onrender.com/api/projects', {
            mode: 'cors'
          });
          
          if (response.ok) {
            const data = await response.json();
            console.log('✅ API call successful:', data);
            setProjects(data);
            return;
          }
        } catch (corsError) {
          console.log('⚠️ Direct API call failed (CORS):', corsError.message);
        }
        
        // Try CORS proxy as fallback
        try {
          console.log('Trying CORS proxy...');
          const proxyUrl = 'https://api.allorigins.win/get?url=';
          const targetUrl = encodeURIComponent('https://expressjsonapi-1.onrender.com/api/projects');
          
          const response = await fetch(proxyUrl + targetUrl);
          if (response.ok) {
            const result = await response.json();
            const data = JSON.parse(result.contents);
            console.log('✅ CORS proxy successful:', data);
            setProjects(data);
            return;
          }
        } catch (proxyError) {
          console.log('⚠️ CORS proxy failed:', proxyError.message);
        }
        
        // Use fallback data if all else fails
        console.log('📦 Using fallback data...');
        setProjects(fallbackProjects);
        
      } catch (err) {
        console.error('❌ All methods failed, using fallback:', err);
        setProjects(fallbackProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

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
          {loading ? (
            <div className="loading-placeholder">
              <h3>🚀 Loading Projects...</h3>
              <p>Fetching latest projects from the server...</p>
              <button onClick={() => window.location.reload()}>Retry</button>
            </div>
          ) : error ? (
            <div className="error-placeholder">
              <h3>❌ Error Loading Projects</h3>
              <p>Failed to load projects: {error}</p>
              <button onClick={() => window.location.reload()}>Retry</button>
              <p style={{marginTop: '1rem', fontSize: '0.9rem', color: '#666'}}>
                Check the browser console for more details.
              </p>
            </div>
          ) : (
            <>
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
            </>
          )}
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
