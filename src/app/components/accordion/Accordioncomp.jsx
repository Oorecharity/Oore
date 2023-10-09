import React from 'react'
import Accordion from './Accordion'

const Accordioncomp = () => {
  return (
    <main id='faq'>
          <div className='text-2xl font-bold w-10/12 mx-auto mt-16'>
            <h2>Check Frequantly Asked Questions</h2>
        </div>
        <div>
            <Accordion/>
        </div>
    </main>
  )
}

export default Accordioncomp