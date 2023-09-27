import React from 'react'
import Image from 'next/image'
import frame from "./Frame 115.png"


const about = () => {
  return (
    <main className='mb-32'>
      <div className='w-8/12 mt-32 mx-auto'>
        <div className=''>
          <h2 className="font-semibold text-2xl pb-6 pb-6 text-center">Know about us</h2>
          <p className='text-center  text-hues'>Oore aims to develop versatile donation platform that allows donors to contribute to our charity's cause with flexibility and convenience. The primary focus is on enabling donors to spread their donations across a period of time, offering them greater financial ease while making a lasting impact on our charity mission. This technology specification outlines the key features, functionalities and requirements of the platform.</p>
        </div>
        <div className="object-cover text-center mt-6 w-11/12 mx-auto">
          <Image
            src={frame}
            placeholder='blur'
            alt='people'
            height={850}
          />
        </div>
      </div>
    </main>
  )
}

export default about