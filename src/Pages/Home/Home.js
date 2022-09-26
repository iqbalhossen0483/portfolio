import React from "react";
import Header from "../Common/Header";
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Footer from "./Footer";
import MyProject from "./MyProject";
import MyServices from "./MyServices";
import Skills from "./Skills";

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
