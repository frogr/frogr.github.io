import React from 'react';
import BlogContent from '../blog/blog.json';

const BlogPost = ({ match }) => {
  return (
    <div>
      <h2>{BlogContent[match.params.id].title}</h2>
      <p>{BlogContent[match.params.id].date}</p>
      <p>{BlogContent[match.params.id].body}</p>
    </div>
  );
};

export default BlogPost;
