import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../index.css'; // Import your custom CSS file for Navbar styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [transitionDuration, setTransitionDuration] = useState('700ms'); // Initial transition duration

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    // Change the transition duration when toggling
    setTransitionDuration(isOpen ? '700ms' : '300ms'); // Example: 700ms when closing, 300ms when opening
  };

  return (
    <nav className="p-8 md:p-12  top-0 w-full z-50 ">
      <div className="container mx-auto flex justify-between items-center flex-col md:flex-row">
        {/* Hamburger menu for small screens */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center">
            <span className="text-gray-500 hover:scale-105  duration-300  md:text-4xl font-bold px-4 font-serif">Onkar Dhotarkar.</span>
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
        {/* Navbar links */}
        <div
          className={`md:flex md:items-center md:space-x-8 w-full md:w-auto transition-all ${isOpen ? 'duration-700' : 'duration-300'} ${isOpen ? 'block mt-4 md:mt-0' : 'hidden'}`}
          style={{ transitionDuration }}
        >
          
          <a
            href="/about"
            className={`block md:inline-block hover:scale-105 duration-200 font-medium text-gray-500 md:text-2xl ${
              isOpen ? 'mb-3 md:mb-0 ml-4 md:ml-0' : ''
            }`}
          >
            About
          </a>
          <a
            href="/projects"
            className={`block md:inline-block hover:scale-105 duration-200 font-medium text-gray-500 md:text-2xl ${
              isOpen ? 'mb-3 md:mb-0 ml-4 md:ml-0' : ''
            }`}
          >
            Experience
          </a>
          <a
            href="/skills"
            className={`block md:inline-block hover:scale-105 duration-200 font-medium text-gray-500 md:text-2xl ${
              isOpen ? 'mb-3 md:mb-0 ml-4 md:ml-0' : ''
            }`}
          >
            Projects
          </a>
          <a
            href="/contact"
            className={`block md:inline-block hover:scale-105 duration-200 font-medium text-gray-500 pr-4 md:text-2xl md:pr-20 ${
              isOpen ? 'mb-3 md:mb-0 ml-4 md:ml-0 ' : ''
            }`}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
