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
                    Writing ->
                    </a>       
                </li>
                <ul>
                    <a 
                    href="https://www.youtube.com/watch?v=HS9Buft_WVg&ab_channel=GunnerDohrenwend" 
                    className="text-blue-700 underline hover:text-blue-800 hover:underline-offset-2 transition-all inline-flex items-center gap-1"
                    target="_blank" rel="noopener"
                    >
                    "The Weight" Cover ->
                    </a>       
                </ul>
                <li>
                    <a 
                    href="/old" 
                    className="text-blue-700 underline hover:text-blue-800 hover:underline-offset-2 transition-all inline-flex items-center gap-1"
                    target="_blank" rel="noopener"
                    >
                    Old Portfolio ->
                    </a>       
                </li>
            </ul>
        </>
    )
}

export default Other;