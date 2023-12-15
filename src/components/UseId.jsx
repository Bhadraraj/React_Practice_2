import React, { useId } from 'react'

const UseId = () => {
    const id = useId();

    return (
        <div>

            <label htmlFor={`${id}-name`} >Name</label>
            <input type="text" id={`${id}-name`} />
            <label htmlFor={`${id}-lastName`}>Last Name</label>
            <input type="text" id={`${id}-lastName`} />
            <label htmlFor={`${id}-phoneNo`} >Phone Number </label>
            <input type="text" id={`${id}-phoneNo`} />

        </div>
    )
}

export default UseId