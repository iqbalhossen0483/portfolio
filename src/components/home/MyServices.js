import React, { useState } from "react";
import services from "../../services/services";

const MyServices = () => {
  const [highlight, setHighlight] = useState(-1);

  return (
    <div id='service' className='pt-16'>
      <header>
        <p className='gradiant-text'>What can I do for you</p>
        <h1>My Services</h1>
        <p className='text-justify px-3 md:px-0 tag'>
          Since my knowledge based on JavaScript, I can serve you all about
          this. You know, Javascript a programming language which is able to
          handle all kind of things like web app, android app and soo on.
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
            <p className='text-justify mb-2'>{data.body}</p>

            {data.languages.map((ln, i) => (
              <span className='language' key={i}>
                {ln}
              </span>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
};

export default MyServices;
