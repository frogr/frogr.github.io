import React from 'react';
const About = () => {
  return (
    <div className="textContent">
      <p>
        Hi there! I'm Austin French and I'm a web developer, poet, and musician.
        I love to teach and even more I love to learn. I was previously a
        professional Overwatch player, and now I've made the change into
        software engineering and I never want to look back. I'm currently
        looking for opportunities to grow and improve as a developer.
      </p>
      <p>
        I've been programming as a hobbyist for a long time before I ever worked
        professionally in this field, and as such I've built experience in a
        bunch of cool technologies:
      </p>
      <div className="container">
        <div className="col1">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Git</li>
          </ul>
        </div>
        <div className="col2">
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>jQuery</li>
          </ul>
        </div>
        <div className="col3">
          <ul>
            <li>python</li>
            <li>Ruby</li>
            <li>Rails</li>
          </ul>
        </div>
        <div className="col4">
          <ul>
            <li>C</li>
            <li>C++ (UE4)</li>
            <li>C# (Unity)</li>
          </ul>
        </div>
      </div>
      <p>
        I'm a hard worker and I have an insatiable desire to learn. If you would
        like to learn more about me, check out my <a href="/blog">blog</a> where
        I talk about projects I've worked on and my experience in software
        development and esports. If you'd like to contact me in regards to an
        employment opportunity, or even just to say hi, check out my{' '}
        <a href="/contact">contact info</a> page.
      </p>
    </div>
  );
};
export default About;
