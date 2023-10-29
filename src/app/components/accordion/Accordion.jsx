"use client"
import React from 'react';
import { accordion } from '../../../../data';
import {HiOutlineChevronDown, HiOutlineChevronUp} from 'react-icons/hi'


const AccordionItem = ({ title, children }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="mt-2 w-10/12 mx-auto bg-[#F5F5F5] rounded-md">
            <button
                className="flex items-center justify-between w-full p-4 text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className=" font-semibold">{title}</span>
                <span className="px-6 font-[900] text-lg text-green">
                    {isOpen ? <HiOutlineChevronDown /> : <HiOutlineChevronUp/>}
                </span>
            </button>
            {isOpen && <div className="p-6 pt-1 bg-[#F5F5F5] text-sm rounded-md font-Montserrat text-24 font-normal leading-28 tracking-normal text-left">{children}</div>}
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
                                <div className='text-hues'>
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
