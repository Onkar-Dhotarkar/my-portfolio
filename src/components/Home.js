import React from 'react';
import om from "./assets/om.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-scroll';
import resumeFile from './assets/Resume.pdf'

// import { Link } from 'react-router-dom'
// import 



function Home() {
    
    return (
        <div className="main  mt-5 flex flex-col justify-center items-center md:flex-row   md:space-x-28 ">

            <div className="photo relative">
                <div className="circle h-[29vh] w-[29vh] rounded-full bg-gray-200 shadow-xl flex items-center justify-center md:h-[65vh] md:w-[65vh]">
                    <img src={om} alt="" className=" rounded-full h-[100%] w-[100%] object-cover" />
                </div>
            </div>


            <div className="name flex flex-col text-center  mt-7 font-bold  ">
                <p className='text-gray-400 mb-2 md:text-2xl'>Hello, I`m</p>
                <h1 className='text-center text-2xl text-gray-800 mb-1 md:text-5xl md:mb-2'>Onkar Dhotarkar</h1>
                <p className='text-center text-lg text-gray-500 md:text-2xl'><Typewriter
            words={['Frontend Developer', 'UI Designer', 'Web Developer']}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          /> </p>
                


                <div className="btn mt-2">
                
                <a href={resumeFile} download={"resume.pdf"} target='_blank' rel='noreferrer' >

                    <button className='text-xs border-2 border-gray-400  p-3 m-2 rounded-2xl shadow-md hover:bg-gray-200 duration-500 hover:scale-105 md:text-sm' >Download CV</button>
                    </a>
                    <Link to="contact" smooth={true} duration={500} className=' text-xs  border-2 border-gray-400 p-3 m-2 rounded-2xl shadow-md text-gray-300 bg-gray-900  hover:bg-gray-600 duration-500 hover:scale-105 md:text-sm cursor-pointer'>Contact Info</Link>
                </div>

                <div className="icon mt-2  flex justify-center space-x-3 ">
                    <a href='https://github.com/Onkar-Dhotarkar' target='_blank'>
                    <FaGithubSquare className='text-3xl cursor-pointer hover:text-gray-500 duration-300 md:text-4xl' /></a>
                    <a href='https://www.linkedin.com/in/onkar-dhotarkar/' target='_blank'>
                    <FaLinkedin className='text-3xl cursor-pointer hover:text-gray-500 duration-300 md:text-4xl' /></a> 
                </div>

            </div>
        </div>
    );
}

export default Home;
// Frontend Developer','UI Designer','Web Developer