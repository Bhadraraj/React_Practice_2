import React, { useState } from "react";

function ProductListing2() {
    const initialProducts = [
        { id: 1, name: "Straw Berry Milk Shake", price: 80 },
        { id: 2, name: "Black Berry Milk Shake", price: 100 },
        { id: 3, name: "Pomegrannate Milk Shake", price: 200 },
        { id: 4, name: "Vennila Milk Shake4", price: 150 },
        { id: 5, name: "Chocholate Milk Shake", price: 180 },
    ];

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const existingProduct = cart.find((p) => p.id === product.id);

        if (existingProduct) {
            const updatedCart = cart.map((p) => {
                if (p.id === product.id) {
                    return {
                        ...p,
                        quantity: p.quantity + 1,
                        totalPrice: (p.quantity + 1) * p.price,
                    };
                }
                return p;
            });

            setCart(updatedCart);
        } else {
            setCart([
                ...cart,
                { ...product, quantity: 1, totalPrice: product.price }
            ]);
        }
    };

    const removeFromCart = (product) => {
        const updatedCart = cart
            .map((p) => {if (p.id === product.id) {return {...p,quantity: p.quantity - 1,totalPrice: (p.quantity - 1) * p.price,};}return p;}).filter((p) => p.quantity > 0);

        setCart(updatedCart);
    };

    const calculateTotalPrice = () => {
        return cart.reduce((total, product) => total + product.totalPrice, 0);
    };

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {initialProducts.map((product) => (
                    <li key={product.id}>
                        <strong>{product.name}</strong> -&#x20B9;{product.price}
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                        {cart.some((p) => p.id === product.id) && (
                            <button onClick={() => removeFromCart(product)}>Remove from Cart</button>
                        )}
                    </li>
                ))}
            </ul>
            <hr />

            <h2>Add to Cart</h2>
            <ul>
                {cart.map((product) => (
                    <li key={product.id}>
                        <strong>{product.name}</strong> - ${product.price} x {product.quantity} = ${product.totalPrice}
                    </li>
                ))}
            </ul>
            <p>Total Price: ${calculateTotalPrice()}</p>
        </div>
    );
}

export default ProductListing2;