import React from 'react';

function TernaryOptr({ isLoggedIn }) {
    return (
        <div>
            {isLoggedIn ? <h1>Welcome back, User!</h1> : <h1>Please sign in</h1>}
        </div>
    );
}

export default TernaryOptr;
