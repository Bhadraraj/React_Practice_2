import React from 'react';
import { FetchCustom } from './FetchCustom'

const TodoListing = () => {

    const state = FetchCustom("https://fakestoreapi.com/carts")
    return (
        <div>
            <table border="2" cellPadding="5px" cellSpacing="0">
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Status</th>
                </tr>

                {state && state.map(todo => (
                    <tr key={todo.id}>
                        <td> {todo.id}</td>
                        <td> {todo.title}</td>


                        {todo.completed ? (<td>Completed </td>) : (<td>Waiting </td>)}

                    </tr>


                ))}
            </table>

        </div>
    )
}

export default TodoListing