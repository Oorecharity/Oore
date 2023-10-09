import React from 'react'
import { project } from '../../../../data'
import Image from 'next/image'

const Projects = () => {
  return (
      <main className='mt-20 mb-16 lg:w-12/12 w-4/5 mx-auto'>
        <div className='text-center mb-8'>
            <h1 className="font-bold text-3xl pb-4">Projects we Fund</h1>
            <p className='text-hues'>Your 500 naira goes into funding these projects below</p>
        </div>
        <div className='grid lg:grid-cols-3 grid-cols-2 g gap-6 '>
            {
                project.map(({id, pix, captions}) =>{
                    return(
                        <div key={id} className='p-0'>
                            <Image
                                src={pix}
                                alt='project'
                                placeholder='blur'
                            />
                            <div className='py-6 px-4 font-semibold border-2 border-l-2 rounded-b-lg text-center text-sm'>
                                <p>{captions}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        
    </main>
  )
}

export default Projects