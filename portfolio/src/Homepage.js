import React, { useState } from 'react';
import Shape from './components/3dshape';
import Mountain from './components/mountain';
import Pageload from './components/Pageload';

function Homepage() {
    const [isWorkVisible, setIsWorkVisible] = useState(false);
    const [isWorkBold, setIsWorkBold] = useState(false);

    const [isElseVisible, setIsElseVisible] = useState(false);
    const [isElseBold, setIsElseBold] = useState(false);


    const handleWorkClick = () => {
        setIsWorkVisible(!isWorkVisible);
        setIsWorkBold(!isWorkBold);
    };

    const handleElseClick = () => {
        setIsElseVisible(!isElseVisible);
        setIsElseBold(!isElseBold);
    };

    return (
        <div className="bg-original-stone">
            <Pageload />
            <div className='min-h-screen px-20 py-10 ps-30'>
                <div className='flex flex-row justify-between mb-5'>
                    <div>
                        <h2 className="font-averia underline underline-offset-2 text-2xl font-bold text-black">
                            Gunner Dohrenwend
                        </h2>
                        <p className="font-averia text-l font-light text-gray">
                            gunnerdoh@gmail.com
                        </p>
                    </div>
                    <div className="flex flex-row justify-end">
                        <h3 className="mx-5 font-averia text-2xl font-light text-black">About</h3>
                        <h3 className="mx-5 font-averia text-2xl font-light text-black">Contact</h3>
                    </div>
                </div>
                
                <div className="flex flex-grow flex-col justify-between align-left">
                    <h2 
                        onClick={handleWorkClick}
                        className={`font-raleway text-2xl text-black cursor-pointer hover:text-gray-700 transition-all
                            ${isWorkBold ? 'font-bold' : 'font-light'}`}
                    >
                        WORK + PROJECTS
                    </h2>
                    <h2 className="font-raleway text-2xl font-light text-black">RESUME</h2>
                    <h2 
                        onClick={handleElseClick}
                        className={`font-raleway text-2xl text-black cursor-pointer hover:text-gray-700 transition-all
                            ${isElseBold ? 'font-bold' : 'font-light'}`}
                    >
                        EVERYTHING ELSE
                    </h2>
                </div>
                <Mountain />
                {/* Panels */}
                {/* Work + School Panel */}
                <div 
                    className={`
                        fixed top-0 right-0 h-full w-[50rem]  bg-white border-l-2 border-black shadow-lg p-8
                        transform transition-all duration-500 ease-in-out font-averia
                        ${isWorkVisible ? 'translate-x-0' : 'translate-x-full'}
                    `}
                >
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Work + Projects
                    </h2>
                </div>

                <div 
                    className={`
                        fixed top-0 right-0 h-full w-[49rem]  bg-gray-300 border-l-2 border-black shadow-lg p-8
                        transform transition-all duration-500 ease-in-out font-averia
                        ${isElseVisible ? 'translate-x-0' : 'translate-x-full'}
                    `}
                >
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Everything Else
                    </h2>
                    <p className="text-gray-600">
                        
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Homepage;