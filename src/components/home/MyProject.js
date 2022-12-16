import React, { useRef, useState } from "react";
import data from "../../services/data";

const MyProject = () => {
  const [number, setNumber] = useState([0, 6]);
  const go = useRef(null);

  return (
    <div id='project-container'>
      <header>
        <p className='gradiant-text'>My Compeleted Projects</p>
        <h1 className='text-4xl lg:text-5xl'>My Latest Projects</h1>
        <p className='tag'>Here I mentioned some of my projects</p>
      </header>
      <div className='project-wrapper'>
        {data.projects.slice(number[0], number[1]).map((project, i) => (
          <div className='project-item' key={i}>
            <img src={project.img} alt='' />
            <div>
              <p className='name'>{project.name}</p>
              <p className='title'>{project.title}</p>
              <p className='text-sm font-medium'>
                {project.technology.join(", ")}
              </p>
              <div className='flex flex-wrap gap-x-4 gap-y-2 mt-3'>
                <a
                  className='demo-btn'
                  href={project.demo}
                  target='_blank'
                  rel='noreferrer'
                >
                  <span>Demo</span>
                  <i className='fa fa-desktop' aria-hidden='true' />
                </a>
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
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-end mr-10 mt-5'>
        <button
          onClick={() => {
            setNumber((prev) => {
              if (prev[1] === data.projects.length) {
                go.current.click();
                return [0, 6];
              } else return [0, data.projects.length];
            });
          }}
          className='see-more-btn'
        >
          {number[1] === data.projects.length ? "Show less" : "Show More"}
        </button>
        <a hidden ref={go} href='#project-container'>
          go
        </a>
      </div>
    </div>
  );
};

export default MyProject;
