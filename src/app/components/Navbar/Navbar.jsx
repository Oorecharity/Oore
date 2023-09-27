"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// logo
import logo from "./logo.png"

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);
    const handleClick = () => setNavbar(!navbar);

    return (  
      <div className="fixed top-0 z-10 h-[12vh] w-[100%] opacity-90">
        <div className='w-full py-5 flex flex-col items-between space-y-9 bg-black px-8 mx-auto text-slate-200'>
          <nav className='flex items-center justify-between'>
            <Link href="/">
              <Image
                src={logo}
                placeholder="blur"
                alt="logo"
              />
            </Link>
            
            <div className='hidden md:flex items-center space-x-8'>
              <Link href="" className="hover:text-green">
                About Us
              </Link>
              <Link href="" className="hover:text-green">
                Contact
              </Link>
              <Link href="" className="hover:text-green">
                FAQs
              </Link>
              <Link href="" className="hover:text-green">
                Blog
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link href="" className="border-2 border-white px-6 py-2 bg-white rounded-md hover:border-green hover:bg-green text-black">Sign up</Link>
              <Link href="" className="border-2 border-white hover:border-green px-6 py-2 rounded-md hover:text-black hover:bg-green ">Sign in</Link>
            </div>
            
            <button
              onClick={() => {
                document.querySelector('.mobile-menu').classList.toggle('hidden');
              }}
              className='md:hidden flex items-center'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4 6h16M4 12h16m-7 6h7'
                />
              </svg>
            </button>
          </nav>
          <div className='mobile-menu hidden md:hidden flex flex-col items-end space-y-2  pt-3 pb-3 text-sm'>
            <Link href="/about" className="hover:text-green">
                About Us
            </Link>
            <Link href="" className="hover:text-green">
                Contact
            </Link>
            <Link href="" className="hover:text-green">
                FAQs
            </Link>
            <Link href="" className="hover:text-green">
                Blog
            </Link>
            <Link href="" className="border-2 border-white px-6 py-2 text-black bg-white rounded-md hover:border-green hover:bg-green hover:text-white">Sign up</Link>
            <Link href="" className="border-2 border-white hover:border-green px-6 py-2 rounded-md hover:text-bl hover:bg-green ">Sign in</Link>
          </div>
        </div>
      </div>   
    );
}
