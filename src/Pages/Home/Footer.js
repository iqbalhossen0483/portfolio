import React from 'react';

const Footer = () => {
    return (
        <div className='mt-16 bg-gray-700 p-5 grid grid-cols-3 gap-5 items-center'>
            <div className='flex items-center text-3x font-bold text-white'>
                <img className='w-12 mr-4' src="https://i.ibb.co/XWR6g7g/Group-8449.png" alt="" />
                <p>MD IQBAL</p>
            </div>
            <div className='icon flex items-center footer'>
                <a href="https://www.facebook.com/profile.php?id=100009923686402">
                    <i className="fab fa-facebook-f icon-footer"></i>
                </a>
                <a href="https://www.linkedin.com/in/md-iqbal-hossen-633b59226/">
                    <i className="fab fa-linkedin icon-footer"></i>
                </a>
                <a href="https://github.com/md-rakib420">
                    <i className="fab fa-github icon-footer"></i>
                </a>
            </div>
            <div className='text-white'>
                <p>Copyright &copy;, All right reserved by MD IQBAL</p>
            </div>
        </div>
    );
};

export default Footer;