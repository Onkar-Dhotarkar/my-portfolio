// Navbar.js

import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-white text-2xl font-bold px-4">Onkar</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="/" className=" hover:scale-105 duration-200 font-medium text-gray-500">Home</a>
          <a href="/about" className=" hover:scale-105 duration-200 font-medium text-gray-500">About</a>
          <a href="/projects" className=" hover:scale-105 duration-200 font-medium text-gray-500">Projects</a>
          <a href="/skills" className=" hover:scale-105 duration-200 font-medium text-gray-500">Skills</a>
          <a href="/contact" className="pr-4 hover:scale-105 duration-200 font-medium text-gray-500">Contact</a>
        </div>
        {/* Hamburger menu for mobile */}
        <div className="flex md:hidden">
          {/* You can add an icon here for mobile menu */}
          {/* For simplicity, using text */}
          <button className="text-white">
            Menu
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
