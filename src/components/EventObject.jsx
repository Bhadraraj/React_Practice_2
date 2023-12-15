import React from 'react';

function EventObject() {
    const shoot = (a, b) => {

        alert(`${a} --> ${b.type}`)
    };

    return (
        <div>
            {/* <button onClick={(event) => shoot("Welcome to React Js", event)}> Get Event </button> */}

            <button onClick={(event) => shoot("Welcome", event)}>Event Btn</button>

        </div>
    );
}

export default EventObject;
