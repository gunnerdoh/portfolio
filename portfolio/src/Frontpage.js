import React, { useState } from 'react';
import Contact from './components/Contact';
import Mountain from './components/mountain';
import Directory from './components/Directory';
import Projects from './Projects';

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
                            <p className="mt-2 font-primary text-base md:text-xl font-light text-black text-center md:text-left">
                                Informatics @ <span className='underline decoration-purple-700'>University of Washington</span>.
                            </p>
                            <p className="mt-2 font-primary text-base md:text-l font-light text-black text-center md:text-left">
                                I study mainly programming and data science, but am also interested in machine learning, 
                                business intelligence, and bioinformatics. 
                            </p>
                            <p className="mt-2 font-primary text-base md:text-l font-light text-black text-center md:text-left">
                                I'm particularly drawn to projects that combine analysis and design.
                            </p>
                            <div className="mt-4 bg-gray-500 text-white font-bold py-1 px-4 rounded inline-flex w-fit">
                                Programming
                            </div>
                            <p className="mt-2 font-primary text-base md:text-xl font-light text-black text-center md:text-left">
                                I write mainly in <span className="underline decoration-yellow-500">Javascript</span>, <span className="underline decoration-green-500"> Python</span>, and <span className="underline decoration-red-500"> SQL</span>.
                            </p>
                            <p className="mt-2 font-primary text-base md:text-xl font-light text-black text-center md:text-left">
                                Also learning <span className="underline decoration-blue-700">Typescript</span>, <span className="underline decoration-orange-500"> Swift</span>, and <span className="underline decoration-blue-200">Go</span>.
                            </p>
                            <p className="mt-2 font-primary text-base md:text-sm font-light text-black text-center md:text-left">
                                * This site was made using React, three.js, and TailwindCSS.
                            </p>
                            <div className="mt-4 bg-gray-500 text-white font-bold py-1 px-4 rounded inline-flex w-fit mb-4">
                                Contact
                            </div>
                            <Contact />
                        </div>
                        {/* Right Image Column */}
                        <div className="md:w-1/3 flex justify-center">
                            <img 
                                className="w-full max-w-[320px] h-auto object-cover rounded" 
                                src="/img/IMG_0234.jpg" 
                                alt="Profile"
                            />
                        </div>
                    </div>
                </div>
                <Directory />
            </div>
        </div>
    );
}

export default Frontpage;
