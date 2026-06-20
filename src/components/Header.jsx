import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          codeBernard
        </Link>
        <div className="header-right">
          <Navigation />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
