import React from 'react';

function Work() {
    return (
        <>
            <h2 className="text-3xl mt-5 mb-4 flex flex-row justify-center font-bold">Experience</h2>
            {/* AML */}
            <a href="#" class="m-4 flex flex-col items-center bg-gray-200 bg-neutral-primary-soft border border-default rounded-base shadow-xs md:flex-row">
                <div class="flex items-center justify-center bg-white w-full md:w-64 h-64 rounded-base mb-4 md:mb-0 flex-shrink-0">
                    <img class="object-contain max-w-full max-h-full p-4" src="/img/work/aml.png" alt=""></img>
                </div>
                <div class="flex flex-col justify-between md:p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-heading">Operations Intern</h5>
                    <p class="mb-2 text-xl">Alaska Marine Lines</p>
                    <div>
                        <p className="mb-2">
                        - Developed and deployed Office Scripts to automate Excel workflows, reducing manual processing time and
                        improving data accuracy
                        </p>
                        <p className="mb-2">
                        - Migrated a legacy customer service database to new software, ensuring data integrity, optimizing schema design, and
                        improving query performance
                        </p>
                        <p className="mb-2">
                        - Performed high-volume document verification and data entry, maintaining precise records and supporting operational
                        reporting
                        </p>
                    </div>
                </div>
            </a>

            {/* iSchool */}
            <a href="#" class="m-4 flex flex-col bg-gray-100 items-center bg-neutral-primary-soft border border-default rounded-base shadow-xs md:flex-row">
                <div class="flex items-center justify-center bg-white w-full md:w-64 h-64 rounded-base mb-4 md:mb-0 flex-shrink-0">
                    <img class="object-contain max-w-full max-h-full p-4" src="/img/work/ischool-logo.png" alt=""></img>
                </div>
                <div class="flex flex-col justify-between md:p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-heading">Informatics Tutor</h5>
                    <p class="mb-2 text-xl">Unviersity of Washington</p>
                    <div>
                        <p className="mb-2">
                        - Provided one-on-one tutoring for undergraduate students in Python and R programming, improving students'
                        assignment completion rates and technical ability.
                        </p>
                        <p className="mb-2">
                        - Consulted on 15+ student capstone projects, troubleshooting
                        technical challenges such as debugging, visualization, and integration while providing guidance on best practices
                        </p>
                        <p className="mb-2">
                        - Mentored students through complex programming concepts, resulting in improved academic performance and
                        increased confidence.
                        </p>
                    </div>
                </div>
            </a>

            {/* Axiom */}
            <a href="#" class="m-4 flex flex-col bg-gray-200 items-center bg-neutral-primary-soft border border-default rounded-base shadow-xs md:flex-row">
                <div class="flex items-center justify-center bg-gray-900 w-full md:w-64 h-64 rounded-base mb-4 md:mb-0 flex-shrink-0">
                    <img class="object-contain max-w-full max-h-full p-4" src="/img/work/axiom.png" alt=""></img>
                </div>
                <div class="flex flex-col justify-between md:p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-heading">Software Engineering Intern</h5>
                    <p class="mb-2 text-xl">Axiom Health</p>
                    <div>
                        <p className="mb-2">
                            - Analyzed large-scale healthcare datasets using Python, pitching findings in surgery trends and physician patterns that informed executive decision making.
                        </p>
                        <p className="mb-2">
                            - Built automated data collection pipeline to collect 3,000+ records from public sources and API endpoints, improving access to data for machine learning models.
                        </p>
                        <p className="mb-2">
                            - Performed financial analysis of 15+ medtech companies, presenting findings to senior employees.
                        </p>
                    </div>
                </div>
            </a>

            <a href="#" class="m-4 flex flex-col bg-gray-100 items-center bg-neutral-primary-soft border border-default rounded-base shadow-xs md:flex-row">
                <div class="flex items-center justify-center bg-blue-400 w-full md:w-64 h-64 rounded-base mb-4 md:mb-0 flex-shrink-0">
                    <img class="object-contain max-w-full max-h-full p-4" src="/img/work/ImG_3839.jpg" alt=""></img>
                </div>
                <div class="flex flex-col justify-between md:p-4 leading-normal">

                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-heading">Surf Instructor</h5>
                    <p class="mb-2 text-xl">San Diego Surf School</p>
                    <div>
                        <p className="mb-2">
                            - Led individual and group lessons for beginner surfers.
                        </p>
                        <p className="mb-2">
                            - Achieved a 100% completion rate in student wave-catching. 
                        </p>
                        <p className="mb-2">
                            - Effectively mediated and led duck-duck goose games at children's camps, leading to a 90% increase in lunchtime enjoyment.
                        </p>
                    </div>
                </div>
            </a>
        </>
    )
}

export default Work;