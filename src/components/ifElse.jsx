import React from 'react';

function IfElse({ isLoggedIn }) {
    if (isLoggedIn) {
        return <h1>Welcome back, User!</h1>;
    } else {
        return <h1>Please sign in</h1>;
    }
}

export default IfElse;
