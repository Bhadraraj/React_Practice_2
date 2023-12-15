import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            {/* Use the Link component to create navigation links */}
            <ul>
                <li>  <Link to="/">Home</Link>           </li>
                <li>  <Link to="/about">About</Link>     </li>
                <li>  <Link to="/contact">Contact</Link> </li>
            </ul>
            {/* Add more links as needed */}
        </nav>
    );
}

export default Nav;
