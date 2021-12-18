import React from 'react';
import Header from '../Common/Header';
import About from './About';
import Banner from './Banner';
import Footer from './Footer';
import HireMe from './HireMe';
import MyProject from './MyProject';
import MyServices from './MyServices';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <About />
            <MyServices />
            <MyProject />
            <HireMe />
            <Footer />
        </div>
    );
};

export default Home;