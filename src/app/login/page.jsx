"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../assets/Group 2.png';
import Link from 'next/link';
import axios from 'axios';

const Login = () => {
  // State to store login credentials and clear input fields
  const [loginCredentials, setLoginCredentials] = useState({
    email: '',
    password: '',
  });

  // State to store error messages
  const [errorMessages, setErrorMessages] = useState({
    email: '',
    password: '',
  });

  const [buttonText, setButtonText] = useState('Sign in');
  const [buttonDisabled, setButtonDisabled] = useState(false);


  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginCredentials({
      ...loginCredentials,
      [name]: value,
    });

    // Clear the associated error message when the input changes
    setErrorMessages({
      ...errorMessages,
      [name]: '',
    });
  };

  // Function to handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonDisabled(true);
    setButtonText('Logging in...');

    const { email, password } = loginCredentials;

    const LOGIN_URL = 'https://api.ooreafrica.org/login';

    try {
      const response = await axios.post(
        LOGIN_URL,
        { email, password },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      const token = response?.data?.token;
      localStorage.setItem('bearerToken', token);
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);

      setLoginCredentials({
        email: '',
        password: '',
      });

      setButtonDisabled(false);
      setButtonText('Sign in');

      window.location.href = "/dashboard";
    } catch (err) {
      setButtonDisabled(false);
      setButtonText('Sign in');

      if (!err?.response) {
        setErrorMessages({ email: 'No server response', password: '' });
      } else if (err.response?.status === 400) {
        setErrorMessages({ email: 'Missing Username', password: 'or Password' });
      } else if (err.response?.status === 401) {
        setErrorMessages({ email: err.response.data.errors.message, password: '' });
      } else {
        setErrorMessages({ email: 'Login Failed', password: '' });
      }
    }
  };

  return (
    <div className="py-24">
      <div className="w-[85%] mx-auto bg-white p-16 rounded-md grid lg:grid-cols-2 grid-cols-1 gap-6">
        <div>
          <div className="mb-10">
            <Link href="/" className="grid place-items-center">
              <Image src={logo} placeholder="blur" alt="logo" />
            </Link>
            <h1 className="text-2xl font-bold text-center pt-8">Login your account</h1>
          </div>
          <div className="mt-8">
            <form className="w-full max-w-md" onSubmit={handleSubmit}>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email address"
                className="mt-6 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green"
                value={loginCredentials.email}
                onChange={handleInputChange}
              />
              <span className="text-red-500">{errorMessages.email}</span>

              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="mt-8 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green"
                value={loginCredentials.password}
                onChange={handleInputChange}
              />
              <span className="text-red-500">{errorMessages.password}</span>

              <button
                type="submit"
                className="mt-8 block w-full px-4 py-3 rounded-md text-sm hover:font-semibold bg-green hover:bg-green-600 transition all-ease duration-300 font-semibold"
                disabled={buttonDisabled}
              >
                {buttonText}
              </button>
              <a
                className="mt-8 block w-full px-4 bg-gray-300 py-3 border no-underline text-center border-gray-300 rounded-md text-sm font-semibold hover:bg-green transition all-ease duration-300"
              >
                sign up
              </a>

              <div className="text-center gray-300 text-sm mt-8">
                <Link href="/">forgot password?</Link>
              </div>
            </form>
          </div>
        </div>
        <div>
          <div className="lg:w-[75%] m-auto p-8 img h-[33rem] rounded">
            <div className="pt-[22rem]">
              <p className="text-[10px] text-center text-white">
                Recent global estimates by UNICEF and partners indicate that at least 340 million
                children under 5 (one in two) suffer from hidden hunger. In the Western Africa UN
                sub-region 67% of children under 5 suffer from hidden hunger.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
