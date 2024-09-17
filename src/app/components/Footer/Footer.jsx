"use client"

import { useState } from "react";
import { labels } from '../../../../data'
import { socials } from '../../../../data'
// import { BsWhatsapp } from "react-icons/bs";

import Link from 'next/link'

export const Footer = () => {
  return (
    <main className="bg-green p-4 md:p-12 mt-8">
      <div className="bg-black text-white w-12/12 m-auto p-12 rounded-md">
        <div className="lg:flex items-center justify-between">
          <div>
              <h2 className='text-xl lg:text-3xl'>Connect and Contact Us via Our Socials</h2>
          </div>
          <div className="socials flex space-x-6 items-center lg:mt-0 mt-4">
            {
              socials.map((social) =>{
                return(
                  <div key={social.id} className='bg-gray-900 p-2 rounded-full hover:bg-green'>
                    <Link href={social.connect} className='text-xl '>
                      {social.icon}
                    </Link>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="border-t w-full mt-12 md:flex md:justify-between md:items-center">
          <div className="lg:flex items-center lg:space-x-6">
            {
              labels.map(({ id, linkName, link }) => {
                return (
                  <div key={id} className='lg:mt-12 mt-6'>
                    <Link href="" target='_blank' className='hover:text-green'>
                      {linkName}
                    </Link>
                  </div>
                )
              })
            }
          </div>
          <div className='mt-10'>
            <Link href="dashboard.ooreafrica.org/signup" className="border-2 border-white px-6 py-2 bg-white rounded-md hover:border-green hover:bg-green text-black hover:text-white">Create an account</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
