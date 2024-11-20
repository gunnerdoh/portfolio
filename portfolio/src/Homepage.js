import React, { useState } from 'react';
import Mountain from './components/mountain';
import Pageload from './components/Pageload';
import Contact from './components/Contact';

function Homepage() {
    const [isWorkVisible, setIsWorkVisible] = useState(false);
    const [isWorkBold, setIsWorkBold] = useState(false);

    const [isElseVisible, setIsElseVisible] = useState(false);
    const [isElseBold, setIsElseBold] = useState(false);

    const [isAboutVisible, setIsAboutVisible] = useState(false);
    const [isAboutBold, setIsAboutBold] = useState(false);

    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleWorkClick = () => {
        setIsWorkVisible(!isWorkVisible);
        setIsWorkBold(!isWorkBold);
    };

    const handleElseClick = () => {
        setIsElseVisible(!isElseVisible);
        setIsElseBold(!isElseBold);
    };

    const handleAboutClick = () => {
        setIsAboutVisible(!isAboutVisible);
        setIsAboutBold(!isAboutBold);
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-original-stone'} transition-colors duration-300`}>
            <Pageload />
            {/* Header and contact icons */}
            <div className='min-h-screen px-20 py-10 ps-30'>
                <div className='flex flex-row justify-between mb-5'>
                    <div>
                        <h2 className={`font-averia underline underline-offset-2 text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>
                            Gunner Dohrenwend
                        </h2>
                        <p className={`"font-averia text-l font-light text-gray" ${isDarkMode ? 'text-white' : 'text-black'}`}>
                            gunnerdoh@gmail.com
                        </p>
                    </div>
                    <div className="flex flex-row justify-end items-center">
                        <Contact />
                        <button 
                            onClick={toggleDarkMode}
                            className={`"ml-5 p-2 rounded-full border-2 border-black 
                             transition-colors
                            ${isDarkMode ? 'hover:bg-gray-200 dark:hover:bg-gray-100' : 'hover:bg-gray-700 dark:hover:bg-gray-700'}"`}
                        >
                        </button>
                    </div>
                </div>
                {/* Other stuff */}
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col align-left w-1/2">
                        <h2 
                            onClick={handleAboutClick}
                            className={`font-raleway text-2xl cursor-pointer transition-all
                                ${isDarkMode ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-700'}
                                ${isAboutBold ? 'font-bold' : 'font-light'}`}
                        >
                            ABOUT
                        </h2>

                        <h2 
                            onClick={handleWorkClick}
                            className={`font-raleway text-2xl cursor-pointer transition-all
                                ${isDarkMode ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-700'}
                                ${isWorkBold ? 'font-bold' : 'font-light'}`}
                        >
                            WORK + PROJECTS
                        </h2>
                        <h2 className={`font-raleway text-2xl font-light ${isDarkMode ? 'text-white' : 'text-black'}`}>RESUME</h2>
                        <h2 
                            onClick={handleElseClick}
                            className={`font-raleway text-2xl cursor-pointer transition-all
                                ${isDarkMode ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-700'}
                                ${isElseBold ? 'font-bold' : 'font-light'}`}
                        >
                            EVERYTHING ELSE
                        </h2>
                        <Mountain />
                    </div>
                    <p className="m-auto text-3xl font-raleway"></p>
                </div>
                {/* About Panel */}
                <div 
                    className={`
                        fixed top-0 right-0 h-full w-[61rem] shadow-lg p-8
                        transform transition-all duration-500 ease-in-out font-averia
                        ${isDarkMode ? 'bg-gray-800 border-l-2 border-gray-700' : 'bg-gray-200 border-l-2 border-black'}
                        ${isAboutVisible ? 'translate-x-0' : 'translate-x-full'}
                    `}
                >
                    <div className="flex flex-row">
                        <h2 className={`text-2xl flex-none font-bold mb-4  ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                            About
                        </h2>
                        <div className="text-right flex-grow pr-4">

                        </div>
                    </div>
                    <div>
                        <p>
                            Hi, I'm Gunner - an Informatics Student at the University of Washington. 
                        </p>
                        <p>
                            I focus mostly on software development and data analysis, and am passionate about
                            using data to solve complex problems and drive innovation in the tech industry. 
                        </p>
                        <div>

                        </div>
                    </div>
                </div>
                
                {/* Work + School Panel */}
                <div 
                    className={`
                        fixed top-0 right-0 h-full w-[60rem] shadow-lg p-8
                        transform transition-all duration-500 ease-in-out font-averia
                        ${isDarkMode ? 'bg-gray-800 border-l-2 border-gray-600' : 'bg-white border-l-2 border-black'}
                        ${isWorkVisible ? 'translate-x-0' : 'translate-x-full'}
                    `}
                >
                    <div className="flex flex-row">
                        <h2 className={`text-2xl flex-none font-bold mb-4  ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                            Work
                        </h2>
                        <h2 className="text-right flex-grow pr-4">Contact</h2>
                    </div>
                </div>

                {/* Everything Else Panel */}
                <div 
                    className={`
                        fixed top-0 right-0 h-full w-[59rem] shadow-lg p-8
                        transform transition-all duration-500 ease-in-out font-averia
                        ${isDarkMode ? 'bg-gray-700 border-l-2 border-gray-600' : 'bg-gray-300 border-l-2 border-black'}
                        ${isElseVisible ? 'translate-x-0' : 'translate-x-full'}
                    `}
                >
                    <div className="flex flex-row">
                        <h2 className={`text-2xl flex-none font-bold mb-4  ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                            Everything Else
                        </h2>
                        <h2 className="text-right flex-grow pr-4">Contact</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;