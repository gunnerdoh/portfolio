import React from 'react';

function Other() {
    return (
        <>
            <h2 className="text-3xl mt-5 flex flex-row justify-center font-bold mb-5">Everything Else</h2>
            <div className="text-center">
                <div className=" flex flex-col items-center justify-center pt-6">
                    <a href="https://medium.com/@gunnerdoh2" target="_blank" rel="noopener noreferrer">
                        <p className="font-semibold text-black-600 text-xl hover:text-blue-600" >📄 Medium (Blog) ➚</p>
                        <p className="mb-6" >Coming soon! Technical writings about data and what's on my mind.</p>
                    </a>
                </div>
                <div className=" flex flex-col items-center justify-center pt-6">
                    <a href="https://www.youtube.com/watch?v=N7IfWsOfhWY" target="_blank" rel="noopener noreferrer">
                        <p className="font-semibold text-black-600 text-xl hover:text-blue-600" >🎥 17th Street Concert (Timelapse) ➚</p>
                        <p className="mb-6">Timelapse of me and my band playing a show just outside of UW's campus.</p>
                    </a>
                </div>
                <div className=" flex flex-col items-center justify-center pt-6">
                    <a href="https://www.youtube.com/watch?v=HS9Buft_WVg" target="_blank" rel="noopener noreferrer">
                        <p className="font-semibold text-black-600 text-xl hover:text-blue-600" >🎥 The Weight ➚</p>
                        <p className="mb-6">Me and my friend's cover of The Band's hit song.</p>
                    </a>
                </div>
                <div className="flex flex-col items-center justify-center pt-6">
                    <a href="https://sites.google.com/view/collection-2/home?authuser=1" target="_blank" rel="noopener noreferrer">
                        <p className="font-semibold text-black-600 text-xl hover:text-blue-600" >📄 Freedoh Studios [ 2019-2020 ] ➚</p>
                        <p className="mb-6">In highschool I designed graphics and printed them on vintage clothes and blank t-shirts. My friends liked the shirts, so I decided to sell them.</p>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Other;