import Typical from "react-typical";
import React from "react";

import data from "../../services/data";

const Banner = () => {
  return (
    <div className='banner-container'>
      <div className='flex justify-center items-center'>
        <img className='w-[250px] h-[250px]' src='./iqbal.png' alt='' />
      </div>
      <section className='flex flex-col justify-center h-full px-7'>
        <div className='flex text-3xl lg:text-4xl font-semibold font-baloo-bhai space-x-2'>
          <p> I Am</p>
          <div>
            <Typical
              steps={["", 2000, ` MD Iqbal Hossen`, 3000]}
              loop={Infinity}
              wrapper='p'
            />
          </div>
        </div>
        <div>
          <p className='tag'>MERN Stack Developer</p>
          <p className='mt-5 text-justify font-medium text-gray-700'>
            {data.shortDescription}
          </p>
          <div className='my-6 space-x-2'>
            <a
              className='btn text-base'
              href='https://drive.google.com/u/1/uc?id=1DLwSkiN7B4pvBIRzUI6_NBGsESu0VrXo&export=download'
            >
              <i className='fa fa-download mr-3' />
              Download resume
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              className='btn text-base'
              href='https://drive.google.com/u/1/uc?id=1DLwSkiN7B4pvBIRzUI6_NBGsESu0VrXo&export=share'
            >
              <i className='fa fa-eye mr-3' />
              View Online
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
