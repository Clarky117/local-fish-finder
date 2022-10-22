import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import clarkyLogo from './clarky-logo.png';


export default function Header() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (

    <header className="header">

      <div className="logo">
        <img className='logo-small' src={clarkyLogo} alt="logo pic" />
      </div>

      {/* # is placeholder, update to work in react router */}

      {Auth.loggedIn() ? (
        <>
          <div>
            <Link className='header-font' to="/">Home</Link>
          </div>

          <div>
            <Link className='header-font' to="/me">
              Sell Fish
              {/* {Auth.getProfile().data.username}'s profile */}
            </Link>
          </div>

          <button className="header-btn" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <>

          <div>
            <Link className='header-font' to="/">Home</Link>
          </div>

          <div>
            <Link className="header-font" to="/login">Login</Link>
          </div>


          <div>
            <Link className="header-font" to="/register">Register</Link>
          </div>


        </>
      )}
    </header>

  )
}
