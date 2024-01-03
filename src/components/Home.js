import React from 'react';
import om from "./assets/om.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter'

function Home() {
    
    return (
        <div className="main  mt-5 flex flex-col justify-center items-center md:flex-row   md:space-x-28">

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
                    <button className='text-xs border-2  p-3 m-2 rounded-2xl shadow-md hover:bg-gray-200 duration-500 hover:scale-105 md:text-sm'>Download CV</button>
                    <button className=' text-xs border p-3 m-2 rounded-2xl shadow-md text-white bg-gray-900  hover:bg-gray-600 duration-500 hover:scale-105 md:text-sm'>Contact Info</button>
                </div>

                <div className="icon mt-2  flex justify-center space-x-3 ">
                    <FaGithubSquare className='text-3xl cursor-pointer hover:text-gray-500 duration-300 md:text-4xl' />
                    <FaLinkedin className='text-3xl cursor-pointer hover:text-gray-500 duration-300 md:text-4xl' />
                </div>

            </div>
        </div>
    );
}

export default Home;
// Frontend Developer','UI Designer','Web Developer