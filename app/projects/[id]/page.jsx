"use client";

import React, { use } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Lookup object to connect the URL ID to the specific project data
const projectDatabase = {
  "safari-stay": {
    title: "SafariStay Booking Engine",
    image: "https://dribbble.com",
    client: "Safari Destinations Ltd",
  },
  "ushuru-pay": {
    title: "Ushuru-Pay Fintech",
    image: "https://dribbble.com",
    client: "Fintech Solutions KE",
  },
  "ecohome-seo": {
    title: "EcoHome Optimization",
    image: "https://dribbble.com",
    client: "EcoHome Properties",
  },
  "brand-revamp": {
    title: "Modern Brand Identity",
    image: "https://firmbee.com",
    client: "Logistics Hub",
  },
};

export default function ProjectDetail({ params: paramsPromise }) {
  // Fix 1: Await/Unwrap the params promise using React.use()
  const params = use(paramsPromise);
  const id = params.id;

  // Fix 2: Lookup the data using the ID string
  const project = projectDatabase[id] || {
    title: "Project Showcase",
    image: "https://firmbee.com",
    client: "JMMLabs Client",
  };

  return (
    <article className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-blue-700 font-bold tracking-widest uppercase text-sm"
          >
            Case Study: {id.replace("-", " ")}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-gray-900 mt-4 mb-8"
          >
            {project.title}
          </motion.h1>

          <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl bg-gray-200">
            {/* Fix 3: Passed project.image instead of params.id.image */}
            <Image
              src={project.image}
              alt={`${project.title} - JMMLabs Portfolio`}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-20 px-6 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              The Challenge
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              For {project.client}, JMMLabs solved critical performance
              bottlenecks using Next.js and optimized backend queries.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              The Result
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              A 40% increase in mobile conversions and top-tier SEO rankings in
              Kenya.
            </p>
          </section>
        </div>

        <div className="bg-gray-50 p-8 rounded-2xl h-fit border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-widest">
            Project Details
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-gray-400 text-sm">Client</p>
              <p className="text-gray-900 font-semibold">{project.client}</p>
            </div>
          </div>
          <button className="w-full mt-8 bg-blue-700 text-white py-3 rounded-xl font-bold hover:bg-red-600 transition-all">
            Live Preview
          </button>
        </div>
      </div>
    </article>
  );
}
