import React from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const hash = location.hash;

  const menus = [
    { txt: "Home", hash: "#top" },
    { txt: "About", hash: "#about-container" },
    { txt: "Service", hash: "#service" },
    { txt: "Project", hash: "#project-container" },
    { txt: "Contact", hash: "#contact-container" },
  ];

  return (
    <div className='header-wrapper '>
      <div className='col-span-2'>
        <div className='menu-container'>
          <img
            className='w-12 hidden md:block animate-bounce-down'
            src='./logo.png'
            alt=''
          />
          {menus.map((menu, i) => (
            <a
              className={`${
                hash === menu.hash ? "menu-active" : ""
              } animate-bounce-down [animation-delay:${i * 100}ms]`}
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
            className='animate-bounce-down'
            href='https://www.facebook.com/profile.php?id=100009923686402'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fab fa-facebook-square text-light hover:text-white text-2xl'></i>
          </a>
          <a
            className='animate-bounce-down [animation-delay:100ms] '
            href='https://www.linkedin.com/in/md-iqbal-hossen0483/'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fab fa-linkedin text-2xl text-light hover:text-white'></i>
          </a>
          <a
            className='animate-bounce-down [animation-delay:200ms] '
            href='https://github.com/iqbalhossen0483'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fab fa-github text-light hover:text-white text-2xl'></i>
          </a>
        </div>
        <a
          className='hidden lg:block btn btn-2 border-light animate-bounce-down [animation-delay:300ms]'
          href='#contact-container'
        >
          Contact me
        </a>
      </div>
    </div>
  );
};

export default Header;
