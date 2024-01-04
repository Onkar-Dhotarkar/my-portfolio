import React from 'react'
import { TiStarburst } from "react-icons/ti";
import { RiArrowDownDoubleLine } from "react-icons/ri";
import { Link } from 'react-scroll';

// import { Link } from 'react-router-dom'



function Experiecne() {
    return (
        <>
            <div className="color ">
                <div id="experiecne" className=' title mt-28 md:mt-30 flex justify-center flex-col items-center mb-9'>
                    <p className='text-gray-400  md:text-lg text-sm'>Explore My</p>
                    <h1 className='text-2xl font-bold md:text-5xl '>Experience</h1>
                </div>

                <div className=" maincontainer mb-14 md:mb-32 flex flex-col md:flex-row   items-center justify-center">

                    <div className="1-conteiner mx-4 mb-5 flex flex-col  h-[72vh] w-[44vh] md:h-[42vh] md:w-[85vh] border-2 border-gray-400 rounded-3xl items-center justify-center shadow-lg">

                        <div className="title flex text-xl font-semibold mb-8">Language</div>


                        <div className="language flex justify-center items-center flex-col ">

                            <div className="1-langg flex justify-center items-center flex-col md:flex-row md:space-x-48 ">

                                <div className="1 flex space-x-6 mb-2">
                                    <TiStarburst className='text-2xl' />
                                    <div className="1.2 flex    flex-col">
                                        <p className='md:duration-500 text-gray-600 font-bold text-lg md:hover:scale-105 cursor-pointer '>HTML</p>
                                        <p className='text-gray-400 font-semibold'>Experienced</p>

                                    </div>
                                </div>
                                <div className="1 flex space-x-6 mb-2">
                                    <TiStarburst className='text-2xl' />
                                    <div className="1.2 flex    flex-col">
                                        <p className='md:duration-500 text-gray-600 font-bold text-lg md:hover:scale-105 cursor-pointer '>CSS</p>
                                        <p className='text-gray-400 font-semibold'>Experienced</p>

                                    </div>
                                </div>

                            </div>

                            <div className="2-langg flex justify-center items-center flex-col md:flex-row md:space-x-48">

                                <div className="1 flex space-x-6 mb-2">
                                    <TiStarburst className='text-2xl' />
                                    <div className="1.2 flex    flex-col">
                                        <p className='md:duration-500 text-gray-600 font-bold text-lg md:hover:scale-105 cursor-pointer '>Javascript</p>
                                        <p className='text-gray-400 font-semibold'>Experienced</p>

                                    </div>
                                </div>
                                <div className="1 flex space-x-6 mb-2">
                                    <TiStarburst className='text-2xl' />
                                    <div className="1.2 flex    flex-col">
                                        <p className='md:duration-500 text-gray-600 font-bold text-lg md:hover:scale-105 cursor-pointer '>MongoDB</p>
                                        <p className='text-gray-400 font-semibold'>Experienced</p>

                                    </div>
                                </div>

                            </div>

                            <div className="3-langg flex justify-center items-center flex-col md:flex-row md:space-x-48">

                                <div className="1 flex space-x-6 mb-2">
                                    <TiStarburst className='text-2xl' />
                                    <div className="1.2 flex    flex-col">
                                        <p className='md:duration-500 text-gray-600 font-bold text-lg md:hover:scale-105 cursor-pointer '>MySql</p>
                                        <p className='text-gray-400 font-semibold'>Intermediate</p>

                                    </div>
                                </div>
                                <div className="1 flex space-x-6 mb-2">
                                    <TiStarburst className='text-2xl' />
                                    <div className="1.2 flex    flex-col">
                                        <p className='md:duration-500 text-gray-600 font-bold text-lg md:hover:scale-105 cursor-pointer '>Firebase</p>
                                        <p className='text-gray-400 font-semibold'>Intermediate</p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>



                    <div className="2-conteiner mx-4 mb-5 flex flex-col   h-[72vh] w-[44vh] border-2 md:h-[42vh] md:w-[85vh] border-gray-400 rounded-3xl items-center justify-center shadow-lg">

                        <div className="title flex text-xl font-semibold mb-8">Framework & Other</div>


                        <div className="language flex justify-center items-center flex-col">

                            <div className="1-langg flex justify-center items-center flex-col md:flex-row md:space-x-48">

                                <div className="1 flex space-x-6 mb-2">
                                    <TiStarburst className='text-2xl' />
                                    <div className="1.2 flex    flex-col">
                                        <p className='md:duration-500 text-gray-600 font-bold text-lg md:hover:scale-105 cursor-pointer '>React</p>
                                        <p className='text-gray-400 font-semibold'>Experienced</p>

                                    </div>
                                </div>
                                <div className="1 flex space-x-6 mb-2">
                                    <TiStarburst className='text-2xl' />
                                    <div className="1.2 flex    flex-col">
                                        <p className='md:duration-500 text-gray-600 font-bold text-lg md:hover:scale-105 cursor-pointer '>Tailwind</p>
                                        <p className='text-gray-400 font-semibold'>Experienced</p>

                                    </div>
                                </div>

                            </div>

                            <div className="2-langg flex justify-center items-center flex-col md:flex-row md:space-x-48">

                                <div className="1 flex space-x-6 mb-2">
                                    <TiStarburst className='text-2xl' />
                                    <div className="1.2 flex    flex-col">
                                        <p className='md:duration-500 text-gray-600 font-bold text-lg md:hover:scale-105 cursor-pointer '>Bootstrap</p>
                                        <p className='text-gray-400 font-semibold'>Experienced</p>

                                    </div>
                                </div>
                                <div className="1 flex space-x-6 mb-2">
                                    <TiStarburst className='text-2xl' />
                                    <div className="1.2 flex    flex-col">
                                        <p className='md:duration-500 text-gray-600 font-bold text-lg md:hover:scale-105 cursor-pointer '>Figma</p>
                                        <p className='text-gray-400 font-semibold'>Intermediate</p>

                                    </div>
                                </div>

                            </div>

                            <div className="3-langg flex justify-center items-center flex-col md:flex-row md:space-x-48">

                                <div className="1 flex space-x-6 mb-2 -md:ml-3">
                                    <TiStarburst className='text-2xl' />
                                    <div className="1.2 flex    flex-col">
                                        <p className='md:duration-500 text-gray-600 font-bold text-lg md:hover:scale-105 cursor-pointer '>Git </p>
                                        <p className='text-gray-400 font-semibold'>Experience</p>

                                    </div>
                                </div>
                                <div className="1 flex space-x-6 mb-2">
                                    <TiStarburst className='text-2xl' />
                                    <div className="1.2 flex    flex-col">
                                        <p className='md:duration-500 text-gray-600 font-bold text-lg md:hover:scale-105 cursor-pointer '>GitHub</p>
                                        <p className='text-gray-400 font-semibold'>Experience</p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>

                <div className="hidden md:flex md:justify-end md:items-center  md:right-4 md:top-4 md:mx-20">
                    <Link to="projects" smooth={true} duration={500}>
                        <RiArrowDownDoubleLine className="text-5xl" /></Link>
                </div>





            </div>





        </>
    )
}

export default Experiecne
