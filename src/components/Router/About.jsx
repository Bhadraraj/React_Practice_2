import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>About
      <ul>
        <li>
          <Link to='./1'> About 1
          </Link>


        </li>
        <li>    <Link to='./2'> About 2
        </Link>

        </li>

        <li>
          <Link to='./3'> About 3
          </Link></li>
      </ul>
    </div>
  )
}

export default About