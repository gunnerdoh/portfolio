import React, { useState } from 'react';
import Mountain from './components/mountain';
import Pageload from './components/Pageload';
import Contact from './components/Contact';
import { X } from 'lucide-react';

function Homepage() {
    const [isWorkVisible, setIsWorkVisible] = useState(false);
    const [isWorkBold, setIsWorkBold] = useState(false);
    const [isElseVisible, setIsElseVisible] = useState(false);
    const [isElseBold, setIsElseBold] = useState(false);
    const [isAboutVisible, setIsAboutVisible] = useState(false);
    const [isAboutBold, setIsAboutBold] = useState(false);

    const CloseButton = ({ onClick }) => (
        <button
            onClick={onClick}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
        >
            <X className="text-gray-600 hover:text-gray-900" size={24} />
        </button>
    );

    const handleWorkClick = () => {
        setIsWorkVisible(!isWorkVisible);
        setIsWorkBold(!isWorkBold);
        
        // setIsElseVisible(false);
        // setIsElseBold(false);

        // setIsAboutVisible(false);
        // setIsAboutBold(false);
    };

    const handleElseClick = () => {
        setIsElseVisible(!isElseVisible);
        setIsElseBold(!isElseBold);

        // setIsAboutVisible(false);
        // setIsAboutBold(false);

        // setIsWorkVisible(false);
        // setIsWorkBold(false);
    };

    const handleAboutClick = () => {
        setIsAboutVisible(!isAboutVisible);
        setIsAboutBold(!isAboutBold);

        // setIsElseVisible(false);
        // setIsElseBold(false);

        // setIsWorkVisible(false);
        // setIsWorkBold(false);
    };

    return (
        <div className="bg-original-stone min-h-screen">
            <Pageload />
            <div className='px-4 md:px-20 py-6 md:py-10 md:ps-30'>
                {/* Header Section */}
                <div className='flex flex-col md:flex-row justify-between mb-5 space-y-4 md:space-y-0'>
                    <div>
                        <h2 className="font-averia underline underline-offset-2 text-xl md:text-2xl font-bold text-black text-center md:text-left">
                            Gunner Dohrenwend
                        </h2>
                        <p className="font-averia text-base md:text-l font-light text-black text-center md:text-left">
                            gunnerdoh@gmail.com
                        </p>
                    </div>
                    <div className="flex justify-center md:justify-end items-center">
                        <Contact />
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="flex flex-col align-left w-full md:w-1/2 space-y-4 md:space-y-0">
                        <h2 
                            onClick={handleAboutClick}
                            className={`font-raleway text-xl md:text-2xl text-black cursor-pointer hover:text-gray-700 transition-all text-center md:text-left
                                ${isAboutBold ? 'font-bold' : 'font-light'}`}
                        >
                            ABOUT
                        </h2>
                        <h2 
                            onClick={handleWorkClick}
                            className={`font-raleway text-xl md:text-2xl text-black cursor-pointer hover:text-gray-700 transition-all text-center md:text-left
                                ${isWorkBold ? 'font-bold' : 'font-light'}`}
                        >
                            WORK + PROJECTS
                        </h2>
                        <a 
                            href="./resume.pdf" 
                            className="font-raleway text-xl md:text-2xl font-light text-black text-center md:text-left" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            RESUME
                        </a> 
                        <div className="hidden md:block">
                            <Mountain />
                        </div>
                        <div><p className="text-raleway text-gray-300">v. 2.0</p></div>
                    </div>
                </div>

                {/* Panels */}
                <div className={`
                    fixed top-0 right-0 h-full w-full md:w-[61rem] shadow-lg p-4 md:p-8
                    bg-gray-200 border-l-2 border-black overflow-y-auto
                    font-averia transform transition-all duration-500 ease-in-out
                    ${isAboutVisible ? 'translate-x-0' : 'translate-x-full'}
                `}>
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">
                        About
                    </h2>
                    <CloseButton onClick={() => {
                        setIsAboutVisible(false);
                        setIsAboutBold(false);
                    }} />
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-2/3">
                            <p className="mb-5">
                                Hi, I'm Gunner - an Informatics Student at the University of Washington. 
                            </p>
                            <p className="mb-5">
                                My studies have focused mostly on software engineering and data science. 
                                I plan to build a career in these fields and design great systems for information
                                management. 
                            </p>
                            <p className="mb-5">
                                My studies in the last few years have been diverse, including ML Pipeline Development,
                                ethnographic study, web development, computer architechture, DB management, and 
                                Data Structures. 
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className={`
                    fixed top-0 right-0 h-full w-full md:w-[60rem] shadow-lg p-4 md:p-8
                    bg-white border-l-2 border-black overflow-y-auto
                    font-averia transform transition-all duration-500 ease-in-out
                    ${isWorkVisible ? 'translate-x-0' : 'translate-x-full'}
                `}>
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">
                        Work + Projects
                    </h2>
                    <CloseButton onClick={() => {
                        setIsAboutVisible(false);
                        setIsAboutBold(false);
                    }} />
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-2/3">
                            <h3 className="mb-5 text-xl">2024</h3>
                            <h4 className="mb-3 font-bold text-black">
                                Axiom Health - Software Engineering Intern
                            </h4>
                            <p>
                                The needs of the company shifted between me being initially hired and
                                the start of my internship, so I pivoted to more of a data science role.
                                Most of my work was in developing automated data collection to improve
                                information intake for the company's tuned LLM and finding data insights 
                                in Databricks using PySpark and PySQL for analysis and Matplotlib for visualization. 
                            </p>
                            <h3 className="my-5 text-xl">2023</h3>
                            <h4 className="mb-3 font-bold text-black">
                                Coding 4 Youth - Computer Science Instructor
                            </h4>
                            <p>
                                While simultaneously taking classes, I taught up to 11 students a week remotely on
                                computer science fundamentals, involving tools such as Python, JS, HTML / CSS, 
                                Scratch, and even a class on Minecraft Redstone. 
                            </p>
                            <h4 className="mb-3 mt-5 font-bold text-black">
                                Student Researcher - University of Washington iSchool 
                            </h4>
                            <p>
                                I spent a month in Addis Ababa, Ethiopia as part of an independent 
                                design study researching prototypes to improve tech education in Addis Ababa.
                                You can find my write-up 
                                <a href="./Addis_Ababa_iSchool_Writeup.pdf" className="text-blue-600 ps-1 " target="_blank" rel="noopener noreferrer">
                                 here
                                </a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
