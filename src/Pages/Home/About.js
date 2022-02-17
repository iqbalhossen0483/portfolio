import { Grid, Tab, Tabs } from '@mui/material';
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const About = () => {

    const routes = ["/main-skill", "/experience", "/education"];
    const location = useLocation();

    return (
        <div id='about' className='about pt-24 p-5'>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <div className='h-full flex justify-center items-center'>
                        <img
                            className='bg-gray-200 md:w-4/6 rounded-lg pr-10'
                            src="https://i.ibb.co/t29j3gB/Promo-Facebook-Ad-Carousel-removebg-preview.png" alt="" />
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div>
                        <h2 className='text-4xl font-bold py-5'>About Me</h2>
                        <p>
                            I am doing Honours on Economics in Dhaka College. My passion is to learn technology so I am doing MERN Stack Web Development with my academic career. As the position is a Web Developer role my keen attention to design and developing knowledge will be an added advantage for me to serve you with a quality-oriented service. I completed a complete MERN Stack Web Development course in <a href='https://web.programming-hero.com'>Programming-hero</a>. Like I said, my passion is to learn new technology. I am implementing various packages and tools after completing that course. Still now I am learning because I believe that learning has no end. I have that ability to learn new technology within a short time if I face something that is new for me. I have that quality to stick to something until I finish it and I feel good to do this. That’s how I solve various problems and increase my knowledge.
                        </p>
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