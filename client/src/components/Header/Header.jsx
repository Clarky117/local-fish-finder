import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import clarkyLogo from './clarky-logo.png';
import { useEffect } from 'react';

export default function Header() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  // any time this header is called it will scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <header className="header">

      <div className="logo">
        <img className='logo-small' src={clarkyLogo} alt="logo pic" />
      </div>

      {/* # is placeholder, update to work in react router */}

      {Auth.loggedIn() ? (
        <>
          <div>
            <Link className='header-font' to="/"><h2 className='small-font'>Home</h2></Link>
          </div>

          <div>
            <Link className='header-font' to="/fish"><h2 className='small-font'>Fish</h2></Link>
          </div>

          <div>
            <Link className='header-font' to="/addfish">
              <h2 className='small-font'>Sell Fish</h2>
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
            <Link className='header-font' to="/"><h2 className='small-font'>Home</h2></Link>
          </div>

          <div>
            <Link className='header-font' to="/fish"><h2 className='small-font'>Fish</h2></Link>
          </div>

          <div>
            <Link className="header-font" to="/login"><h2 className='small-font'>Login</h2></Link>
          </div>


          <div>
            <Link className="header-font" to="/register"><h2 className='small-font'>Register</h2></Link>
          </div>

        </>
      )}
    </header>

  )
}
