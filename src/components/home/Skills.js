import React from "react";
import data from "../../services/data";

const Skills = () => {
  return (
    <div className='skill-container'>
      <header>
        <h6>At a glance all my skills</h6>
        <h1>My Skills</h1>
        <p className='tag'>Language, Framework & other</p>
      </header>
      <section className='px-5 lg:px-24 mt-10 space-y-16'>
        <List title='Frontend Techonology:' data={data.skills.frontend} />
        <List title='Backend Techonology:' data={data.skills.backend} />
        <List title='Mobile Application:' data={data.skills.mobile} />
      </section>
    </div>
  );
};

const List = ({ data, title }) => {
  return (
    <div>
      <h6 className='mb-2 border-b-2 w-fit'>{title}</h6>
      <section className='skills'>
        {data.map((skill) => (
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
