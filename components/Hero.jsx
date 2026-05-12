"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import from next/link
import { motion } from "framer-motion";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      className="relative w-full bg-white overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32 z-10"
      /* pt-32 ensures content starts below the 80px (h-20) navbar */
    >
      {/* Modern Tech Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" />

        {/* Adjusted blobs to be slightly lower so they don't interfere with Navbar legibility */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-100/30 rounded-full blur-[100px] -z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content Column */}
          <motion.div
            className="lg:w-1/2 text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
              </span>
              <span className="text-sm font-bold tracking-wide text-red-700 uppercase">
                Software Development Agency Kenya
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-[1.1]"
            >
              Building The Future Of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-red-600">
                Digital Business.
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"
            >
              JMMLabs specializes in{" "}
              <span className="text-gray-900 font-semibold underline decoration-blue-500 decoration-2">
                custom software development
              </span>
              , scalable web applications, and SEO strategies that dominate the
              Kenyan market.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-5"
            >
              <Link
                href="/contact"
                className="group px-8 py-4 bg-blue-700 text-white font-bold rounded-2xl shadow-xl shadow-blue-200 hover:bg-blue-800 transition-all flex items-center gap-3 active:scale-95"
              >
                Launch Your Project
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/projects"
                className="px-8 py-4 border-2 border-gray-200 text-gray-700 font-bold rounded-2xl hover:bg-gray-50 hover:border-gray-300 transition-all active:scale-95"
              >
                View Case Studies
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-12 flex flex-wrap items-center gap-8 border-t border-gray-100 pt-8"
            >
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-600" />
                <span className="text-sm font-bold text-gray-500">
                  Fast Deployment
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-red-600" />
                <span className="text-sm font-bold text-gray-500">
                  SEO Optimized
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-600" />
                <span className="text-sm font-bold text-gray-500">
                  24/7 Support
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image Column */}
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "circOut" }}
          >
            <div className="relative z-10 w-full aspect-square md:aspect-video lg:aspect-square">
              {/* Main Hero Image */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full h-full relative"
              >
                <Image
                  src="/jmmlabsHero.png"
                  alt="Modern Software Development Lab"
                  fill
                  className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)]"
                  priority
                />
              </motion.div>

              {/* Decorative Floating Card */}
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 -left-4 md:bottom-10 md:left-0 bg-white p-6 rounded-2xl shadow-2xl z-20 border border-gray-100 hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold">
                    99%
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase">
                      Client Satisfaction
                    </p>
                    <p className="text-sm font-black text-gray-900">
                      Digital Growth Guaranteed
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Background Shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-blue-50 to-red-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
