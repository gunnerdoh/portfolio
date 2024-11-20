import { useState } from 'react';

const SlidingComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="p-8">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
      >
        {isVisible ? 'Hide Content' : 'Show Content'}
      </button>
      
      <div
        className={`
          mt-4 p-6 bg-white shadow-lg rounded-lg
          transform transition-all duration-500 ease-in-out
          ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}
        `}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Hello there! 👋
        </h2>
        <p className="text-gray-600">
          This content slides in from the left when the button is clicked.
          Click the button again to make it slide away!
        </p>
      </div>
    </div>
  );
};

export default SlidingComponent;