import React from 'react';
import Navigation from './Navigation';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <a href="/" className="logo">
          codeBernard
        </a>
        <div className="header-right">
          <Navigation />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
