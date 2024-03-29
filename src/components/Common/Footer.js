import React from "react";

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='main-wrapper'>
        <div className='name'>
          <img className='w-12 mr-4' src='./logo.png' alt='' />
          <p>MD IQBAL</p>
        </div>

        <div className='flex items-center gap-3 footer'>
          <a href='https://www.facebook.com/profile.php?id=100009923686402'>
            <i className='fab fa-facebook-f icon-footer'></i>
          </a>
          <a href='https://www.linkedin.com/in/md-iqbal-hossen-633b59226/'>
            <i className='fab fa-linkedin icon-footer'></i>
          </a>
          <a href='https://github.com/md-rakib420'>
            <i className='fab fa-github icon-footer'></i>
          </a>
        </div>
      </div>
      <div className='text-white col-span-2 md:col-span-1 text-sm text-center'>
        <p>Copyright &copy;, All right reserved by MD IQBAL</p>
      </div>
    </div>
  );
};

export default Footer;
