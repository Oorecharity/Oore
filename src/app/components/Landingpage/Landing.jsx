import React from 'react'
import "./landing.css"

const Landing = () => {
  return (
    <main className='land'>
        <div className='h-screen w-11/12 m-auto flex flex-col justify-center items-center'>
          <h1 className='lg:text-5xl text-3xl text-center pb-8 text-white font-montserrat text-58 font-bold leading-72 tracking-normal'>Join Our Mission to <span className='text-green'>Save Lives</span></h1>
        <p className='lg:w-3/6 text-center text-tint font-montserrat text-22 font-normal leading-38 tracking-normal'>Your monthly 500naira  donation goes directly to fund life-changing charitable projects. We carefully  select and oversee initiatives in education, healthcare, clean water, disaster relief, empowerment and more, ensuring your contribution has a meaningful impact.</p>
        </div>
    </main>
  )
}

export default Landing