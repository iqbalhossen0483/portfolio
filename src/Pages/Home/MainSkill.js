import { LinearProgress } from '@mui/material';
import React from 'react';

const MainSkill = () => {
    return (
        <div className='text-xl font-semibold'>
            <div className='flex justify-between mt-5'><p>HTLM</p> <p>95%</p></div>
            <LinearProgress variant="determinate" value={95} />
            <div className='flex justify-between mt-5'><p>CSS</p> <p>80%</p></div>
            <LinearProgress variant="determinate" value={80} />
            <div className='flex justify-between mt-5'><p>JavaSript</p> <p>75%</p></div>
            <LinearProgress variant="determinate" value={75} />
            <div className='flex justify-between mt-5'><p>React Js</p> <p>85%</p></div>
            <LinearProgress variant="determinate" value={85} />
            <div className='flex justify-between mt-5'><p>Node Js</p> <p>60%</p></div>
            <LinearProgress variant="determinate" value={60} />
            <div className='flex justify-between mt-5'><p>Express Js</p> <p>95%</p></div>
            <LinearProgress variant="determinate" value={95} />
            <div className='flex justify-between mt-5'><p>MongoDB</p> <p>70%</p></div>
            <LinearProgress variant="determinate" value={70} />
        </div>
    );
};

export default MainSkill;