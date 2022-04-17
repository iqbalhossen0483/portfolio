import React from "react";

const MyProject = () => {
  return (
    <div id='project' className='pb-20 pt-16'>
      <div className='md:w-2/4 mx-auto my-10 text-center'>
        <p className='caption'>My Compelete Projects</p>
        <p className='text-4xl md:text-5xl font-bold pb-5'>
          My Latest Projects
        </p>
        <p>Here I give some of my project</p>
      </div>
      <div className='project-wrapper'>
        <div className='project-item my-project-1'>
          <img
            className='rounded-lg'
            src='https://i.ibb.co/9Nc51XZ/cycle-mart.png'
            alt=''
          />
          <div className='project-description absolute text-xl top-0'>
            <p className='text-3xl font-semibold mt-2'>
              E-commerce Website
            </p>
            <p>
              &#8226; It is an E-commerce website. Here users can add
              their chosen products and order those together or can
              order a single product.
            </p>
            <p>
              &#8226; Made an Admin who can add, update, delete any
              events and he can make another admin.
            </p>
            <p> &#8226; Used JWT authentication</p>

            <div className='flex justify-center'>
              <a
                href='https://cycle-mart-3ff64.web.app/'
                className='btn'
                target='_blank'
                rel='noreferrer'
              >
                View Full
              </a>
            </div>
          </div>
        </div>
        <div className='my-7 md:my-0 project-item my-project-2'>
          <img
            className='rounded-lg'
            src='https://i.ibb.co/4PdtYjr/tourism.png'
            alt=''
          />
          <div className='project-description absolute text-xl top-0'>
            <p className='text-3xl font-semibold mt-5'>
              Bloging Website
            </p>
            <p>
              &#8226; Here users can gain knowledge about a place and
              go there by themself or go with site administrators.
            </p>
            <p>
              &#8226; Admin can see all appointments together and
              manage them.
            </p>
            <p>&#8226; Users can write blogs about various places.</p>
            <div className='flex justify-center'>
              <a
                href='https://tourism-web-e4f05.web.app/'
                className='btn'
                target='_blank'
                rel='noreferrer'
              >
                View Full
              </a>
            </div>
          </div>
        </div>
        <div className='project-item my-project-3'>
          <img
            className='rounded-lg w-full'
            src='https://i.ibb.co/tDy36V5/hospital.png'
            alt=''
          />
          <div className='project-description absolute text-xl top-0'>
            <p className='text-3xl font-semibold mt-5'>
              Hospital Website
            </p>
            <p>
              &#8226; Here users can take appointments on specific
              dates.
            </p>
            <p>
              &#8226; Admin can see all appointments together and
              manage them.
            </p>
            <p> &#8226; Made responsive mobile and laptop.</p>
            <div className='flex justify-center'>
              <a
                href='https://islamia-hospital.web.app/'
                className='btn mb-5'
                target='_blank'
                rel='noreferrer'
              >
                View Full
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProject;
