import React from 'react'
import oncode from '../components/assets/oncode.png';
import news from '../components/assets/news.png';
import text from '../components/assets/textcraft.png';
import { IoIosArrowRoundForward } from "react-icons/io";
import { RiArrowDownDoubleLine } from "react-icons/ri";
import { Link } from 'react-scroll';

// import { Link } from 'react-router-dom'





function Projects() {
    return (
        <>

            <div id='projects' className='title mt-28 md:mt-28 flex justify-center flex-col items-center mb-11'>
                <p className='text-gray-400  md:text-lg text-sm'>Browse My Recet</p>
                <h1 className='text-4xl font-bold md:text-5xl '>Projects</h1>
            </div>

            <div className="allprj flex flex-col md:flex-row md:space-x-7 justify-center items-center md:mb-16">

                <div className="project-1 flex  flex-col space-y-5 justify-center items-center h-[65vh] w-[44vh] border-2 rounded-3xl shadow-lg mb-9 md:mb-4  md:shadow-none md:w-[49vh] md:h-[60vh]">

                    <div className="photo flex h-[23vh] w-[39vh] md:h-[26vh] md:w-[44vh]  ">
                        <img src={oncode} alt="" className=' rounded-xl object-cover shadow-sm border-2 border-gray-200' />
                    </div>

                    <div className="name">
                        <h1 className='text-gray-600 font-semibold text-2xl'>ONCODE</h1>
                    </div>
                    <div className="dis flex items-center justify-center px-4">
                        <p className='text-sm flex'>A web-based coding utility that provides every feature for a
                            coder. </p>
                    </div>

                    <div class="btn">
                        
                        <a href='https://github.com/Onkar-Dhotarkar/OnCode-Frontend'  target='_blank' class='flex items-center justify-self-center border p-3 m-2 rounded-xl shadow-md text-black duration-500 transform-gpu hover:translate-y-1 transition-transform text-sm md:text-lg'>View </a>
                    </div>


                </div>


                <div className="project-2 flex  flex-col space-y-5 justify-center items-center h-[65vh] w-[44vh] md:w-[49vh] md:h-[60vh] border-2 md:shadow-none rounded-3xl shadow-lg mb-9 md:mb-4   ">

                    <div className="photo flex justify-center  h-[26vh] w-[39vh] md:w-[44vh]  ">
                        <img src={news} alt="" className=' rounded-xl object-fill shadow-sm border-2 border-gray-200' />
                    </div>

                    <div className="name">
                        <h1 className='text-gray-600 font-semibold text-2xl'>NewsPluse</h1>
                    </div>
                    <div className="dis flex items-center justify-center px-4">
                        <p className='text-sm flex'>A React application that used api integration from news.api to fetch real-time news</p>
                    </div>

                    <div class="btn">

                        
                        <a href='https://github.com/Onkar-Dhotarkar/NewsPluse_Component_Based-React-App' target='_blank' class='flex items-center justify-self-center border p-3 m-2 rounded-xl shadow-md text-black duration-500 transform-gpu hover:translate-y-1 transition-transform text-sm md:text-lg'>View </a>
                    </div>


                </div>


                <div className="project-3 flex  flex-col space-y-5 justify-center items-center h-[65vh] w-[44vh] border-2 rounded-3xl shadow-lg md:shadow-none mb-9 md:mb-4 md:w-[49vh]  md:h-[60vh]">

                    <div className="photo flex h-[23vh] w-[39vh] md:h-[26vh] md:w-[44vh]  ">
                        <img src={text} alt="" className=' rounded-xl border-2  object-fill shadow-sm border-gray-200' />
                    </div>

                    <div className="name">
                        <h1 className='text-gray-600 font-semibold text-2xl'>TextCraft</h1>
                    </div>
                    <div className="dis flex items-center justify-center px-4">
                        <p className='text-sm flex'>A React application that providing ToolKit for manupulate text. </p>
                    </div>

                    <div class="btn">
                        
                        <a href='https://github.com/Onkar-Dhotarkar/TextCarft-React_Frontend_Project' target='_blank' class='flex items-center justify-self-center border p-3 m-2 rounded-xl shadow-md text-black duration-500 transform-gpu hover:translate-y-1 transition-transform text-sm md:text-lg'>View </a>
                    </div>


                </div>
















                
            </div>

            <div className="hidden md:flex md:justify-end md:items-center  md:right-4 md:top-4 md:mx-20 md:mb-4">
            <Link to="contact" smooth={true} duration={500}>

                <RiArrowDownDoubleLine className="text-5xl" /></Link>
            </div>























        </>
    )
}

export default Projects
