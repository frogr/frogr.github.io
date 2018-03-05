import React from 'react';
import BlogContent from './blog.json';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div>
      {BlogContent.slice(0)
        .reverse()
        .map(blog => {
          return (
            <div>
              <h2>
                <Link to={'/blog/' + blog.id}>{blog.title}</Link>
              </h2>
              <p>{blog.date}</p>
              <p>{blog.blurb}</p>
            </div>
          );
        })}
    </div>
  );
};
export default Blog;
