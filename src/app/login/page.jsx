"use client"

import Image from "next/image"
import Link from "next/link"
import logo from "../assets/Group 2.png"
import "./login.css"

const Login = () => {
  return (
    <div className="py-24">
      <div className="w-[85%] mx-auto bg-white p-16 rounded-md grid lg:grid-cols-2 grid-cols-1 gap-6">
        <div>
          <div className="mb-10">
            <Link href="/">
              <Image
                src={logo}
                placeholder="blur"
                alt="logo"
              />
            </Link>

          </div>
          <div className="mt-8">
            <h1 className="text-3xl font-bold text-left mb-8">Login your account</h1>
            <form className="w-full max-w-md">
              <h1 className="text-center text-3xl font-bold"></h1>

              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email address"
                className="mt-6 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green"
              />

              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="mt-8 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green"
              />

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

export default Login

