import React from 'react';
import Contact from './components/Contact';
import Mountain from './components/mountain';
import Directory from './components/Directory';

function Frontpage() {
    return (
        <div className="bg-original-stone min-h-screen">
            <div className='px-4 md:px-60 py-6 md:py-10 md:ps-30'>
                {/* Header Section */}
                <div className="flex flex-col md:flex-row">
                    <div className='flex flex-col md:flex-row justify-between mt-6 mb-5 space-y-4 md:space-y-0 w-full'>
                        {/* Left Content Column */}
                        <div className="md:w-2/3">
                        <h2 className="font-primary md:text-3xl font-bold text-black text-center md:text-left">
                        Gunner Dohrenwend
                    </h2>
                    <div className="mt-4 bg-gray-500 text-white font-bold py-1 px-4 rounded inline-flex w-fit">
                        About Me
                    </div>
                    <p className="mt-2 font-primary text-base md:text-2xl text-black text-center md:text-left">
                        Informatics @ <span className='underline decoration-purple-700'>University of Washington</span>.
                    </p>
                    <p className="mt-2 font-primary text-base md:text-xl font-light text-black text-center md:text-left">
                        I focus on analysis, programming, data, and design.
                    </p>
                    <p className="mt-2 font-primary text-base md:text-xl font-light text-black text-center md:text-left">
                        Outside of work and school, I like playing drums, guitar, and piano, and getting outdoors.
                    </p>

                    <div className="mt-4 bg-gray-500 text-white font-bold py-1 px-4 rounded inline-flex w-fit mb-4">
                        Contact
                    </div>
                    <p className="mb-2 font-primary text-base md:text-l font-light text-black text-center md:text-left">
                        You can email me at:
                    </p>
                    <p className="mb-2 font-primary text-base md:text-l font-light text-black text-center md:text-left font-medium">
                        gunner.dohrenwend@outlook.com (professional)
                    </p>
                    <p className="mb-3 font-primary text-base md:text-l font-light text-black text-center md:text-left font-medium">
                        gunnerdoh@gmail.com (personal)
                    </p>
                            <Contact />
                            <div className="mt-4 bg-blue-500 text-white font-bold py-1 px-4 rounded inline-flex w-fit
                            text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 
                            focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium text-sm text-center me-2 mb-2">
                                <a 
                                href="./resume.pdf" 
                                className="" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                >
                                    My Resume
                                </a> 
                            </div>

                            <p className="m-1 text-sm text-gray-400">v3.0</p>
                        </div>
                        {/* Right Image Column */}
                        <div className="md:w-1/3 flex justify-center">
                            <img 
                                className="max-w-[320px] w-full h-auto rounded object-contain" 
                                src="/img/IMG_0234.jpg" 
                                alt="Profile"
                            />
                        </div>
                    </div>
                </div>
                <Directory />
            </div>
                <Mountain />                    
        </div>
    );
}

export default Frontpage;
