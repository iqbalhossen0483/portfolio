import React from 'react';

const MyProject = () => {

    return (
        <div id='project' className='pb-20 pt-16'>
            <div className='md:w-2/4 mx-auto my-10 text-center'>
                <p className='caption'>My Compelete Projects</p>
                <p className='text-4xl md:text-5xl font-bold pb-5'>My Latest Projects</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus et eum sunt neque commodi id pariatur! Animi,</p>
            </div>
            <div className='md:h-96 overflow-hidden md:grid grid-cols-3 gap-5 px-5'>
                <div className="bg-white h-96 overflow-hidden rounded-lg my-project-1 relative">
                    <img className='rounded-lg' src="https://i.ibb.co/KLc22ZN/screencapture-cycle-mart-3ff64-web-app-2021-12-16-17-06-47.png" alt="" />
                    <div className='project-description absolute text-xl top-0'>
                        <p> &#8226; It’s an E-commerce website. Here users can add their chosen products and order those together or can order a single product.</p>
                        <p> &#8226; Made an Admin who can add, update, delete any events and he can make another admin.</p>
                        <p> &#8226; Made responsive mobile and laptop.</p>

                        <div className='flex justify-center'>
                            <a
                                href="https://cycle-mart-3ff64.web.app/" className='btn'
                                target="_blank"
                                rel='noreferrer'>
                                View Full
                            </a>
                        </div>
                        <p className='text-3xl font-semibold mt-5'>E-commerce Website</p>
                    </div>
                </div>
                <div className="bg-white my-7 md:my-0 h-96 overflow-hidden rounded-lg relative my-project-2">
                    <img className='rounded-lg' src="https://i.ibb.co/mHcskc0/screencapture-tourism-web-e4f05-web-app-2021-12-16-18-25-05.png" alt="" />
                    <div className='project-description absolute text-xl top-0'>
                        <p> &#8226; It’s a Tour related website. Here users can gain knowledge about a place and go there by themself or go with site administrators.</p>
                        <p> &#8226; Admin can see all appointments together and manage them.</p>
                        <p> &#8226; Users can write blogs about various places.</p>
                        <p> &#8226; Made responsive mobile and laptop.</p>
                        <div className='flex justify-center'>
                            <a
                                href='https://tourism-web-e4f05.web.app/' className='btn'
                                target="_blank"
                                rel='noreferrer'>
                                View Full
                            </a>
                        </div>
                        <p className='text-3xl font-semibold mt-5'>Bloging Website</p>
                    </div>
                </div>
                <div className="bg-white h-96 overflow-hidden rounded-lg relative my-project-3">
                    <img className='rounded-lg' src="https://i.ibb.co/8NL0pSH/screencapture-islamia-hospital-web-app-2021-12-16-18-24-27.png" alt="" />
                    <div className='project-description absolute text-xl top-0'>
                        <p> &#8226; It’s a Hospital related website. Here users can take appointments on specific dates.</p>
                        <p> &#8226; Admin can see all appointments together and manage them.</p>
                        <p> &#8226; Made responsive mobile and laptop.</p>
                        <div className='flex justify-center'>
                            <a
                                href='https://islamia-hospital.web.app/' className='btn mb-5'
                                target="_blank"
                                rel='noreferrer'>
                                View Full
                            </a>
                        </div>
                        <p className='text-3xl font-semibold mt-5'>Hospital Website</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProject;