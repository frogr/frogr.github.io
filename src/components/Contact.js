import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="textContent">
      <p> feel free to contact me for anything you need! </p>
      <p>email: austindanielfrench@gmail.com</p>
      <p>cell: (209) 409 0220</p>

      <p>
        {' '}
        <a href="https://www.linkedin.com/in/austindanielfrench/">linkedin</a>
      </p>
      <p>
        {' '}
        <a href="https://www.github.com/frogr/">github</a>
      </p>
      <p>
        <Link to="/resume">resume</Link>
      </p>
    </div>
  );
};
export default Contact;
