import React, { useState } from 'react';
import Mountain from './components/mountain';
import Pageload from './components/Pageload';

function Homepage() {
    const [isWorkVisible, setIsWorkVisible] = useState(false);
    const [isWorkBold, setIsWorkBold] = useState(false);
    const [isElseVisible, setIsElseVisible] = useState(false);
    const [isElseBold, setIsElseBold] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleWorkClick = () => {
        setIsWorkVisible(!isWorkVisible);
        setIsWorkBold(!isWorkBold);
    };

    const handleElseClick = () => {
        setIsElseVisible(!isElseVisible);
        setIsElseBold(!isElseBold);
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-original-stone'} transition-colors duration-300`}>
            <Pageload />
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
                        <h3 className={`mx-5 font-averia text-2xl font-light ${isDarkMode ? 'text-white' : 'text-black'}`}>About</h3>
                        <h3 className={`mx-5 font-averia text-2xl font-light ${isDarkMode ? 'text-white' : 'text-black'}`}>Contact</h3>
                        <button 
                            onClick={toggleDarkMode}
                            className={`"ml-5 p-2 rounded-full border-2 border-black 
                             transition-colors
                            ${isDarkMode ? 'hover:bg-gray-200 dark:hover:bg-gray-100' : 'hover:bg-gray-700 dark:hover:bg-gray-700'}"`}
                        >
                        </button>
                    </div>
                </div>
                
                <div className="flex flex-grow flex-col justify-between align-left">
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
                </div>
                <Mountain />
                
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
                        <h2 className="text-right flex-grow pr-4">About</h2>
                        <h2>Contact</h2>
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
                        <h2 className="text-right flex-grow pr-4">About</h2>
                        <h2>Contact</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;