import React from "react";
// import "./App.css";
import { Welcome, Myfns, Fns, name } from "./welcome";
import { sampleData as user } from "./sample-data";

function ListUser(user) {
    console.log(user);
    return (
        <div>
            {/* <h1> fromlist user</h1> */}
            <li key="user.id"> {user.name}</li>
        </div>
    );
}
const User = () => {
    console.log(user);
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="para">
                    Welcome to React Js class
                    <br />
                    <br /> {name}
                </h1>
                <Welcome />
                <Myfns />
                <Fns />
                <ul>
                    {user.length === 0 ? (
                        <li>No Data </li>
                    ) : (
                        user.map((user) => {
                            // return <li let key="user.id"> {user.name}</li>;
                            return (
                                <>
                                    <ListUser user={user} />
                                </>
                            );
                        })
                    )}
                </ul>
            </header>
            .className("App-header")
        </div>
    );
};

export default User;
