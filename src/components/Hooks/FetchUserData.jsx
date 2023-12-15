import React from 'react';
import { FetchCustom } from './FetchCustom';

const FetchUserData = () => {


    const state = FetchCustom("https://fakestoreapi.com/carts")
    return (
        <div className=''>
            <table border="2" cellPadding="5px" cellSpacing="0">
                <thead>
                    <tr>


                        <td>Id</td>
                        <td>Date</td>
                        <td>Products Code</td>
                        <td>Products Quantity</td>


                    </tr>
                </thead>



                <tbody>
                    {state.map(order => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.userId}</td>
                            <td>{order.date}</td>
                            <td>
                                <ul>
                                    {order.products.map(product => (
                                        <li key={product.productId}>
                                            Product ID: {product.productId}, Quantity: {product.quantity}
                                        </li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default FetchUserData