import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
    return (
        <section className="my-services" id="services">
            <h2 className="section__title section__title--services">Clarky's Local Fish Finder</h2>
            <div className="services">

                <div className="service">
                    <h3>Hey There</h3>
                    <p>Thanks for taking the time to stop by. The aim of this site is
                        to provide a local space around Perth where the cichlid community
                        can come together to buy and sell fish. Anyone has the ability
                        to view all fish currently available from local breeders and 
                        fellow enthusiasts, however to create a listing of your own, 
                        registering an account is required.
                    </p>
                </div>

            </div>

            <Link className='btn' to='/fish'>Local Listings</Link>
            {/* <a href="#work" className="btn">My Work</a> */}

        </section>
    )
}
