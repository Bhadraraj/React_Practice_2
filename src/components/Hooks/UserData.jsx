import React from 'react'
import { FetchCustom } from './FetchCustom'
const UserData = () => {
    const state = FetchCustom("https://jsonplaceholder.typicode.com/users");

    return (
        <div>
            <table border="2" cellPadding="5px" cellSpacing="0">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>

                    <th>Street</th>
                    <th>Suite</th>
                    <th>City</th>
                    <th>Zipcode</th>
                    <th>Lattitude</th>
                    <th>Longitude</th>
                </tr>
                {

                    state && state.map(user => (
                        <tr key={user.id}>

                            <td>{user.id} </td>
                            <td>{user.name} </td>
                            <td> {user.username}</td>
                            <td> {user.email}</td>
                            <td> {user.address.street}</td>
                            <td> {user.address.suite}</td>
                            <td> {user.address.city}</td>
                            <td> {user.address.zipcode}</td>
                            <td> {user.address.geo.lat}</td>
                            <td> {user.address.geo.lng}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}

export default UserData