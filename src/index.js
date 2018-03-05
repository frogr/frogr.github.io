import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './components/About.js';
import BlogRoot from './components/blog/BlogRoot';
import BlogPost from './components/blog/BlogPost';
import Contact from './components/Contact';
import ProjectsRoot from './components/project/ProjectsRoot';
import ProjectPost from './components/project/ProjectPost';
import Header from './components/Header';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <div>
    <Router>
      <div>
        <Route path="/*" component={Header} />
        <Route exact path="/" component={About} />
        <Route exact path="/blog" component={BlogRoot} />
        <Route exact path="/blog/:id" component={BlogPost} />
        <Route exact path="/projects" component={ProjectsRoot} />
        <Route exact path="/projects/:id" component={ProjectPost} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </Router>
  </div>,
  document.getElementById('root')
);
registerServiceWorker();
