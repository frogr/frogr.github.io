import React from 'react';
import ProjectContent from './project.json';
import { Link } from 'react-router-dom';

const Project = () => {
  return (
    <div className="textContent">
      {ProjectContent.slice(0)
        .map(project => {
          return (
            <div>
              <h2>
                <Link to={'/projects/' + project.id}>{project.title}</Link>
              </h2>
              <p>{project.date}</p>
              <p>{project.blurb}</p>
            </div>
          );
        })}
    </div>
  );
};
export default Project;
