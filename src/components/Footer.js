import React from 'react'

function Footer() {
    return (
        <>

            <div className='main md:hidden flex flex-col  items-center justify-center space-y-5 mb-6'>
                <a href="">About</a>
                <a href="">Experience</a>
                <a href="">Projects</a>
                <a href="">Contact</a>
            </div>
            <div className="main hidden md:flex flex-row md:mt-32 items-center justify-center space-x-8 text-2xl text-gray-500 ">
                <a href="" className='hover:scale-105 duration-200'>About</a>
                <a href="" className='hover:scale-105 duration-200'>Experience</a>
                <a href="" className='hover:scale-105 duration-200'>Projects</a>
                <a href="" className='hover:scale-105 duration-200'>Contact</a>
            </div>

            <div className="copy md:mt-10 md:mb-10">
                <footer className=" p-4 text-center ">
                    <p className="text-gray-500">
                        Copyright &copy; {new Date().getFullYear()} Onkar Dhotarkar. All Rights Reserved.
                    </p>
                </footer>
            </div>


        </>
    )
}

export default Footer
