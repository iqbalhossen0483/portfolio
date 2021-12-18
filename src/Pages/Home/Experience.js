import { LinearProgress } from '@mui/material';
import React from 'react';

const Experience = () => {
    return (
        <div
            style={{ paddingBottom: "6.5rem" }}
            className='text-xl font-semibold'>
            <div className='flex justify-between mt-5'><p>React Router</p> <p>85%</p></div>
            <LinearProgress variant="determinate" value={85} />
            <div className='flex justify-between mt-5'><p>Tailwind CSS</p> <p>80%</p></div>
            <LinearProgress variant="determinate" value={80} />
            <div className='flex justify-between mt-5'><p>React Bootstap</p> <p>70%</p></div>
            <LinearProgress variant="determinate" value={70} />
            <div className='flex justify-between mt-5'><p>Material UI</p> <p>60%</p></div>
            <LinearProgress variant="determinate" value={60} />
            <div className='flex justify-between mt-5'><p>Rechart</p> <p>50%</p></div>
            <LinearProgress variant="determinate" value={50} />
        </div>
    );
};

export default Experience;