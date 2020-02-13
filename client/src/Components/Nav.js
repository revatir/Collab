import React from 'react'
import { Link } from 'react-router-dom';

export default function Nav(props) {
  return (
    <div>
      <nav>
        {props.currentUser === false &&
          <ul>
            <Link to="/login"><li>Login</li></Link>
            <Link to="/register"><li>Register</li></Link>
          </ul>
        }
        {props.currentUser &&
          <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/explore"><li>Explore</li></Link>
            <Link to="/myprofile"><li>My Profile</li></Link>
            <Link to="/login" onClick={props.handleLogout}><li>Logout</li></Link>
          </ul >
        }
      </nav >
    </div >
  )
}