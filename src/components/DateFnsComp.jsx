import React, { useState, useEffect } from 'react';

const DateComponent = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000); 


    }, []);

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');

    return (
        <div>
            <h1>Current Date and Time:</h1>
            <p>{`Date: ${day}/${month}${year}`}</p>
            <p>{`Time: ${hours}:${minutes}:${seconds}`}</p>
        </div>
    );
};

export default DateComponent;
