"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  ShieldCheck,
  Search,
  Zap,
  Wallet,
  BugOff,
  Database,
} from "lucide-react";

const services = [
  {
    title: "Full-Stack Web Development",
    description:
      "Building scalable, high-performance web applications using Next.js, React, and Node.js. Optimized for speed and user experience.",
    icon: <Code2 className="w-8 h-8 text-blue-600" />,
    tags: ["Next.js", "Express", "Tailwind"],
  },
  {
    title: "M-Pesa API Integration",
    description:
      "Seamlessly integrate Daraja 2.0 for automated payment processing, STK Push, and C2B/B2C transactions in your Kenyan business.",
    icon: <Wallet className="w-8 h-8 text-green-600" />,
    tags: ["Payments", "Daraja API", "Automation"],
  },
  {
    title: "SEO & Performance Optimization",
    description:
      "Dominating search results with Server-Side Rendering (SSR) and technical SEO. We ensure your site loads in under 2 seconds.",
    icon: <Search className="w-8 h-8 text-red-600" />,
    tags: ["Core Web Vitals", "SSR", "SEO"],
  },
  {
    title: "Database Architecture",
    description:
      "Designing robust, secure, and scalable data models using MongoDB and Mongoose for complex property or inventory systems.",
    icon: <Database className="w-8 h-8 text-purple-600" />,
    tags: ["MongoDB", "Mongoose", "Schemas"],
  },
  {
    title: "Cybersecurity & Hardening",
    description:
      "Protecting your digital assets with JWT authentication, data encryption, and protection against OWASP top 10 vulnerabilities.",
    icon: <ShieldCheck className="w-8 h-8 text-orange-600" />,
    tags: ["Auth", "Encryption", "Security"],
  },
  {
    title: "Bug Fixing & JS Support",
    description:
      "Rapid troubleshooting of complex JavaScript/TypeScript memory leaks, logic errors, and integration bottlenecks.",
    icon: <BugOff className="w-8 h-8 text-emerald-600" />,
    tags: ["Debugging", "Code Audit", "Testing"],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-gray-900 mb-6"
          >
            Software Engineering <br />
            <span className="text-blue-700">Built for Business</span>
          </motion.h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            From M-Pesa integrated management systems to SEO-dominant web apps,
            JMMLabs delivers technical excellence that drives revenue.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group"
            >
              <div className="mb-6 p-4 bg-slate-50 w-fit rounded-2xl group-hover:bg-blue-50 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-500 text-xs font-bold rounded-full uppercase tracking-widest"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-blue-700 rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to scale your digital presence?
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              Whether you need a custom property management system or a secure
              payment gateway, we are here to help.
            </p>
            <button className="bg-white text-blue-700 font-black px-10 py-4 rounded-2xl hover:bg-gray-100 transition-colors shadow-lg">
              Let's Talk Strategy
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
