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
