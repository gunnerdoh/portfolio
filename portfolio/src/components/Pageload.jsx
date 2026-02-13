import React, { useEffect, useState } from 'react';

function Pageload() {
    const [loadString, setLoadString] = useState('');

    useEffect(() => {
        const navigation = performance.getEntriesByType('navigation')[0];
        const loadTime = Math.round(navigation.loadEventEnd);
        setLoadString(`Page loaded in ${loadTime} ms`);
    }, []);

    return (
        <div className="font-primary text-end pt-1 pe-1">
            {loadString}
        </div>
    );
}

export default Pageload;