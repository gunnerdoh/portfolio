import React from 'react';

function Other() {
    return (
        <>
            <ul>
                <li>
                    <a 
                    href="https://gunnerdoh.bearblog.dev/blog/" 
                    className="text-blue-600 underline hover:text-blue-800 hover:underline-offset-2 transition-all inline-flex items-center gap-1"
                    target="_blank" rel="noopener"
                    >
                    Writings ->
                    </a>       
                </li>
                <ul>
                    <a 
                    href="https://soundcloud.com/glasstrees1" 
                    className="text-blue-600 underline hover:text-blue-800 hover:underline-offset-2 transition-all inline-flex items-center gap-1"
                    target="_blank" rel="noopener"
                    >
                    Portfolio, v2.0
                    </a>       
                </ul>
                <ul>
                    <a 
                    href="https://soundcloud.com/glasstrees1" 
                    className="text-blue-600 underline hover:text-blue-800 hover:underline-offset-2 transition-all inline-flex items-center gap-1"
                    target="_blank" rel="noopener"
                    >
                    Portfolio, v1.0
                    </a>       
                </ul>
            </ul>
        </>
    )
}

export default Other;