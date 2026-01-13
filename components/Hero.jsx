"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-14">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="md:w-1/2 space-y-6"
        >
          {/* H1 – PRIMARY SEO HEADING */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Web Development Company in Kenya Building{" "}
            <span className="text-blue-600">Fast & SEO-Optimized Websites</span>
          </h1>

          {/* Supporting SEO paragraph */}
          <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
            NovaStack Digital is a professional web development company in Kenya
            delivering high-performance websites and scalable web applications
            using Next.js, React, and modern backend technologies. We help
            businesses grow online with reliable, conversion-focused solutions.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-5 pt-4">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="/contact"
              className="inline-flex items-center justify-center bg-blue-600 px-7 py-3 rounded-lg text-white font-semibold shadow-md hover:bg-blue-700 transition"
            >
              Get a Free Quote
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="/projects"
              className="inline-flex items-center justify-center border border-gray-300 px-7 py-3 rounded-lg text-gray-900 font-semibold hover:bg-gray-100 transition"
            >
              View Our Work
            </motion.a>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="md:w-1/2 flex justify-center"
        >
          <Image
            src="/hero.png"
            alt="NovaStack Digital web development services in Kenya"
            width={440}
            height={440}
            priority
            className="object-contain drop-shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
