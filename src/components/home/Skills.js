import React from "react";
import data from "../../services/data";

const Skills = () => {
  return (
    <div className='skill-container'>
      <header>
        <p className='gradiant-text'>At a glance all my skills</p>
        <h1>My Skills</h1>
        <p className='tag'>Language, Framework & other</p>
      </header>
      <section className='skills'>
        {data.skills.map((skill) => (
          <div className='item' key={skill.name}>
            <img src={skill.logo} alt='' />
            <p className='font-medium my-1'>{skill.name}</p>
            <div className='skill-lavel'>
              <p>{skill.lavel}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Skills;
