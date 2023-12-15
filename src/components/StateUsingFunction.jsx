import React, { useState } from "react";

function StateUsingFunction() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    
    return (
        <>
            <h3>Count: {count}</h3>
            <button onClick={handleIncrement}>Add Product</button>
            <button onClick={handleDecrement}>Remove Product</button>
        </>
    );
}

export default StateUsingFunction;
