import React from "react";
import Typical from "react-typical";

import data from "../../services/data";

const Banner = () => {
  return (
    <div className='banner-container'>
      <div className='flex justify-center items-center'>
        <img
          className='w-[250px] h-[250px] animate-bounce-up'
          src='./iqbal.png'
          alt=''
        />
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
          <p className='tag'>Full Stack Developer</p>
          <p className='mt-5 text-justify font-medium text-gray-700'>
            {data.shortDescription}
          </p>
          <div className='flex flex-wrap my-6 gap-2'>
            <a
              className='btn text-base'
              href='https://drive.google.com/uc?export=download&id=1tzCBcs2sx_9V1PWreVFvzIHl5-BJO0Yb'
            >
              <i className='fa fa-download mr-3 animate-bounce' />
              Download resume
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              className='btn text-base'
              href='https://drive.google.com/file/d/1tzCBcs2sx_9V1PWreVFvzIHl5-BJO0Yb/view'
            >
              <i className='fa fa-eye mr-3 animate-pulse' />
              View Online
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
