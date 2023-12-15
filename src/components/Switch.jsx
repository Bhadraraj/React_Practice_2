import React  from "react";

function Switch({ role }) {
    let greeting;
    switch (role) {
        case 'admin':
            greeting = <h1>Welcome, Admin!</h1>;
            break;
        case 'user':
            greeting = <h1>Welcome, User!</h1>;
            break;
        default:
            greeting = <h1>Please sign in</h1>;
            break;
    }
    return <div>{greeting}</div>;
}

export default Switch;
