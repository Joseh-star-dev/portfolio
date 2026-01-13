"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <main className="w-full bg-white">
      {/* HERO */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900"
          >
            About <span className="text-blue-600">NovaStack Digital</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-3xl mx-auto mt-6 text-lg text-gray-600"
          >
            We are a modern web development company focused on building fast,
            scalable, and SEO-optimized digital solutions that help businesses
            grow and compete online.
          </motion.p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            NovaStack Digital is a Kenya-based web development company
            delivering high-quality websites and web applications using modern
            technologies like Next.js, React, and scalable backend systems.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We focus on performance, clean design, security, and long-term
            scalability—ensuring our clients get solutions that grow with their
            businesses.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <Image
            src="/image6.png"
            alt="NovaStack Digital team"
            width={420}
            height={320}
            className="rounded-2xl shadow-md"
          />
        </motion.div>
      </section>

      {/* VALUES */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-gray-900 text-center mb-16"
          >
            Our Core Values
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Performance First",
                desc: "We build fast-loading websites optimized for SEO and Core Web Vitals.",
              },
              {
                title: "Clean & Scalable Code",
                desc: "Maintainable, scalable architectures that support long-term growth.",
              },
              {
                title: "Business-Driven Solutions",
                desc: "Every project is aligned with clear business and conversion goals.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-bold text-blue-600 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-900 text-center mb-16"
        >
          How We Work
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            "Discovery & Planning",
            "Design & Prototyping",
            "Development & Testing",
            "Launch & Support",
          ].map((step, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mx-auto mb-4 w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-lg">
                {index + 1}
              </div>
              <p className="font-semibold text-gray-800">{step}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-6 text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Let’s Build Something Great Together
          </h2>
          <p className="text-blue-100 mb-8">
            Ready to take your business online or upgrade your digital presence?
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </motion.div>
      </section>
    </main>
  );
}
