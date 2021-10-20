import React from 'react';

const Project = ({ project }) => {
  const { title, abstract, description, imgUrl, githubUrl, hostedUrl } = project;
  const imgSrc = require(`../assets/img/${imgUrl}`);
  console.log(imgSrc);
  return (
    <div className='project'>
      <div className='project__abstract'>
        <h3>{title}</h3>
        <p>{abstract}</p>
      </div>
      <p className='project__details'>{description}</p>
      <div className='project__links'>
        <a href={hostedUrl} className='btn btn--accent'>
          Hosted Site
        </a>
        <a href={githubUrl} className='btn'>
          Github Repo
        </a>
      </div>
      <img src={imgSrc.default} alt='' className='project__img' />
    </div>
  );
};

export default Project;
