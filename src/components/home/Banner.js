import React from "react";
import Typical from "react-typical";
import data from "../../services/data";

const Banner = () => {
  return (
    <div className='banner-container'>
      <section className='flex flex-col justify-center h-full px-7'>
        <div className='flex text-4xl font-semibold font-baloo-bhai space-x-2'>
          <p> I am</p>
          <div>
            <Typical
              steps={["", 1000, ` MD Iqbal Hossen`, 2000]}
              loop={Infinity}
              wrapper='p'
            />
          </div>
        </div>
        <div className='text-xl'>
          <p className='tag'>MERN Stack Web Developer</p>
          <p className='mt-5'>{data.shortDescription}</p>
          <div className='my-6'>
            <a
              className='btn text-base'
              href='https://drive.google.com/u/1/uc?id=1DLwSkiN7B4pvBIRzUI6_NBGsESu0VrXo&export=download'
            >
              <i className='fa fa-download mr-3' />
              Download my resume
            </a>
          </div>
        </div>
      </section>

      <div className='flex justify-center items-center'>
        <img className='profile' src='./profile-img.png' alt='' />
      </div>
    </div>
  );
};

export default Banner;
