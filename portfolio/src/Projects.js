import React from 'react';

function Projects() {
    return (
        <div>
            <h2 className="text-3xl font-bold mb-3">Projects</h2>
            <ul>
                <li className="mb-5">
                    <p className="text-xl text-gray-600 font-bold font-italic">HuskyswapUW.com</p>
                    <p>A website designed for UW students to buy and sell goods between each other. Working on making into an app.</p>
                    <a href="https://huskyswapuw.com" target="_blank"  className="text-blue-500">Link to site</a>
                </li>
                <li className="mb-5">
                    <p className="text-xl text-gray-600 font-bold font-italic">NYC Air Quality and Criminal Analysis</p>
                    <p>
                        Used R Libraries (ggplot2, shiny, DT, sf, etc) to analyze and visualize correlations between asir quality and criminal activity in NYC. 
                        This was a group project for INFO 201, a class focusing on R and RStudio. 
                    </p>
                    <a href="https://github.com/gunnerdoh/NYC-Air-Quality-and-Criminal-Activity-Analysis" className="text-blue-500">Github Link</a>
                </li>
                <li className="mb-5">
                    <p className="text-xl text-gray-600 font-bold font-italic">Find Food Seattle</p>
                    <p>
                        Proof-of-concept web app to help Seattle residents find free food resources near them, and for users to upload listings of free food
                        available through legitimate distributors. Another group project, front end written in React and Bootstrap with Firebase storage and 
                        authentication.  
                    </p>
                    <a href="https://github.com/info340c-sp24/project-dr-pepper-code-monkeys" className="text-blue-500">Github Link</a>
                </li>
            </ul>
        </div>
    )
}

export default Projects;