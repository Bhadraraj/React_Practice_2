import React, { useEffect, useState } from "react";
const DateObj = () => {

    const [time, updatedTime] = useState(new Date())


    useEffect(() => {
        const intervalSet = setInterval(() => updatedTime(new Date()), 1000)
    }, [])

    const year = String(time.getFullYear()).padStart(4, 0);
 
    const date = String(time.getDate()).padStart(2, 0);
    const month = String(time.getMonth()).padStart(2, 0);
    const hrs = String(time.getHours()).padStart(2, 0);

    const min = String(time.getMinutes()).padStart(2, 0);
    const sec = String(time.getSeconds()).padStart(2, 0);
    const milSec = String(time.getMilliseconds()).padStart(3, 0);

    return (
        <>
            <h1>Timer</h1>
            <h2>  {hrs} : {min} : {sec} : {milSec}</h2>
            {date} / {month} / {year}

        </>
    )
}
export default DateObj;
