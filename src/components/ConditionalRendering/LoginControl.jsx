import React, { useState } from 'react';

function LoginControl() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    };

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    };

    const Greeting = ({ isLoggedIn }) => {
        return <h2>{isLoggedIn ? 'Welcome back!' : 'Please log in'}</h2>;
    };

    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {isLoggedIn ? (
                <button onClick={handleLogoutClick}>Logout</button>
            ) : (
                <button onClick={handleLoginClick}>Login</button>
            )}
        </div>
    );
}

export default LoginControl;
