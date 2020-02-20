import React from 'react';
import { Link } from 'react-router-dom'

export default function LandingPage(props) {
  return (
    <div className="landing-page-wrapper">
      <h4>Welcome to Collab!</h4>
      <p>Create a network. Find an opportunity. Make a connection.</p>
      <p>Collab is here to help your startup connect with and support others in your community.</p>
      <ul>
        {props.currentUser === true &&
          <div>
            <Link to="/explore"><li>Explore</li></Link>
          </div>
        }
        {props.currentUser === false &&
          <div>
            <Link to="/login"><li>Login</li></Link>
            <Link to="/register"><li>Register</li></Link>
          </div>
        }
      </ul>
    </div >
  )
}