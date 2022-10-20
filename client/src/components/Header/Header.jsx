import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


export default function Header() {
  return (

    <header className="header">

        {/* # is placeholder, update to work in react router */}

        <div className="logo">
            {/* find fish image, resize */}
            {/* <img src="" alt="" /> */}
        </div>

        <div>
            {/* <a href='/'>Home</a> */}
            <Link to="/">Home</Link>
        </div>

        <div>
            {/* <a href="/login">Login</a> */}
            <Link to='/login'>Login</Link>
            {/* <a href="/register">Create Account</a> */}
            <Link to='/register'>Register</Link>

        </div>

    </header>

  )
}
