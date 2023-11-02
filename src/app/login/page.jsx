"use client"

import React, { useState } from 'react';
import Image from "next/image";
import logo from "../assets/Group 2.png";
import Link from 'next/link';

const Login = () => {
  // State to store login credentials and clear input fields
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  // State to store error messages
  const [errorMessages, setErrorMessages] = useState({
    email: "",
    password: "",
  });

  // Function to handle the form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    // Backend URL for login
    const backendUrl = "https://api.ooreafrica.org/login"; // Replace with the actual backend URL

    // Form data
    const formData = new FormData(e.target);

    try {
      // Send a POST request to the backend
      const response = await fetch(backendUrl, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Handle success, e.g., redirect to a new page
        window.location.href = "/dashboard"; // Replace with the actual dashboard URL

        // Clear input fields after successful login
        setLoginCredentials({
          email: "",
          password: "",
        });

        // Clear error messages
        setErrorMessages({
          email: "",
          password: "",
        });
      } else {
        // Handle errors, e.g., show an error message
        const errorData = await response.json();
        setErrorMessages({
          email: errorData.email || "",
          password: errorData.password || "",
        });
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  // Function to update login credentials
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginCredentials({
      ...loginCredentials,
      [name]: value,
    });

    // Clear the associated error message when the input changes
    setErrorMessages({
      ...errorMessages,
      [name]: "",
    });
  };

  return (
    <div className="py-24">
      <div className="w-[85%] mx-auto bg-white p-16 rounded-md grid lg:grid-cols-2 grid-cols-1 gap-6">
        <div>
          <div className="mb-10">
            <Link href="/" className="grid place-items-center">
              <Image
                src={logo}
                placeholder="blur"
                alt="logo"
              />
            </Link>
            <h1 className="text-2xl font-bold text-center pt-8">Login your account</h1>
          </div>
          <div className="mt-8">
            <form className="w-full max-w-md" onSubmit={handleLogin}>
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

              <button type="submit" className="mt-8 block w-full px-4 py-3 rounded-md text-sm hover:font-semibold bg-green hover:bg-green-600 transition all-ease duration-300 font-semibold">sign in</button>
              <button type="submit" className="mt-8 block w-full px-4 bg-gray-300 py-3 border border-gray-300 rounded-md text-sm font-semibold hover:bg-green transition all-ease duration-300">sign up</button>

              <div className="text-center gray-300 text-sm mt-8">
                <Link href="/">forgot password?</Link>
              </div>
            </form>
          </div>
        </div>
        <div>
          <div className="lg:w-[75%] m-auto p-8 img h-[33rem] rounded">
            <div className="pt-[22rem]">
              <p className='text-[10px] text-center text-white'>Recent global estimates by UNICEF and partners indicate that at least 340 million children under 5 (one in two) suffer from hidden hunger. In the Western Africa UN sub-region 67% of children under 5 suffer from hidden hunger.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;

