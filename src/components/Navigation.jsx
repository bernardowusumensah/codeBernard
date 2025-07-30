import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: 'Home', href: '/', isRoute: true },
    { label: 'Services', href: '/services', isRoute: true },
    { label: 'Projects', href: '/projects', isRoute: true },
    { label: 'About Me', href: '/about', isRoute: true },
    { label: 'Contact', href: '/contact', isRoute: true }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (item) => {
    setIsMenuOpen(false);
    
    if (item.isRoute) {
      // Navigate to a different page
      navigate(item.href);
    } else {
      // Scroll to section on current page
      // First check if we're on home page, if not navigate to home first
      if (window.location.pathname !== '/') {
        navigate('/');
        // Wait for navigation then scroll
        setTimeout(() => {
          const element = document.querySelector(item.href);
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start' 
            });
          }
        }, 100);
      } else {
        // Already on home page, just scroll
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
      }
    }
  };

  return (
    <nav>
      <button 
        className="mobile-menu-btn" 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        ☰
      </button>
      <ul className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
        {navItems.map((item, index) => (
          <li key={index}>
            <button 
              onClick={() => handleNavClick(item)}
              className="nav-link"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
