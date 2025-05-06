import React from 'react';

function Projects() {
    return (
        <div>
            <h2 className="text-3xl font-bold mb-3">Projects</h2>
            <ul>
                <li className="mb-5">
                    <p className="text-xl text-gray-600 font-bold font-italic">Sleep Visualizations</p>
                    <p>Visualizing sleep data in a new way. WIP.</p>
                    <p>
                        <a href="https://github.com/gunnerdoh/sleep-viz/" target="_blank"  className="text-blue-500">Github</a>
                    </p>
                </li>
                <li className="mb-5">
                    <p className="text-xl text-gray-600 font-bold font-italic">Purple Elections</p>
                    <p>Election demographics in a new shade, broken down by state and county.</p>
                    <p>
                        <a href="https://gunnerdoh.github.io/election-map/" target="_blank"  className="text-blue-500">Link to project</a>
                    </p>
                </li>
                <li className="mb-5">
                    <p className="text-xl text-gray-600 font-bold font-italic">NYC Air Quality and Criminal Analysis</p>
                    <p>
                        Used R Libraries (ggplot2, shiny, DT, sf, etc) to analyze and visualize correlations between asir quality and criminal activity in NYC. 
                        This was a group project for INFO 201, a class focusing on R and RStudio. 
                    </p>
                    <a href="https://github.com/gunnerdoh/NYC-Air-Quality-and-Criminal-Activity-Analysis" className="text-blue-500">Github</a>
                </li>
                <li className="mb-5">
                    <p className="text-xl text-gray-600 font-bold font-italic">Find Food Seattle</p>
                    <p>
                        Proof-of-concept web app to help Seattle residents find free food resources near them, and for users to upload listings of free food
                        available through legitimate distributors. Another group project, front end written in React and Bootstrap with Firebase storage and 
                        authentication.  
                    </p>
                    <a href="https://github.com/info340c-sp24/project-dr-pepper-code-monkeys" className="text-blue-500">Github</a>
                </li>
            </ul>
        </div>
    )
}

export default Projects;