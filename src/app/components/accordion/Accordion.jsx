"use client"
import React from 'react';
import { accordion } from '../../../../data';


const AccordionItem = ({ title, children }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="mt-2 w-10/12 mx-auto">
            <button
                className="flex items-center justify-between w-full p-4 text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className=" font-semibold">{title}</span>
                <span className="px-6 font-semibold text-green">
                    {isOpen ? '-' : '+'}
                </span>
            </button>
            {isOpen && <div className="p-6 bg-gray-200 text-sm rounded-md">{children}</div>}
        </div>
    );
};

const Accordion = () => {
    return (
        <div className="flex flex-col mb-12 mt-4">
            {
                accordion.map(({id, title, details}) =>{
                    return(
                        <div key={id}>
                            <AccordionItem title={title}>
                                <div className='text-green'>
                                    {details}
                                </div>
                            </AccordionItem>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Accordion;
