"use client"; // Add this line at the top of the file
import React from 'react';

const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active
        ? 'text-white border-b-2 border-pink-400' // Add border at the bottom
        : 'text-white';

    return (
        <button onClick={selectTab} className="mr-3">
            <p className={`font-bold hover:text-pink-400 ${buttonClasses}`}>
                {children}
            </p>
        </button>
    );
};

export default TabButton;