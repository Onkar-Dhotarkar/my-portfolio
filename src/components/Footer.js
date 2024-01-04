import React from 'react';
import { Link } from 'react-scroll';

function Footer() {
  return (
    <>
      <div className='main md:hidden flex flex-col items-center justify-center space-y-5 mb-6'>
        <Link to="about" smooth={true} duration={500}>About</Link>
        <Link to="experience" smooth={true} duration={500}>Experience</Link>
        <Link to="projects" smooth={true} duration={500}>Projects</Link>
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
      </div>
      <div className="main hidden md:flex flex-row md:mt-32 items-center justify-center space-x-8 text-2xl text-gray-500">
        <Link to="about" smooth={true} duration={500} className='hover:scale-105 duration-200'>About</Link>
        <Link to="experiecne" smooth={true} duration={500} className='hover:scale-105 duration-200'>Experience</Link>
        <Link to="projects" smooth={true} duration={500} className='hover:scale-105 duration-200'>Projects</Link>
        <Link to="contact" smooth={true} duration={500} className='hover:scale-105 duration-200'>Contact</Link>
      </div>

      <div className="copy md:mt-10 md:mb-10">
        <footer className="p-4 text-center">
          <p className="text-gray-500">
            Copyright &copy; {new Date().getFullYear()} Onkar Dhotarkar.
            All Rights Reserved.
          </p>
        </footer>
      </div>
    </>
  );
}

export default Footer;
