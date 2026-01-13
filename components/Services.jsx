"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesSection() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Professional Web Solutions Built for Growth
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            We design and develop fast, scalable, and SEO-optimized digital
            products that help businesses grow in Kenya and globally.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Web Development",
              desc: "High-performance websites and web apps built with modern frameworks.",
              image: "/image2.png",
            },
            {
              title: "UI / UX Design",
              desc: "Clean, intuitive interfaces focused on usability and conversion.",
              image: "/image1.png",
            },
            {
              title: "SEO Optimization",
              desc: "Technical SEO and performance tuning to rank higher on Google.",
              image: "/image4.png",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition hover:-translate-y-1"
            >
              <div className="mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="rounded-xl object-cover w-full h-48"
                />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
