import React from 'react';
import BlogContent from './blog.json';

const BlogPost = ({ match }) => {
  return (
    <div>
      <h2>{BlogContent[match.params.id].title}</h2>
      <p>{BlogContent[match.params.id].date}</p>
      <p className="summary">{BlogContent[match.params.id].summary}</p>
      <p>
        <a href={BlogContent[match.params.id].link}>
          read the whole story on medium
        </a>
      </p>
    </div>
  );
};

export default BlogPost;
