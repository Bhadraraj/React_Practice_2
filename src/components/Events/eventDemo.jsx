import React, { useState } from 'react'

const EventDemo = () => {
    const [inpuVal, setInputVal] = useState('');
    const [sumbitVal, submittedValuest] = useState('');
    const handleValue = (e) => {
        setInputVal(e.target.value)
    }
    const submitted = (e) => {
        e.preventDefault();
        submittedValuest(inpuVal)

    }
    return (
        <>
            <form >
                <label > Enter Your Name</label>
                <input type="text" value={inpuVal} onChange={handleValue} />
                <p>Value : {inpuVal}</p>
                <p>Submitted Value : {sumbitVal}</p>
                <input type="submit" onClick={submitted} />
            </form>
        </>
    )
}

export default EventDemo