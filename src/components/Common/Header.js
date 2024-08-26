import { useLocation } from "react-router-dom";
import React from "react";

const Header = () => {
  const location = useLocation();
  const hash = location.hash;

  const menus = [
    { txt: "Home", hash: "#top" },
    { txt: "About", hash: "#about-container" },
    { txt: "Service", hash: "#service" },
    { txt: "Portfolio", hash: "#project-container" },
    { txt: "Contact", hash: "#contact-container" },
  ];

  return (
    <div className='header-wrapper '>
      <div className='col-span-2'>
        <div className='menu-container'>
          <img className='w-12 hidden md:block' src='./logo.png' alt='' />
          {menus.map((menu, i) => (
            <a
              className={hash === menu.hash ? "menu-active" : ""}
              href={menu.hash}
              key={i}
            >
              {menu.txt}
            </a>
          ))}
        </div>
      </div>
      <div className='hidden md:flex items-center justify-end gap-5'>
        <div className='space-x-3 flex items-center'>
          <a
            href='https://www.facebook.com/profile.php?id=100009923686402'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fab fa-facebook-square text-light hover:text-white text-2xl'></i>
          </a>
          <a
            href='https://www.linkedin.com/in/md-iqbal-hossen0483/'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fab fa-linkedin text-2xl text-light hover:text-white'></i>
          </a>
          <a
            href='https://github.com/iqbalhossen0483'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fab fa-github text-light hover:text-white text-2xl'></i>
          </a>
        </div>
        <a
          className='hidden lg:block btn btn-2 border-light'
          href='#contact-container'
        >
          Contact me
        </a>
      </div>
    </div>
  );
};

export default Header;
