import React from 'react';
import './Header.css';

export default function Header() {
  return (

    <header class="header">

        {/* # is placeholder, update to work in react router */}

        <div class="logo">
            {/* find fish image, resize */}
            {/* <img src="" alt="" /> */}
        </div>

        <div>
            <a href="#MyProfile">My Profile</a>
            <a href="#SearchListings">Search Listings</a>
        </div>

        <div>
            <a href="#Login">Login</a>
            <a href="#CreateAccount">Create Account</a>
        </div>


    </header>

  )
}
