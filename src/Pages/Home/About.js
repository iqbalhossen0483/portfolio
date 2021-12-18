import { Grid, Tab, Tabs } from '@mui/material';
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const About = () => {

    const routes = ["/main-skill", "/experience", "/education"];
    const location = useLocation();

    return (
        <div id='about' className='about pt-24 p-5'>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <div className='h-full flex justify-center items-center'>
                        <img
                            className='bg-gray-200 w-4/6 rounded-lg pr-10'
                            src="https://i.ibb.co/t29j3gB/Promo-Facebook-Ad-Carousel-removebg-preview.png" alt="" />
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div>
                        <h2 className='text-4xl font-bold py-5'>About Me</h2>
                        <p>I'm Md Iqbal Hossen. A self-motivated and enthusiastic web developer with a deep interest in JavaScript. My Core Skill is based on JavaScript and i love to do something different using this and explore this evry kind of situation, bacouse I know its really a smart programming language. I have a dream with this, I'm trying to explore it.</p>
                        <div>
                            <div className='tabs mt-5'>
                                <Tabs
                                    value={location.pathname !== "/" ? location.pathname : false}>
                                    <Tab
                                        label="Main Skill"
                                        value={routes[0]}
                                        component={Link}
                                        to={routes[0]}
                                    />
                                    <Tab
                                        label="Experience"
                                        value={routes[1]}
                                        component={Link}
                                        to={routes[1]}
                                    />
                                    <Tab
                                        label="Education"
                                        value={routes[2]}
                                        component={Link}
                                        to={routes[2]}
                                    />
                                </Tabs>
                            </div>
                            <div>
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default About;