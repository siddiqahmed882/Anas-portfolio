import React from 'react';

const Project = ({ project }) => {
  const { title, description, imgUrl, githubUrl, hostedUrl } = project;
  const imgSrc = require(`../assets/img/${imgUrl}`);
  return (
    <div className='project'>
      <div className='project__details'>
        <h4 className='project__title'>{title}</h4>
        <p className='project__description'>{description}</p>
        <div className='project__links'>
          <a href={hostedUrl} className='btn btn--accent'>
            Hosted Site
          </a>
          <a href={githubUrl} className='btn'>
            Github Repo
          </a>
        </div>
      </div>
      <img src={imgSrc.default} alt='' className='project__img' />
    </div>
  );
};

export default Project;
