import React from 'react';
import Shape from './components/3dshape';
import Mountain from './components/mountain';
import Pageload from './components/Pageload';

function Homepage() {

    return (
        <div className="bg-original-stone">
            <Pageload />
            <div className='min-h-screen px-20 py-10 ps-30'>
                <div className=' flex flex-row justify-between mb-5'>
                    <div >
                        <h2 className="font-averia underline underline-offset-2 text-2xl font-bold text-black">Gunner Dohrenwend</h2>
                        <p className="font-averia text-l font-light text-gray">gunnerdoh@gmail.com</p>
                    </div>
                    <div className="flex flex-row justify-end">
                        <h3 className="mx-5 font-averia text-2xl font-light text-black">About</h3>
                        <h3 className="mx-5 font-averia text-2xl font-light text-black">Contact</h3>
                    </div>
                </div>
                <div className="flex flex-grow flex-col justify-between align-left">
                    <h2 className="font-raleway text-2xl font-light text-black">PROJECTS</h2>
                    <h2 className="font-raleway text-2xl font-light text-black">SCHOOL</h2>
                    <h2 className="font-raleway text-2xl font-light text-black">WORK</h2>
                    <h2 className="font-raleway text-2xl font-light text-black mb-5">EVERYTHING ELSE</h2>
                </div>
            </div>
        </div>
    );
}

export default Homepage;