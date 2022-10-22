import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="register-main">

      {data ? (
        <div className='success-container'>
          <h3>
            Success! Redirecting back to{' '}
            <Link to="/">home.</Link>
          </h3>
        </div>
      ) : (

        <div className="register-container">

          <form className='register-form' onSubmit={handleFormSubmit}>
            <h3 className="register-title">Sign Up</h3>

            <label for="username">Name</label>
            <input
              className="form-input"
              placeholder="Your Username"
              name="username"
              type="text"
              value={formState.name}
              onChange={handleChange}
            />

            <label for="email">Email</label>
            <input
              className="form-input"
              placeholder="Your Email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
            />

            <label for="username">Password</label>
            <input
              className="form-input"
              placeholder="******"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
            />
            <button
              className="register-btn"
              style={{ cursor: 'pointer' }}
              type="submit"
            >
              Submit
            </button>
          </form>

          {error && (
            <div className="error-message">
              {error.message}
            </div>
          )}

        </div>
      )}

      {/* {error && (
        <div className="error-message">
          {error.message}
        </div>
      )} */}

    </main>
  );
};

export default Login;
