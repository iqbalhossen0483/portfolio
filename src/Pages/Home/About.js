import React from "react";
import data from "../../services/data";

const About = () => {
  return (
    <div id='about-container'>
      <div className='flex justify-center'>
        <img className='h-[80%]' src='./about-img.png' alt='' />
      </div>
      <div className='pb-10 md:pb-0'>
        <h1>About Me</h1>
        <p className='text-xl'>
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
