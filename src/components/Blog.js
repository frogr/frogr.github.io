import React from 'react';
import BlogContent from '../blog/blog.json';

const Blog = () => {
  return (
    <div>
      {BlogContent.map(blog => {
        return (
          <div>
            <h2>{blog.title}</h2>
            <p>{blog.date}</p>
            <p>{blog.body}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Blog;
