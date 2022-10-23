import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_FISH_QUERY } from '../utils/queries';
import { useState } from 'react';
import { useEffect } from 'react';
import fishPic from './fishes-display.jpg'


function LandingPage() {

    const { loading, data } = useQuery(GET_ALL_FISH_QUERY);

    const [fish, setFish] = useState([]);

    useEffect(() => {
        if (data) {
            setFish(data.allfish)
        }
    }, [data])

    if (loading) {

        return <div className='success-container'>
            <h1>Loading...</h1>
            <h1>I got this!</h1>
        </div>
    }

    if (data) {
        console.log(data);
    }

    return (
        <div className='listings-container'>

            <h2 className='home-title'>Recent Listings</h2>

            <div className='mapped-div'>
                {fish.map((val) => {
                    return <div key={val._id} className="for-sale-card">
                        <h2 className='fsp'> {val.fishname} </h2>
                        {/* placeholder image here */}
                        <img src={fishPic} alt='nice looking fish' className='img-pic' />
                        <h3 className='fsp'> From - {val.username} </h3>
                        <h3 className='fsp'> ${val.price} </h3>
                        <h3 className='fsp'> {val.size}cms </h3>
                        <h3 className='fsp'> {val.quantity} of </h3>
                        <h3 className='fsp'> Located: {val.location} </h3>
                        <h3 className='fsp'> Contact - </h3>

                    </div>
                })}
            </div>

        </div>

    )
}

export default LandingPage;
