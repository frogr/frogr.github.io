import React from 'react';
import ProjectContent from './project.json';
import { Link } from 'react-router-dom';

const Project = () => {
  return (
    <div>
      {ProjectContent.slice(0)
        .reverse()
        .map(project => {
          return (
            <div>
              <h2>
                <Link to={'/projects/' + project.id}>{project.title}</Link>
              </h2>
              <p>{project.date}</p>
              <p>{project.body}</p>
            </div>
          );
        })}
    </div>
  );
};
export default Project;
