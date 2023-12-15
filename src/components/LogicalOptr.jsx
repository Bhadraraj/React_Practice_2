import React from 'react';

function LogicalOptr({ isLoggedIn }) {
    return (
        <div>
            {isLoggedIn && <h1>Welcome back, {isLoggedIn}</h1>}
            {!isLoggedIn && <h1>Please sign in</h1>}
        </div>
    );
}

export default LogicalOptr;
