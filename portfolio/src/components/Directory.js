import React, { useState } from 'react';
import Projects from '../Projects';
import Other from '../Other';
import Work from '../Work';

const Directory = () => {
    const [activeTab, setActiveTab] = useState('Projects');

  return (
    <>
        <div className="flex flex-col">
            <div className="flex flex-row mx-auto items-center space-between pt-8 rounded-lg">
                <button 
                    className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l ${activeTab === 'Projects' ? 'bg-gray-400' : ''}`}
                    onClick={() => setActiveTab('Projects')}
                >
                    Projects
                </button>
                <button 
                    className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 ${activeTab === 'Work' ? 'bg-gray-400' : ''}`}
                    onClick={() => setActiveTab('Work')}
                >
                    Work
                </button>
                <button 
                    className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r ${activeTab === 'Other' ? 'bg-gray-400' : ''}`}
                    onClick={() => setActiveTab('Other')}
                >
                    Other
                </button>
            </div>
            <div>
            {activeTab === 'Projects' && <Projects />}
            {activeTab === 'Other' && <Other />}
            {activeTab === 'Work' && <Work />}
            </div>
        </div>
    </>
  );
  
};

export default Directory;