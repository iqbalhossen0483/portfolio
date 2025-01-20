import React from "react";

import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
import About from "../components/home/About";
import Banner from "../components/home/Banner";
import Contact from "../components/home/Contact";
import MyProject from "../components/home/MyProject";
import MyServices from "../components/home/MyServices";
import Skills from "../components/home/Skills";

const Home = () => {
  return (
    <div className='flex flex-col  items-center'>
      <div className='w-full flex justify-center bg-[#1c90a6] shadow'>
        <div className='container'>
          <Header />
        </div>
      </div>
      <div className='container'>
        <Banner />
        <About />
        <MyServices />
        <Skills />
        <MyProject />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
