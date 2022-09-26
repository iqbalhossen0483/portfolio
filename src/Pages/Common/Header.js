import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [stiky, setStiky] = useState(false);
  const location = useLocation();
  const hash = location.hash;

  const scroll = () => {
    if (window.scrollY >= 80) {
      setStiky(true);
    } else {
      setStiky(false);
    }
  };
  const goTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", scroll);

  return (
    <div className={`${stiky ? "sticky shadow-md" : ""} header-wrapper`}>
      <div className='col-span-2'>
        <div className='menu-container'>
          <img className='w-12' src='./logo.png' alt='' />
          <a
            className={hash === "#top" ? "menu-active" : ""}
            onClick={goTop}
            href='#top'
          >
            Home
          </a>
          <a
            className={hash === "#about-container" ? "menu-active" : ""}
            href='#about-container'
          >
            About
          </a>
          <a
            className={hash === "#service" ? "menu-active" : ""}
            href='#service'
          >
            Service
          </a>
          <a
            className={hash === "#project-container" ? "menu-active" : ""}
            href='#project-container'
          >
            Portfolio
          </a>
          <a
            className={`${
              hash === "#contact-container" ? "menu-active" : ""
            } hidden md:block`}
            href='#contact-container'
          >
            Contact
          </a>
        </div>
      </div>

      <div className='hidden md:flex items-center justify-end gap-5'>
        <div className='space-x-3 flex items-center'>
          <a
            href='https://www.facebook.com/profile.php?id=100009923686402'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fab fa-facebook-square text-primary text-2xl'></i>
          </a>
          <a
            href='https://www.linkedin.com/in/md-iqbal-hossen0483/'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fab fa-linkedin text-2xl text-blue-800'></i>
          </a>
          <a
            href='https://github.com/iqbalhossen0483'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fab fa-github text-2xl'></i>
          </a>
        </div>
        <a className='btn hidden md:block' href='#hire'>
          Contact me
        </a>
      </div>
    </div>
  );
};

export default Header;
