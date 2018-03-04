import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BlogRoot from './components/BlogRoot';
import BlogPost from './components/BlogPost';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Header from './components/Header';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <div>
    <Router>
      <div>
        <Route path="/*" component={Header} />
        <Route exact path="/blog" component={BlogRoot} />
        <Route exact path="/blog/:id" component={BlogPost} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </Router>
  </div>,
  document.getElementById('root')
);
registerServiceWorker();
