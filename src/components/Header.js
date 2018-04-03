import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="headerContainer">
      <h1>austin french</h1>
      <p>fullstack web developer</p>
      <hr />
      <nav>
        <Link to="/"> home </Link>
        /
        <Link to="#"> blog (under construction) </Link>
        /
        <Link to="/projects"> projects </Link>
        /
        <Link to="/contact"> contact </Link>
      </nav>
    </div>
  );
};
export default Header;
