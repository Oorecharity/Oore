import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import frame from "./Frame 115.png"

const About = () => {
  return (
    <main id='about' className='lg:mt-[180px]'>
      <div className='lg:grid grid-cols-2 gap-6 mt-8 mb-12'>
        <div className='lg:p-24 p-8 lg:mb-0 mb-4'>
          <h2 className="font-semibold text-2xl lg:pb-10 pb-6 text-center lg:text-left">Know about us</h2>
          <p className='text-center lg:text-left text-hues'>Oore aims to develop versatile donation platform that allows donors to contribute to the cause of our charity with flexibility and convenience. The primary focus is on enabling donors to spread their donations across a period of time, offering them greater financial ease while making a lasting impact on our charity mission. This technology specification outlines the key features, functionalities and requirements of the platform.</p>
          <div className="lg:mt-10 mt-6 lg:text-left text-center">
            <Link href="/about" className='bg-black py-2 px-6 text-white hover:bg-green rounded'>
              Read more
            </Link>
          </div>
        </div>
        <div className="object-cover">
          <Image
            src={frame}
            placeholder='blur'
            alt='people'
          />
        </div>
      </div>
      <div className='pb-16 border-b-2 border-gray-300 w-10/12 mx-auto'></div>
    </main>
  )
}

export default About