import React from "react";

import data from "../../services/data";

const About = () => {
  return (
    <div id='about-container'>
      <div className='about-card bg-cover lg:bg-contain w-full lg:w-96 lg:ml-14 my-10 md:my-0'>
        <div>
          <img className='w-[150px] h-[150px]' src='/iqbal-2.png' alt='' />
          <p className='text-sm font-semibold text-primary'>
            I AM MD IQBAL HOSSEN
          </p>
          <p className='text-3xl font-bold my-2 text-primary'>WEB DEVELOPER</p>
          <p className='w-[70%] text-center'>
            An enthusiastic and experienced Full Stack Web Developer
          </p>
          <a
            className='btn mt-5 mb-7'
            href='https://drive.google.com/u/1/uc?id=1DLwSkiN7B4pvBIRzUI6_NBGsESu0VrXo&export=download'
          >
            <i className='fa fa-download mr-3 animate-bounce' />
            DOWNLOAD CV
          </a>
        </div>
      </div>
      <div className='pb-10 md:pb-2  bg-light px-6 py-5 rounded-lg'>
        <h1 className='text-center md:text-left'>About Me</h1>
        <p className='text-gray-700 font-medium'>
          {data.aboutme.map((item, i) => {
            if (typeof item === "string") return <span key={i}>{item}</span>;
            else
              return (
                <a className='text-primary mx-2' key={i} href={item[1]}>
                  {item[0]}
                </a>
              );
          })}
        </p>
      </div>
    </div>
  );
};

export default About;
