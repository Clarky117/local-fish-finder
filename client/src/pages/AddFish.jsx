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

        const { name, value, type } = event.target;

        setInputField({
            ...inputField,
            [name]: type === 'number' ? Number(value) : value,
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
        <div className='register-main'>

            {Auth.loggedIn() ? (
                <>
                    <div className="addfish-container">

                        <form className='register-form'>
                            <h3 className="register-title-addfish">Add Fish</h3>

                            <label for="fishname">Type of Fish</label>
                            <input className="form-input-addfish" type="text" name='fishname' placeholder='Fish Name'
                                onChange={handleChange} value={inputField.fishname} />

                            <label for="username">Your Username</label>
                            <input className="form-input-addfish" type="text" name='username' placeholder='User Name'
                                onChange={handleChange} value={inputField.username} />

                            <label for="price">Price</label>
                            <input className="form-input-addfish" type="number" name='price' placeholder='Price'
                                onChange={handleChange} value={inputField.price} />

                            <label for="size">Size in cms</label>
                            <input className="form-input-addfish" type="number" name='size' placeholder='Size'
                                onChange={handleChange} value={inputField.size} />

                            <label for="quantity">Quantity</label>
                            <input className="form-input-addfish" type="number" name='quantity' placeholder='Quantity'
                                onChange={handleChange} value={inputField.quantity} />

                            <label for="location">Suburb</label>
                            <input className="form-input-addfish" type="text" name='location' placeholder='Location'
                                onChange={handleChange} value={inputField.location} />

                            <button className="register-btn" style={{ cursor: 'pointer' }} type="button"
                                onClick={handleFormSubmit}>Add Fish</button>

                        </form>

                    </div>
                </>
            ) : (
                <div className='danger-container'>
                <h2>
                    You need to be logged in to sell some fish. Please{' '}
                    <Link className='dc-link' to="/login">login</Link> or <Link className='dc-link' to="/register">signup.</Link>
                </h2>
                </div>
            )}
        </div>


    )
}
