import React from 'react';
function PassArgsToFns() {
    const changeTxt = (a) => {
        alert(a)
    }
    return (
        <>
            <h1>            </h1>
            <button onClick={()=>changeTxt("Text Has Changed")}>Click Me..!</button>
        </>
    )
}
export default PassArgsToFns;