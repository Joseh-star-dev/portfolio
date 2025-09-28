"use client"
import React from 'react'
import { projects } from '@/utils/projects'
import { motion } from 'framer-motion'

export default function Projects() {
  return (
    <div className='p-6 min-h-screen bg-gray-900'>
      <motion.div 
      initial={{opacity:0, scale:0.8}}
      animate={{opacity:1, scale:1}}
      transition={{duration:0.3, ease:"easeIn"}}
      className='flex flex-col'>
        <h2 className='text-3xl font-extrabold text-cyan-400'>
          My Recent Projects
        </h2>
        <div className='mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projects.map((project, i) => (
            <div key={i} className='bg-gray-800 p-6 rounded-2xl shadow hover:scale-105 transition'>
              <h3 className='text-xl font-bold text-gray-950'>
                {project.title}
              </h3>
              <p className='text-gray-400 mt-2'>
                {project.desc}
              </p>
              <div className='mt-3 flex flex-wrap gap-2'>
              
                {project.tech.map((t, j) => (
                  <span key={j} className='bg-cyan-600 px-2 py-1 text-xs rounded-md'>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
