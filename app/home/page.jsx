"use client"

import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import About from '@/components/About'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-100 flex flex-col items-center justify-center px-6 py-10">
      
      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl w-full gap-10"
      >
        {/* TEXT CONTENT */}
        <div className="text-center md:text-left flex-1">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug mb-4">
            Hi, I'm <span className="text-cyan-400">Joseph Jack</span> 👋
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            A passionate <span className="text-cyan-400">Full-Stack Developer</span> skilled in building 
            modern, responsive apps using <strong>React</strong>, <strong>Next.js</strong>, <strong>Node.js</strong>, 
            and <strong>Tailwind CSS</strong>.
          </p>

          {/* CALL TO ACTION BUTTONS */}
          <div className="mt-8 flex justify-center md:justify-start space-x-4">
            <Link href="/contact" className="bg-cyan-500 text-black font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-cyan-400 transition">
              Hire Me
            </Link>
            <Link href="/projects" className="bg-gray-800 text-gray-200 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-700 transition">
              View My Projects
            </Link>
          </div>
        </div>

        {/* PROFILE IMAGE */}
        <div className="flex justify-center md:justify-end">
          <img 
            src="/ptp.jpeg" 
            alt="Profile"
            className="w-52 h-52 md:w-72 md:h-72 object-cover rounded-full border-4 border-cyan-500 shadow-xl hover:scale-105 transition-transform"
          />
        </div>
      </motion.section>

      {/* ABOUT SECTION */}
      <div className="w-full mt-16">
        <About />
      </div>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/254113822842"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 flex items-center space-x-2 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110 animate-bounce"
      >
        <FaWhatsapp className="text-2xl" />
        <span className="hidden sm:inline font-semibold">Chat on WhatsApp</span>
      </a>
    </div>
  )
}

