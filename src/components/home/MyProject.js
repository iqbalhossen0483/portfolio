import React from "react";
import data from "../../services/data";

const MyProject = () => {
  return (
    <div id='project-container'>
      <header>
        <p className='gradiant-text'>My Compeleted Projects</p>
        <h1 className='text-4xl lg:text-5xl'>My Latest Projects</h1>
        <p className='tag'>Here I mentioned some of my projects</p>
      </header>
      <div className='project-wrapper'>
        {data.projects.map((project, i) => (
          <div className='project-item' key={i}>
            <img src={project.img} alt='' />
            <div>
              <p className='name'>{project.name}</p>
              <p className='title'>{project.title}</p>
              <p className='text-sm font-medium'>
                {project.technology.join(", ")}
              </p>
              <div className='flex flex-wrap gap-x-4 gap-y-2 mt-3'>
                <a href={project.codeF} target='_blank' rel='noreferrer'>
                  <span>Code F</span>
                  <i className='fa fa-code' aria-hidden='true' />
                </a>
                {project.codeB && (
                  <a href={project.codeB} target='_blank' rel='noreferrer'>
                    <span>Code B</span>
                    <i className='fa fa-code' aria-hidden='true' />
                  </a>
                )}
                <a href={project.demo} target='_blank' rel='noreferrer'>
                  <span>Demo</span>
                  <i className='fa fa-desktop' aria-hidden='true' />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProject;
