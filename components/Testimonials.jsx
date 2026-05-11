"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Alex Otieno",
    role: "CEO at TechSavvy Kenya",
    content:
      "JMMLabs transformed our legacy system into a high-speed Next.js platform. Our load times dropped by 60%, and our conversion rates skyrocketed.",
    image: "/avatars/user1.jpg", // Replace with real paths
    color: "border-blue-600",
  },
  {
    id: 2,
    name: "Sarah Wanjiku",
    role: "Marketing Director",
    content:
      "The best software agency in Nairobi. They don't just build apps; they build business solutions. Their SEO strategy put us on page 1 within months.",
    image: "/avatars/user2.jpg",
    color: "border-red-600",
  },
  {
    id: 3,
    name: "David Mensah",
    role: "Founder, Fintech Solutions",
    content:
      "Professional, timely, and technically brilliant. JMMLabs handled our backend security and API integrations with incredible precision.",
    image: "/avatars/user3.jpg",
    color: "border-blue-600",
  },
  {
    id: 4,
    name: "Linda Kemunto",
    role: "E-commerce Owner",
    content:
      "My online store is now faster and more mobile-friendly than ever. The team at JMMLabs is truly world-class.",
    image: "/avatars/user4.jpg",
    color: "border-red-600",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-bold tracking-widest uppercase border border-blue-100"
          >
            Success Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-black text-gray-900 mt-6"
          >
            Trusted by Innovators <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-red-600">
              Across East Africa
            </span>
          </motion.h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className={`relative bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border-t-4 ${t.color}`}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-8 text-gray-100">
                <FaQuoteLeft size={40} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className="text-yellow-400 text-sm" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 text-lg leading-relaxed mb-8 relative z-10">
                "{t.content}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                  {/* If you don't have images yet, this div acts as a placeholder */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-white font-bold">
                    {t.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 leading-tight">
                    {t.name}
                  </h4>
                  <p className="text-sm text-blue-600 font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Call to Action Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative bg-gradient-to-br from-blue-700 to-blue-900 p-8 rounded-3xl shadow-2xl flex flex-col justify-center items-center text-center text-white lg:col-span-1"
          >
            <div className="mb-6 bg-white/10 p-4 rounded-full">
              <FaStar className="text-white text-2xl animate-pulse" />
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Be Our Next Success Story
            </h3>
            <p className="text-blue-100 mb-8 text-sm">
              Join 50+ businesses growing with JMMLabs tech.
            </p>
            <button className="w-full py-4 bg-red-600 hover:bg-white hover:text-blue-900 transition-all font-bold rounded-2xl shadow-lg">
              GET STARTED NOW
            </button>
          </motion.div>
        </div>

        {/* Brand Logos (Social Proof) */}
        <div className="mt-20 pt-10 border-t border-gray-100 text-center">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-8">
            Powering Teams At
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-40 grayscale">
            {/* Placeholder Logos - Use your real client logos here */}
            <div className="text-2xl font-black">LOGOTYPE</div>
            <div className="text-2xl font-black">ENTERPRISE</div>
            <div className="text-2xl font-black">STARTUP</div>
            <div className="text-2xl font-black">TECHCORP</div>
          </div>
        </div>
      </div>
    </section>
  );
}
