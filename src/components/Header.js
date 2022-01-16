import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="headerContainer">
      <h1>austin french</h1>
      <h3>fullstack web developer</h3>
      <hr />
      <nav>
        <Link to="/" className="link">
          {' '}
          home{' '}
        </Link>
        /
          {' '}
          blog{' '}
         /
          {' '}
          projects{' '}
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
