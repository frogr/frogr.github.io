import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="headerContainer">
      <h1>austin "frog" french</h1>
      <hr />
      <nav>
        <Link to="/"> home </Link>
        /
        <Link to="/blog"> blog </Link>
        /
        <Link to="/projects"> projects </Link>
        /
        <Link to="/contact"> contact </Link>
      </nav>
    </div>
  );
};
export default Header;
