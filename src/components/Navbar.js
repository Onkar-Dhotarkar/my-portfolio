import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../index.css'; // Import your custom CSS file for Navbar styling
// import { Link } from 'react-router-dom'
import { Link } from 'react-scroll';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [transitionDuration, setTransitionDuration] = useState('700ms'); // Initial transition duration

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    // Change the transition duration when toggling
    setTransitionDuration(isOpen ? '700ms' : '300ms'); // Example: 700ms when closing, 300ms when opening
  };
  const handleNavLinkClick = () => {
    setIsOpen(false); // Close the navbar when a link is clicked
  };

  return (
    <nav className="p-8 md:p-12 top-0 w-full z-50 overflow-y-auto max-h-screen">
      <div className="container mx-auto flex justify-between items-center flex-col md:flex-row">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center">
            <h1 className="text-gray-500 hover:scale-105 duration-300 md:text-4xl font-bold px-4 font-serif cursor-pointer">
              Onkar Dhotarkar.
            </h1>
          </div>
          <div className="md:hidden">
            {isOpen ? (
              <FaTimes
                className="text-gray-500 text-2xl cursor-pointer"
                onClick={toggleNavbar}
              />
            ) : (
              <FaBars
                className="text-gray-500 text-2xl cursor-pointer"
                onClick={toggleNavbar}
              />
            )}
          </div>
        </div>
        <div
          className={`md:flex md:items-center md:space-x-8 w-full md:w-auto transition-all ${isOpen ? 'duration-700' : 'duration-300'} ${isOpen ? 'block mt-4 md:mt-0' : 'hidden'}`}
          style={{ transitionDuration }}
        >
          <Link
            to="about"
            smooth={true}
            duration={700}
            onClick={handleNavLinkClick}
            className={`cursor-pointer block md:inline-block hover:scale-105 duration-200 font-medium text-gray-500 md:text-2xl ${isOpen ? 'mb-3 md:mb-0 ml-4 md:ml-0' : ''}`}
          >
            About
          </Link>
          <Link
            to="experiecne"
            smooth={true}
            duration={700}
            onClick={handleNavLinkClick}
            className={` cursor-pointer block md:inline-block hover:scale-105 duration-200 font-medium text-gray-500 md:text-2xl ${isOpen ? 'mb-3 md:mb-0 ml-4 md:ml-0' : ''}`}
          >
            Experience
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={700}
            onClick={handleNavLinkClick}
            className={`cursor-pointer block md:inline-block hover:scale-105 duration-200 font-medium text-gray-500 md:text-2xl ${isOpen ? 'mb-3 md:mb-0 ml-4 md:ml-0' : ''}`}
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={700}
            onClick={handleNavLinkClick}
            className={`cursor-pointer block md:inline-block hover:scale-105 duration-200 font-medium text-gray-500 md:text-2xl ${isOpen ? 'mb-3 md:mb-0 ml-4 md:ml-0' : ''}`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
