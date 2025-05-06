import React from 'react';

function Other() {
    return (
        <>
            <h2 className="text-2xl font-bold">Other</h2>
            <ul className="list-inside">
                <li>
                    <a 
                    href="https://gunnerdoh.bearblog.dev/blog/" 
                    className="text-blue-700 underline hover:text-blue-800 hover:underline-offset-2 transition-all inline-flex items-center gap-1"
                    target="_blank" rel="noopener"
                    >
                    Blog -{`>`}
                    </a>       
                </li>
                <ul>
                    <a 
                    href="https://www.youtube.com/@gunnerdohenwend" 
                    className="text-blue-700 underline hover:text-blue-800 hover:underline-offset-2 transition-all inline-flex items-center gap-1"
                    target="_blank" rel="noopener"
                    >
                    Youtube -{`>`}
                    </a>       
                </ul>
                <li>
                    <a 
                    href="/old" 
                    className="text-blue-700 underline hover:text-blue-800 hover:underline-offset-2 transition-all inline-flex items-center gap-1"
                    target="_blank" rel="noopener"
                    >
                    Old Portfolio -{`>`}
                    </a>       
                </li>
            </ul>
        </>
    )
}

export default Other;