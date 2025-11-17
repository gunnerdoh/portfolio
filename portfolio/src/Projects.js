import React from 'react';

function Projects() {
    return (
        <div className="p5">
            <h2 className="text-3xl font-bold">Projects</h2>
            {/* Spotify */}
            <div className="flex flex-row items-start">
            <div class="relative flex flex-col my-6 me-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
                <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                    <img src="/img/spotify.jpg" alt="card-image" />
                </div>
                <div class="p-4">
                    <h6 class="mb-2 text-slate-800 text-xl font-semibold">
                        Spotify Treemap
                    </h6>
                    <p class="text-slate-600 leading-normal font-light">
                        A breakdown of your spotify activity.
                    </p>
                </div>
                <div class="px-4 pb-4 pt-0 mt-2">
                    <button class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                    <a href="https://gunnerdoh.github.io/spotify-listening-treemap/" target="_blank"  className="">Link to project</a>
                    </button>
                </div>
            </div>  
            
            {/* Election Mapping */}
            <div class="relative flex flex-col my-6 me-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
                <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                    <img src="/img/election.jpg" alt="card-image" />
                </div>
                <div class="p-4">
                    <h6 class="mb-2 text-slate-800 text-xl font-semibold">
                        Election Mapping
                    </h6>
                    <p class="text-slate-600 leading-normal font-light">
                        Small project breaking election data down by county and using shades of purple.
                    </p>
                </div>
                <div class="px-4 pb-4 pt-0 mt-2">
                    <button class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                    <a href="https://gunnerdoh.github.io/election-map/" target="_blank"  className="">Link to project</a>
                    </button>
                </div>
            </div>  
        </div>
        </div>
    )
}

export default Projects;