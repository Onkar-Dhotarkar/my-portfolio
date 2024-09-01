import React from 'react';
import { Link } from 'react-scroll';

function Footer() {
  return (
    <>
      <div className='main md:hidden flex flex-col items-center justify-center space-y-5 mb-6'>
        <Link to="about" smooth={true} duration={500}>About</Link>
        <Link to="experiecne" smooth={true} duration={500}>Experience</Link>
        <Link to="projects" smooth={true} duration={500}>Projects</Link>
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
      </div>
      <div className="main hidden md:flex flex-row md:mt-32 items-center justify-center space-x-8 text-2xl text-gray-500">
        <Link to="about" smooth={true} duration={500} className='hover:scale-105 duration-200 cursor-pointer'>About</Link>
        <Link to="experiecne" smooth={true} duration={500} className='hover:scale-105 duration-200 cursor-pointer'>Experience</Link>
        <Link to="projects" smooth={true} duration={500} className='hover:scale-105 duration-200 cursor-pointer'>Projects</Link>
        <Link to="contact" smooth={true} duration={500} className='hover:scale-105 duration-200 cursor-pointer'>Contact</Link>
      </div>

      <div className="copy md:mt-10 md:mb-10">
        <footer className="p-4 text-center relative">
          <p className="text-gray-500 ">
            Copyright &copy; {new Date().getFullYear()} Onkar Dhotarkar.
            <span className='inline-block cursor-pointer group relative '>
              All Rights Reserved.
              <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 bg-gray-100 text-black text-sm rounded py-1 px-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out whitespace-nowrap border border-black">
              Original inspiration, but coded with my twist in React + Tailwind. Same look, different tech, all mine!
              </span>
            </span>
          </p>
        </footer>
      </div>
    </>
  );
}

export default Footer;
