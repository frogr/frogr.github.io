import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="headerContainer">
      <h1>austin french</h1>
      <p>fullstack web developer</p>
      <hr />
      <nav>
        <Link to="/" className="link">
          {' '}
          home{' '}
        </Link>
        /
        <Link to="/blog/" className="link">
          {' '}
          blog{' '}
        </Link>
        /
        <Link to="/projects" className="link">
          {' '}
          projects{' '}
        </Link>
        /
        <Link to="/contact" className="link">
          {' '}
          contact{' '}
        </Link>
      </nav>
    </div>
  );
};
export default Header;
