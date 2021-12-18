import React from 'react';

const MyServices = () => {

    return (
        <div id='service' className='text-xl pt-16'>
            <div className='md:w-2/4 px-2 md:px-0 mx-auto my-10 text-center'>
                <p className='caption'>What can i do for you</p>
                <p className='text-4xl md:text-5xl font-bold pb-5'>My Awesome Services</p>
                <p className='text-justify'>Since my knowledge based on JavaScript, I can serve you all about this. You know, Javascript a programming language which is able to handle all kind of things like web app, android app and soo on.</p>
            </div>
            <div className='md:px-10 md:grid grid-cols-3 gap-5'>
                <div className="border rounded-md p-5 hover:shadow-lg">
                    <i className="fas fa-store text-4xl text-common"></i>
                    <p className="text-3xl my-5 font-semibold">Build a website</p>
                    <p className='text-justify'>
                        If you want to build your own website from zero. I can help you to do this. I am able to build a website from zero. Just you have to give me a design and task requirment. In this case, I'll build your website with ... <br />
                        <span className='language'>HTML</span>
                        <span className='language'>CSS</span>
                        <span className='language'>JavaScript</span>
                        <span className='language'>React Js</span>
                        <span className='language'>React Router</span>
                        <span className='language'>Node JS</span>
                        <span className='language'>Express Js</span>
                        <span className='language'>MongoDB</span>
                        <span className='language'>Mongoose</span>
                    </p>
                </div>
                <div className="border my-5 md:my-0 rounded-md p-5 hover:shadow-lg">
                    <i className="fas fa-drafting-compass text-4xl text-common"></i>
                    <p className="text-3xl my-5 font-semibold">Web Designer UI/UX</p>
                    <p className='text-justify'>
                        If you design a website on your mind, now you are looking for a developer to create this, I can help you. Or, <br />
                        You already have a website, you are looking for a developer to develop it, Modify it, Update it, Responsive it, Impove performance, Adding extra features. You can choose me for your work. In this case I'll help you whatever your website need. (obeously, based on <span className='language'>JavaScript</span>
                        <span className='language'>React Js</span> )
                    </p>
                </div>
                <div className="border my-5 md:my-0 rounded-md p-5 hover:shadow-lg">
                    <i className="fab fa-react text-5xl text-common"></i>
                    <p className="text-3xl my-5 font-semibold">React Developer</p>
                    <p className='text-justify'>
                        If you have a website or wanna build a website which is built by React. It's great. Bacause, React is a most popular library for Javascript. In this case, I can help you to build or develop or work with this and In one word, I can help you every thing about React Js. <br />
                        <span className='language'>JavaScript</span>
                        <span className='language'>React Js</span>
                    </p>
                </div>
                <div className="border rounded-md p-5 hover:shadow-lg">
                    <i className="fab fa-node text-5xl text-common"></i>
                    <p className="text-3xl my-5 font-semibold">Back-end Developer</p>
                    <p className='text-justify'>
                        I am a Font-end developer as well as Back-end. For Back-end, I use Node Js. Node js is not a programming language, It's Javascript runtime. It's a sample of V8 engine which is used in Google Chrome Browser. I'm experienced about it. I can give you a powerful and more secured web server which is written by Node Js. And for storing data I use MongoDB Cloud. <br />
                        <span className='language'>Node JS</span>
                        <span className='language'>Express Js</span>
                        <span className='language'>MongoDB</span>
                        <span className='language'>Mongoose</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MyServices;