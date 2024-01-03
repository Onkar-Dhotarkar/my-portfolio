// import React from 'react';
import omai from "./assets/omai.jpg";
import React, { useState, useRef } from 'react';
import { FaSchoolCircleCheck } from "react-icons/fa6";
import { IoSchoolSharp } from "react-icons/io5";
import { RiArrowDownDoubleLine } from "react-icons/ri";


function About() {



    return (
        <>
            <div className='title mt-28 flex justify-center flex-col items-center'>
                <p className='text-gray-400  md:text-lg text-sm'>Get To Know More</p>
                <h1 className='text-4xl font-bold md:text-5xl '>About Me</h1>
            </div>

            <div className="section mt-3 flex justify-center items-center flex-col md:flex-row md:mx-20 md:mt-12 md:mb-12">

                <div className="left-photo mb-8">
                    <div className="circle h-[25vh] w-[25vh] rounded-3xl bg-gray-200 shadow-xl flex items-center justify-center md:h-[55vh] md:w-[55vh]">
                        <img src={omai} alt="" className="rounded-3xl h-[100%] w-[100%] object-cover" />
                    </div>
                </div>

                <div className="content flex justify-center flex-col items-center">
                    <h1 className=' font-semibold text-3xl mb-3'>Education</h1>
                    <div className="md:flex ">
                        <div className="1-containt    mx-4 mb-5 flex  h-[20vh] w-[44vh] md:h-[23vh] md:w-[50vh] border-2 border-gray-300 rounded-3xl items-center justify-center space-y-4 flex-col ">
                            <div className="school flex flex-col items-center justify-center">
                                <FaSchoolCircleCheck className='text-2xl md:text-3xl text-center mb-2' />
                                <h1 className=' text-xl md:text-2xl font-bold mb-1 text-gray-800'>School</h1>
                                <p className=' text-xs md:text-sm font-semibold text-gray-500'>Maharashtra Vidyalaya, Barshi</p>
                            </div>
                        </div>


                        <div className="2-containt    mx-4 mb-7  flex md:h-[23vh] md:w-[50vh] h-[20vh] w-[44vh] border-2 border-gray-300 rounded-3xl items-center justify-center space-y-4 flex-col ">
                            <div className="college flex flex-col items-center justify-center">
                                <IoSchoolSharp className='text-2xl md:text-3xl text-center mb-2' />
                                <h1 className=' text-xl md:text-2xl font-bold mb-1 text-gray-800'>College</h1>
                                <p className=' text-xs md:text-sm font-semibold text-gray-500'>Government Polytechnic, Mumbai</p>
                            </div>
                        </div>
                    </div>

                    <div className="About-containt mx-8 flex flex-col items-center justify-center md:space-y-4 md:mx-28 md:mb:0">
                        <h1>As a passionate web developer, I excel in crafting visually appealing, logic-driven interfaces using HTML, CSS, and JavaScript. Proficient in React.js and database management, I design impressive UIs using Figma. Skilled in Tailwind CSS and Bootstrap, enhancing web aesthetics.</h1>

                    </div>


                </div>
            </div>
            <div className="hidden md:flex md:justify-end md:items-center  md:right-4 md:top-4 md:mx-20">
      <RiArrowDownDoubleLine className="text-5xl" />
    </div>
        </>
    )
}

export default About;
