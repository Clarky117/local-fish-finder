import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main className="register-main">

      {data ? (
        <div className='success-container'>
          <p>
            Success! Redirecting back to{' '}
            <Link to="/">home.</Link>
          </p>
        </div>
      ) : (

        <div className="login-container">

          <form className='register-form' onSubmit={handleFormSubmit}>
            <h3 className="register-title">Login</h3>

            <label htmlFor="email">Email</label>
            <input
              className="form-input"
              placeholder="Your email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
            />

            <label htmlFor="email">Password</label>
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