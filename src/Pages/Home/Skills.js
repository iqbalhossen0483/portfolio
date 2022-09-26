import React from "react";
import data from "../../services/data";

const Skills = () => {
  return (
    <div className='skill-container'>
      <header>
        <p className='gradiant-text'>At a glance all my skills</p>
        <h1>My Skills</h1>
        <p>Language, Framework & other</p>
      </header>
      <section className='skills'>
        {data.skills.map((skill) => (
          <div className='item' key={skill.name}>
            <img src={skill.logo} alt='' />
            <p>{skill.name}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Skills;
