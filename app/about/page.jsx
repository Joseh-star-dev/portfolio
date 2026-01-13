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
    <main className="w-full bg-gray-50">
      {/* HERO */}
      <section className="bg-white">
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
            delivering high-quality websites and applications using Next.js,
            React, and scalable backend systems.
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
            className="rounded-2xl shadow-md object-cover"
          />
        </motion.div>
      </section>

      {/* FOUNDER SECTION */}
      <section className="bg-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl font-bold text-blue-600 mb-4">
              Meet the Founder
            </h2>
            <p className="text-gray-700 mb-4">
              NovaStack Digital was founded by{" "}
              <span className="font-semibold">Joseph Mutungi</span>, a
              full-stack developer passionate about building fast, reliable, and
              scalable web solutions.
            </p>
            <p className="text-gray-700">
              With expertise in React, Next.js, Node.js, and modern web
              technologies, Joseph leads the team to deliver high-quality
              solutions that help businesses succeed online.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Image
              src="/p1.jpeg"
              alt="Joseph Mutungi - Founder NovaStack Digital"
              width={350}
              height={350}
              className="rounded-full shadow-lg object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24">
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
                desc: "Fast-loading websites optimized for SEO and Core Web Vitals.",
              },
              {
                title: "Clean & Scalable Code",
                desc: "Maintainable architectures that support long-term growth.",
              },
              {
                title: "Business-Driven Solutions",
                desc: "Projects aligned with clear business and conversion goals.",
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
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
            >
              Contact Us
            </a>
            <a
              href="/projects"
              className="inline-block border border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition"
            >
              View Our Work
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
