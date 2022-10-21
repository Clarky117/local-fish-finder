import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';


export default function Header() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (

    <header className="header">

      {/* # is placeholder, update to work in react router */}

      <div>
        {Auth.loggedIn() ? (
          <>
            <div>
              <Link to="/">Home</Link>
            </div>
            <Link className="" to="/me">
              Sell Fish
              {/* {Auth.getProfile().data.username}'s profile */}
            </Link>
            <button className="" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <div>

              <div>
                <Link to="/">Home</Link>
              </div>

              <div>

                <Link className="" to="/login">
                  Login
                </Link>
                <Link className="" to="/register">
                  Register
                </Link>
              </div>

            </div>
          </>
        )}
      </div>
    </header>

  )
}
