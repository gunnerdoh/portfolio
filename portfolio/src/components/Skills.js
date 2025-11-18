import { useState } from 'react';

const Skills = () => {
    const [showLanguages, setShowLanguages] = useState(false);

    return (
        <>
            <div className="">
                <button 
                    onClick={() => setShowLanguages(!showLanguages)}
                    className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-200 cursor-pointer pb-1"
                >
                    Languages and Libraries {showLanguages ? '▲' : '▼'}
                </button>
                
                {showLanguages && (
                    <div className=" flex flex-row items-center gap-4 px-3 py-3 flex items-center justify-center gap-8 ">
                        <img className="max-w-24" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" alt="Python" />
                        <img className="max-w-24" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" alt="Java" />
                        <img className="max-w-24" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" alt="SQL" />
                        <img className="max-w-24" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original-wordmark.svg" alt="NumPy" />
                        <img className="max-w-24" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original-wordmark.svg" alt="Pandas" />
                        <img className="max-w-24" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" alt="React" />
                        <img className="max-w-24" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/p5js/p5js-original.svg" alt="p5.js" />
                        <img className="max-w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/d3js/d3js-original.svg" alt="D3.js" />
                    </div>
                )}
            </div>
        </>
    );
}

export default Skills;