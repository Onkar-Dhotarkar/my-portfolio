import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";


function Contact() {
    return (
        <>
            <div className="main flex justify-center items-center flex-col">
                <div className='title mt-28 md:mt-36 flex justify-center flex-col items-center mb-11'>
                    <p className='text-gray-400  md:text-lg text-sm'>Get in Touch</p>
                    <h1 className='text-4xl font-bold md:text-5xl '>Contact Me</h1>
                </div>

                <div className="1-containt      mx-4 mb-6 md:mb-10  flex h-[15vh] w-[44vh] md:h-[15vh] md:w-[75vh] border-2 border-gray-300 rounded-3xl items-center justify-center space-y-4 flex-col md:flex-col  md:space-x-8 shadow-sm">

                    <div className="email flex flex-row space-x-3 items-center justify-center ">
                        <MdEmail className='text-2xl md:text-3xl' />
                        <p className='relative font-semibold  cursor-pointer text-[17px] w-fit md:block after:block  after:absolute after:h-[2px] after:bg-gray-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center text-xs md:text-xl md:text-gray-500 text-gray-900  '>onkardhotarkar@gmail.con</p>

                    </div>



                    <div className=" email flex flex-row space-x-3 items-center justify-center md:-mt-1">
                        <FaLinkedin className='text-2xl md:text-2xl' />
                        <p className='relative font-semibold  cursor-pointer text-[17px] w-fit md:block after:block  after:absolute after:h-[2px] after:bg-gray-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center text-xs md:text-xl md:text-gray-500 text-gray-900'>LinkedIn</p>

                    </div>

                </div>


                

            </div>










        </>
    )
}

export default Contact
