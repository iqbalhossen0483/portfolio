import React from "react";

import MyServices from "../components/home/MyServices";
import MyProject from "../components/home/MyProject";
import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
import Contact from "../components/home/Contact";
import Banner from "../components/home/Banner";
import Skills from "../components/home/Skills";
import About from "../components/home/About";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <MyServices />
      <Skills />
      <MyProject />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
