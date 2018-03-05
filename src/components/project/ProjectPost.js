import React from 'react';
import ProjectContent from './project.json';

const ProjectPost = ({ match }) => {
  return (
    <div>
      <h2>{ProjectContent[match.params.id].title}</h2>
      <p>{ProjectContent[match.params.id].date}</p>
      <p>{ProjectContent[match.params.id].body}</p>
    </div>
  );
};

export default ProjectPost;
