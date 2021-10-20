import React from 'react';
import { projectsData as projects } from '../assets/projectsData/projectsData';

import '../assets/css/projects.css';
import Project from './Project';
const Projects = () => {
  return (
    <section className='projects__section'>
      <header className='projects__header'>
        <h3>Projects</h3>
        <p>
          {`These are my projects below. I’m Frontend Developer in addition to this I’m also
          a UI/UX designer. And doing it for the last year & making clients happy. This is
          all about me now have a look on these projects.`}
        </p>
      </header>
      <div className='projects'>
        {projects.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
