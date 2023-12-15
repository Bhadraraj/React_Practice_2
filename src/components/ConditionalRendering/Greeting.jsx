import React from "react";
import GuestGreeting from './GuestGreeting';
import UserGreetings from './UserGreetings';
function Greeting(props) {

    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) {
        return <UserGreetings name="Bhadri" />;
    }

    return <GuestGreeting />;

}
export default Greeting;