import React from 'react';

const TechStack = () => {
  const techCategories = [
    {
      category: 'Cloud Platforms',
      technologies: ['AWS', 'Azure', 'GCP']
    },
    {
      category: 'Containerization',
      technologies: ['Kubernetes', 'Docker']
    },
    {
      category: 'Backend',
      technologies: ['ASP.NET', 'C#', 'PHP-Laravel', 'Python', 'NodeJS', 'Express']
    },
    {
      category: 'Frontend',
      technologies: ['React']
    },
    {
      category: 'Databases',
      technologies: ['MySQL', 'PostgreSQL', 'MongoDB']
    },
    {
      category: 'APIs',
      technologies: ['REST APIs']
    }
  ];

  return (
    <section className="tech-stack" id="tech-stack">
      <div className="tech-stack-content">
        <h2>Technology Stack</h2>
        <p className="tech-stack-subtitle">
          Cutting-edge technologies I use to build robust, scalable solutions
        </p>
        <div className="tech-categories">
          {techCategories.map((category, index) => (
            <div key={index} className="tech-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="tech-tags">
                {category.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
