"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import { motion } from 'framer-motion'

const links = [
    {name: "Home", path:'/'},
    {name: "Projects", path:"/projects"},
    {name: "Contact", path:"/contact"}
]
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='bg-gray-950 flex justify-between p-6 w-full flex-col items-center md:flex-row px-10'>
      <div className='text-cyan-400 text-2xl'>
        Joseph Jack
      </div>
      <div className='flex space-x-8 font-semibold mt-4'>
        {links.map((l) => (
            <Link key={l.name} href={l.path} className="text-gray-300 font-bold hover:text-gray-500">
                {l.name}
            </Link>
        ))}
      </div>
      {/* <button onClick={() => setIsOpen(!isOpen)} className='md:hidden block absolute right-8 text-white text-xl z-20'>
        {isOpen ? (<FaTimes/>) : (<FaBars/>)}
      </button>
      {/* MObile nav */}
      {/* {isOpen  && (
         <motion.div 
         initial={{opacity:0, x:30}}
         animate={{opacity:1, x:0}}
         transition={{duration:0.5,}}
         className='md:hidden flex flex-col gap-6 w-[30%] z-10  p-4  bg-gray-900'>
            {links.map((l) => (
                <Link key={l.name} href={l.path} className='text-gray-100 font-bold' onClick={() => setIsOpen(!isOpen)}>
                    {l.name}
                </Link>
            ))}
         </motion.div>
      )}  */}
    </nav>
  )
}
