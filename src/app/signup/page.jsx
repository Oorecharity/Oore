"use client"

import React, { useState } from 'react'; 
import Image from "next/image"
import logo from "../assets/Group 2.png"
import "../login/login.css"
import {country} from "../../../data"
import Link from 'next/link';

const Signup = () => {

  // State to store the selected country
  const [selectedCountry, setSelectedCountry] = useState("");

  // Function to handle the select change event
  const handleSelectChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div className="login py-16 ">
      <div className="w-[85%] mx-auto bg-white p-8 rounded-md flex flex-col justify-center items-center">
        <div className=''>
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
              <form className="w-full max-w-md">
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  id="username"
                  className="mt-3 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green"
                />

                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  name="password"
                  className="mt-8 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green"
                />

                <input
                  type="tel"
                  id='phone'
                  name='phone'
                  placeholder="phone number"
                  className="mt-8 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green"
                />
              </form>
              <form className="w-full max-w-md">
                <input
                  type="email"
                  id='email'
                  name='email'
                  placeholder="Email Address"
                  className="mt-3 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green"
                />

                <input
                  type="password"
                  id='password'
                  name='password'
                  placeholder="Confirm Password"
                  required
                  className="mt-8 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green"
                />

                <select id="country" name="country" onChange={handleSelectChange} value={selectedCountry} className="mt-8 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green">
                  <option value="" required>Select country</option>
                  {
                    country.map(({id, place}) =>{
                      return(
                        <option key={id} value={ place }>
                          {place}
                        </option>
                      )
                    })
                  }
                </select>
              </form>
            </div>
            <div className='grid place-items-center mt-8'>
              <button type="submit" className="mt-4 block w-full max-w-md px-4 py-3 bg-green rounded-md text-sm hover:font-semibold transition all-ease duration-300">sign up</button>
              <p className='text-gray-500 pt-6'>Already have an account? <span className='text-black hover:text-green transition all-ease duration-300'> <Link href="/login ">Login</Link></span></p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Signup
