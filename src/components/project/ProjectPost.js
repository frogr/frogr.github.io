import React from 'react';
// import ProjectContent from './project.json';

const ProjectPost = ({ match }) => {
  return (
    <div>
      <div className="projectInfo textContent" key={ProjectContent[match.params.id].id}>
        <h2>{ProjectContent[match.params.id].title}</h2>
        <p>{ProjectContent[match.params.id].date}</p>
        <p>{ProjectContent[match.params.id].body}</p>
        <p>Technologies used: {ProjectContent[match.params.id].tech}</p>
      </div>
      <img src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png" alt=""/>
      <p>Code available on <a href={ProjectContent[match.params.id].link[0]}>GitHub</a></p>
    </div>
  );
};

export default ProjectPost;
