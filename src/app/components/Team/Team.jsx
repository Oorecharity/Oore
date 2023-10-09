import React from 'react'
import Teamswiper from './Teamswiper'

export const Team = () => {
  return (
    <main>
      <div className='text-2xl font-bold w-10/12 mx-auto mt-16 mb-10'>
        <h1>Meet The Team</h1>
      </div>
        <div className='bg-green-200'>
            <Teamswiper/>
        </div>
    </main>
  )
}
