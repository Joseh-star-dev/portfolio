import React from 'react'

export default function About() {
  return (
    <section className="max-w-4xl mx-auto bg-gray-900/60 backdrop-blur-md border border-gray-700 rounded-2xl p-8 shadow-xl text-center md:text-left">
      <h3 className="text-3xl font-bold text-cyan-400 mb-4">About Me 🙇</h3>

      <p className="text-gray-300 leading-relaxed mb-4">
        Hey there! I’m <span className="text-cyan-400 font-semibold">Joseph Jack</span>, 
        a creative and results-driven developer from Kenya. I love crafting sleek, 
        user-friendly web apps with clean UI and modern design principles.
      </p>

      <p className="text-gray-300 leading-relaxed mb-4">
        My main stack includes <strong>React</strong>, <strong>Next.js</strong>, 
        <strong>Node.js</strong>, and <strong>Tailwind CSS</strong>. 
        I enjoy transforming ideas into engaging digital experiences and constantly 
        explore new technologies to level up my skills.
      </p>

      <p className="text-gray-300 leading-relaxed mb-6">
        When I’m not coding, you’ll find me exploring tech trends, mentoring beginners, 
        or working on personal projects that challenge my creativity.
      </p>

      <a
        href="/contact"
        className="inline-block bg-cyan-500 text-black font-bold px-6 py-3 rounded-lg shadow hover:bg-cyan-400 transition"
      >
        Let’s Collaborate 💬
      </a>
    </section>
  )
}

