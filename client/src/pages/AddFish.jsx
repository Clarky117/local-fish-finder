import React from 'react'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { Link } from 'react-router-dom'
import { ADD_FISH } from '../utils/mutations'
import Auth from '../utils/auth';

export default function AddFish() {

    const [inputField, setInputField] = useState({
        fishname: '',
        username: '',
        price: '',
        size: '',
        quantity: '',
        location: '',
    })

    const [createFish] = useMutation(ADD_FISH);

    const handleChange = (event) => {

        const { name, value } = event.target;

        setInputField({
            ...inputField,
            [name]: value,
        });
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(inputField);

        createFish({
            variables: inputField
        })
    }

    return (
        <div>
            <h1>Add Fish</h1>

            {Auth.loggedIn() ? (
                <>
                    {/* <form onSubmit={onSubmit}> */}
                    <form>

                        <input type="text" name='fishname' placeholder='Fish Name'
                            onChange={handleChange} value={inputField.fishname} />

                        <input type="text" name='username' placeholder='User Name'
                            onChange={handleChange} value={inputField.username} />

                        <input type="number" name='price' placeholder='Price'
                            onChange={handleChange} value={inputField.price} />

                        <input type="number" name='size' placeholder='Size'
                            onChange={handleChange} value={inputField.size} />

                        <input type="number" name='quantity' placeholder='Quantity'
                            onChange={handleChange} value={inputField.quantity} />

                        <input type="text" name='location' placeholder='Location'
                            onChange={handleChange} value={inputField.location} />

                        <button type="button" onClick={handleFormSubmit}>Add Fish</button>

                    </form>
                </>
            ) : (
                <p>
                    You need to be logged in to sell some fish. Please{' '}
                    <Link to="/login">login</Link> or <Link to="/register">signup.</Link>
                </p>
            )}
        </div>


    )
}
