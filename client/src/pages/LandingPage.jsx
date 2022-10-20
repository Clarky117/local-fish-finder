import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_FISH_QUERY } from '../utils/queries';
import { useState } from 'react';
import { useEffect } from 'react';


function LandingPage() {

    const { loading, data } = useQuery(GET_ALL_FISH_QUERY);

    const [fish, setFish] = useState([]);

    useEffect(() => {
        if (data) {
            setFish(data.allfish)
        }
    }, [data])

    if (loading) {
        return <div>
            <h1>Loading...</h1>
            <h1>Figuring shit out!!!</h1>
        </div>
    }

    if (data) {
        console.log(data);
    }



    return (
        <div>
            <h1>Home Page - Recent Listings</h1>

            <div>
            {fish.map((val) => {
          return <div key={val._id} className="for-sale-container">
            <h1> {val.fishname} </h1>
            <h2> {val.username} </h2>
            <h2> {val.price} </h2>
            <h2> {val.size} </h2>
            <h2> {val.quantity} </h2>
            <h2> {val.location} </h2>
          </div>
        })}
            </div>

        </div>

    )
}

export default LandingPage;
