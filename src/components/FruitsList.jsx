import React from 'react';

function Fruits(props) {
    return <li>{props.fruit}</li>;
}

function FruitList() {
    const fruits = ["Apple", "Banana", "Grapes", "Orange"];

    return (
        <>
            <h3>Fruits List</h3>
            <ul>
                {fruits.map(a => (
                    <Fruits key={a} fruit={a} />
                ))}
            </ul>
        </>
    );
}

export default FruitList;
