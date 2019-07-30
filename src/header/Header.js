import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'


const authenticatedOptions = (
  <React.Fragment> 

    <Link to="/create">Create</Link>
    <Link to="/posts">Posts</Link>
    <Link to="/dashboard">Dashboard</Link>
    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out">Sign Out</Link>
  </React.Fragment>
)  

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-up">Sign Up</Link>
    <Link to="/sign-in">Sign In</Link> 
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <Link to="/home">Home</Link> 
  </React.Fragment> 
)

const Header = ({ user }) => (
  <header className="main-header">
  <link href='http://fonts.googleapis.com/css?family=Great+Vibes' rel='stylesheet' type='text/css'/> 
  <h3>Glassy</h3>
    <nav> 
      {/* { user && <span>Welcome, {user.email}</span>}  */}
      { user ? authenticatedOptions : unauthenticatedOptions }
      { alwaysOptions }
    </nav>
  </header> 

)  
  
export default Header
