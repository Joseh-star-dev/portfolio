import React from 'react'
import { FaGithub, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-6 border-t border-gray-700">
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
    <p className="text-gray-400 text-sm">
      © {new Date().getFullYear()} Joseph Jack. All Rights Reserved.
    </p>

    <div className="flex space-x-6">
      <a href="/" className="text-gray-400 hover:text-cyan-400 text-sm">Home</a>
      <a href="/projects" className="text-gray-400 hover:text-cyan-400 text-sm">Projects</a>
      <a href="/contact" className="text-gray-400 hover:text-cyan-400 text-sm">Contact</a>
    </div>

    <div className="flex space-x-4 text-gray-400">
      <a href="https://github.com/Joseh-star-dev" target="_blank" className="hover:text-cyan-400">
       <FaGithub/>
      </a>

      <a href="https://wa.me/254113822842?text=Hi%20Joseph!%20I%20checked%20your%20portfolio%20and%20I%27m%20interested%20in%20working%20with%20you." target="_blank" className="hover:text-cyan-400">
        <FaWhatsapp className='text-xl text-green-700'/>
      </a>
    </div>
  </div>
</footer>
  )
}

