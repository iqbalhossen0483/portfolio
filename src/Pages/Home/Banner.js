import React from "react";
import { Grid } from "@mui/material";
import Typical from "react-typical";

const Banner = () => {
  return (
    <div className='bg-secondary h-2/4 py-10 text-center'>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div className='flex flex-col justify-center h-full'>
            <div className='flex text-3xl font-semibold'>
              <p className='ml-3 md:ml-20 mr-3'>I am,</p>
              <div>
                <Typical
                  steps={["", 1000, " MD IQBAL HOSSEN", 2000]}
                  loop={Infinity}
                  wrapper='P'
                />
              </div>
            </div>
            <div className='text-xl'>
              <p>Full Stack Web Developer</p>
              <p className='mt-5 px-3 md:px-10'>
                I am a Full Stack web developer Experienced in
                Javascript, React Js, NodeJs, MongoDB, React Bootstap,
                Tailwind CSS, MUI
              </p>
              <div className='my-6'>
                <a
                  className='btn'
                  href='https://drive.google.com/u/1/uc?id=1DLwSkiN7B4pvBIRzUI6_NBGsESu0VrXo&export=download'
                >
                  <i className='fa fa-download mr-3 text-xl' />
                  Download my resume
                </a>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div>
            <img
              className=''
              src='https://i.ibb.co/svq4FZb/rsz-my-bg.jpg'
              alt=''
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Banner;
