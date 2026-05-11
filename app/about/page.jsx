"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaShieldAlt,
  FaChartLine,
  FaCode,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";

// Animation Variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageEffect = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

export default function AboutPage() {
  return (
    <main className="w-full bg-white text-slate-900 overflow-x-hidden">
      {/* 1. HERO SECTION - SEO Optimized Headline */}
      <section className="relative bg-gray-50 py-20 md:py-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-red-400 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-600 font-black uppercase tracking-[0.3em] text-xs mb-4 block"
          >
            Digital Innovation Partner
          </motion.span>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl font-black text-slate-900 leading-tight"
          >
            Elevating Brands through <br />
            <span className="text-blue-700">JMM Labs</span> Excellence.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto mt-8 text-lg md:text-xl text-slate-600 leading-relaxed"
          >
            We are a premier Kenyan technology collective. We specialize in
            engineering high-performance Next.js applications and scalable
            digital ecosystems that turn ambitious ideas into market-leading
            realities.
          </motion.p>
        </div>
      </section>

      {/* 2. WHO WE ARE - Focus on Kenyan Context & Global Standards */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
            The Hub of <span className="text-red-600">Modern Engineering</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Based in the heart of Kenya’s tech scene, **JMM Labs** bridges the
            gap between complex backend architecture and stunning user
            interfaces. We don’t just build websites; we engineer growth
            engines.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed">
            Our philosophy is built on four pillars: **Security, Speed,
            Scalability, and SEO.** Every line of code we write is optimized to
            ensure your business ranks higher and performs faster than the
            competition.
          </p>
        </motion.div>

        <motion.div
          variants={imageEffect}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-red-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
          <Image
            src="/image6.png"
            alt="JMM Labs Development Team working on Next.js projects"
            width={600}
            height={400}
            className="relative rounded-2xl shadow-2xl object-cover"
          />
        </motion.div>
      </section>

      {/* 3. FOUNDER SECTION - Personal Branding */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h2 className="text-red-500 font-bold uppercase tracking-widest text-sm mb-4">
              The Visionary
            </h2>
            <h3 className="text-4xl font-black mb-6">Joseph Mutungi Mwiithi</h3>
            <p className="text-slate-400 text-lg mb-6">
              With over half a decade of experience in the full-stack landscape,
              Joseph founded JMM Labs to bring world-class software standards to
              local and international businesses.
            </p>
            <div className="flex gap-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <span className="block text-2xl font-bold">100%</span>
                <span className="text-sm text-slate-500 uppercase">
                  Commitment
                </span>
              </div>
              <div className="border-l-4 border-red-600 pl-4">
                <span className="block text-2xl font-bold">Clean</span>
                <span className="text-sm text-slate-500 uppercase">
                  Architecture
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center order-1 md:order-2"
          >
            <div className="relative p-2 border-2 border-dashed border-slate-700 rounded-full">
              <Image
                src="/founder.jpg"
                alt="Joseph Mutungi Mwiithi - Founder of JMM Labs"
                width={300}
                height={300}
                className="h-64 w-64 md:h-80 md:w-80 rounded-full shadow-2xl object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. CORE VALUES - Icon Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900">
              Why JMM Labs?
            </h2>
            <p className="text-slate-500 mt-4">
              We deliver value through precision engineering.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <FaRocket />,
                title: "SEO Mastery",
                desc: "We build with indexability in mind, ensuring your site lands on page one.",
                color: "text-blue-600",
              },
              {
                icon: <FaShieldAlt />,
                title: "Bulletproof Security",
                desc: "Deploying enterprise-grade protection for every application we host.",
                color: "text-red-600",
              },
              {
                icon: <FaChartLine />,
                title: "High Conversion",
                desc: "Our UI/UX designs are scientifically crafted to turn visitors into customers.",
                color: "text-blue-600",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div
                  className={`${item.color} text-4xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {item.icon}
                </div>
                <h4 className="text-xl font-black mb-4">{item.title}</h4>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. PROCESS - Steps */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 text-center mb-20">
          The JMM Labs Lifecycle
        </h2>
        <div className="grid md:grid-cols-4 gap-12">
          {[
            { step: "01", label: "Consultation", icon: <FaUsers /> },
            { step: "02", label: "Strategy", icon: <FaLightbulb /> },
            { step: "03", label: "Development", icon: <FaCode /> },
            { step: "04", label: "Deployment", icon: <FaRocket /> },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="mx-auto mb-6 w-20 h-20 flex items-center justify-center rounded-2xl bg-blue-50 text-blue-700 font-black text-2xl group-hover:bg-red-600 group-hover:text-white transition-all duration-500 shadow-inner">
                {item.icon}
              </div>
              <span className="block text-xs font-black text-red-600 mb-2 uppercase tracking-tighter">
                {item.step}
              </span>
              <p className="font-bold text-slate-800 text-lg">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. CTA - Final Engagement */}
      <section className="px-6 pb-24">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto bg-blue-700 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/20 rounded-full -mr-20 -mt-20 blur-3xl" />

          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            {" "}
            Ready to start your <br /> next big project?{" "}
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="/contact"
              className="bg-red-600 hover:bg-white hover:text-blue-700 px-10 py-5 rounded-2xl font-black uppercase text-sm tracking-widest transition-all duration-300 shadow-xl shadow-red-900/20"
            >
              Get Started Now
            </a>
            <a
              href="/projects"
              className="border-2 border-white/30 hover:bg-white/10 px-10 py-5 rounded-2xl font-black uppercase text-sm tracking-widest transition-all duration-300"
            >
              Our Portfolio
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
