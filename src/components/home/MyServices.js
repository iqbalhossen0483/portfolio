import React, { useState } from "react";
import services from "../../services/services";

const MyServices = () => {
  const [highlight, setHighlight] = useState(-1);

  return (
    <div id='service' className='pt-16'>
      <header>
        <h6>What can I do for you</h6>
        <h1>My Services</h1>
        <p className='text-justify px-3 md:px-0 tag'>
          With my deep knowledge of JavaScript, I can provide comprehensive
          solutions across various domains, including web and mobile application
          development. JavaScript is a versatile programming language capable of
          handling a wide range of tasks, from building dynamic web applications
          to developing mobile applications. My expertise allows me to leverage
          JavaScript to create efficient, scalable solutions that meet the
          unique needs of your projects.
        </p>
      </header>
      <section className='service-container'>
        {services.map((data, i) => (
          <div
            onMouseEnter={() => setHighlight(i)}
            onMouseLeave={() => setHighlight(-1)}
            key={data.id}
            className='item'
          >
            <h3
              className={`service-item-header ${
                highlight === i ? "gradiant-text" : ""
              }`}
            >
              {data.header}
            </h3>
            <p className='text-justify mb-2 text-primary font-medium'>
              {data.body}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default MyServices;
