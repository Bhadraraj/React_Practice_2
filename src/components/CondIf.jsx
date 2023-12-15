import React from "react";
function CondIf(props) {
    function user() {
        if (props.name) {
            alert(props.name)
        }
        else {
            alert("Welcome New User")
        }
    }
    return (
        <>
            <button onClick={user}>Click Me </button>
        </>
    )
}
export default CondIf;