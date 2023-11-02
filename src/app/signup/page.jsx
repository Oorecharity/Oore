"use client"

import React, { useState } from 'react';
import Image from "next/image";
import logo from "../assets/Group 2.png";
import { country } from "../../../data";
import Link from 'next/link';

const Signup = () => {
  // State to store the selected country and clear input fields
  const [selectedCountry, setSelectedCountry] = useState("");
  const [inputFields, setInputFields] = useState({
    username: "",
    password: "",
    phone: "",
    email: "",
    confirmPassword: "",
  });

  // State to store error messages
  const [errorMessages, setErrorMessages] = useState({
    username: "",
    password: "",
    phone: "",
    email: "",
    confirmPassword: "",
  });

  // Function to handle the select change event
  const handleSelectChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  // Function to handle the form submission
  const handleSignup = async (e) => {
    e.preventDefault();

    // Backend URL for registration
    const backendUrl = "https://api.ooreafrica.org/register"; // Replace with the actual backend URL

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

        // Clear input fields after successful submission
        setInputFields({
          username: "",
          password: "",
          phone: "",
          email: "",
          confirmPassword: "",
        });

        // Clear error messages
        setErrorMessages({
          username: "",
          password: "",
          phone: "",
          email: "",
          confirmPassword: "",
        });
      } else {
        // Handle errors, e.g., show an error message
        const errorData = await response.json();
        setErrorMessages({
          username: errorData.username || "",
          password: errorData.password || "",
          phone: errorData.phone || "",
          email: errorData.email || "",
          confirmPassword: errorData.confirmPassword || "",
        });
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  // Function to update input field values
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputFields({
      ...inputFields,
      [name]: value,
    });

    // Clear the associated error message when the input changes
    setErrorMessages({
      ...errorMessages,
      [name]: "",
    });
  };

  return (
    <div className="login py-16">
      <div className="w-[85%] mx-auto bg-white p-8 rounded-md flex flex-col justify-center items-center">
        <div className="">
          <div className="mb-12 grid place-items-center">
            <Link href="/" className='mt-8'>
              <Image
                src={logo}
                placeholder="blur"
                alt='logo'
              />
            </Link>
            <h1 className="text-2xl font-bold text-left my-6">Create Your account</h1>
          </div>
          <div className="mt-8">
            <div className="lg:grid grid-cols-2 gap-6">
              <form className="w-full max-w-md" onSubmit={handleSignup}>
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  id="username"
                  className="mt-3 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green"
                  value={inputFields.username}
                  onChange={handleInputChange}
                />
                <span className="text-red-500">{errorMessages.username}</span>

                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  name="password"
                  className="mt-8 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green"
                  value={inputFields.password}
                  onChange={handleInputChange}
                />
                <span className="text-red-500">{errorMessages.password}</span>

                <input
                  type="tel"
                  id='phone'
                  name='phone'
                  placeholder="phone number"
                  className="mt-8 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green"
                  value={inputFields.phone}
                  onChange={handleInputChange}
                />
                <span className="text-red-500">{errorMessages.phone}</span>
              </form>
              <form className="w-full max-w-md">
                <input
                  type="email"
                  id='email'
                  name='email'
                  placeholder="Email Address"
                  className="mt-3 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green"
                  value={inputFields.email}
                  onChange={handleInputChange}
                />
                <span className="text-red-500">{errorMessages.email}</span>

                <input
                  type="password"
                  id='confirmPassword'
                  name='confirmPassword'
                  placeholder="Confirm Password"
                  required
                  className="mt-8 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green"
                  value={inputFields.confirmPassword}
                  onChange={handleInputChange}
                />
                <span className="text-red-500">{errorMessages.confirmPassword}</span>

                <select id="country" name="country" onChange={handleSelectChange} value={selectedCountry} className="mt-8 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green">
                  <option value="" required>Select country</option>
                  {
                    country.map(({ id, place }) => {
                      return (
                        <option key={id} value={place}>
                          {place}
                        </option>
                      )
                    })
                  }
                </select>
              </form>
            </div>
            <div className='grid place-items-center mt-8'>
              <button type="submit" className="mt-4 block w-full max-w-md px-4 py-3 bg-green rounded-md text-sm hover:font-semibold transition all-ease duration-300">Sign up</button>
              <p className='text-gray-500 pt-6'>Already have an account? <span className='text-black hover:text-green transition all-ease duration-300'> <Link href="/login">Login</Link></span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup;
