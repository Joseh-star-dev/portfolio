"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Web Apps", "SEO", "Design"];

const projectData = [
  {
    id: "safari-stay",
    title: "SafariStay Booking Engine",
    category: "Web Apps",
    desc: "A high-performance safari & lodge booking platform built for East African hospitality, featuring real-time availability, M-Pesa integration, and multi-currency support.",
    tech: ["Next.js", "Tailwind CSS", "M-Pesa API", "Prisma"],
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    stat: "3× faster checkout",
    year: "2024",
  },
  {
    id: "ushuru-pay",
    title: "Ushuru-Pay Fintech Dashboard",
    category: "Web Apps",
    desc: "Secure KRA tax payment gateway with advanced real-time data visualization, automated compliance reports, and role-based access for enterprise finance teams.",
    tech: ["TypeScript", "PostgreSQL", "Recharts", "Node.js"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    stat: "KES 2B+ processed",
    year: "2024",
  },
  {
    id: "ecohome-seo",
    title: "EcoHome SEO Overhaul",
    category: "SEO",
    desc: "Full technical SEO transformation for a leading green construction brand — including Core Web Vitals optimization, structured data, and content architecture redesign.",
    tech: ["Google Search Console", "Next.js", "Schema.org", "Ahrefs"],
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    stat: "+150% organic traffic",
    year: "2023",
  },
  {
    id: "brand-revamp",
    title: "Savanna Freight Brand Identity",
    category: "Design",
    desc: "Complete visual identity system for a pan-African logistics firm — including logo suite, brand guidelines, vehicle livery, and a Figma component library for digital use.",
    tech: ["Figma", "Illustrator", "Brand Strategy", "Motion Design"],
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    stat: "Full brand system",
    year: "2023",
  },
  {
    id: "harvest-agri",
    title: "HarvestIQ Agri Platform",
    category: "Web Apps",
    desc: "A data-driven agronomy dashboard connecting Kenyan smallholder farmers with market prices, weather forecasts, and mobile extension services via USSD and web.",
    tech: ["React", "Django", "Africa's Talking API", "PostGIS"],
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
    stat: "12K+ active farmers",
    year: "2024",
  },
  {
    id: "nairobi-eats",
    title: "NairobiEats SEO Campaign",
    category: "SEO",
    desc: "Local SEO and content strategy for a Nairobi restaurant delivery aggregator, resulting in first-page rankings for 80+ high-intent food delivery keywords.",
    tech: ["Local SEO", "Content Strategy", "GA4", "PageSpeed"],
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    stat: "#1 rank, 80+ keywords",
    year: "2023",
  },
];

const techColors = {
  "Next.js": "#0070f3",
  "Tailwind CSS": "#38bdf8",
  "M-Pesa API": "#00a651",
  Prisma: "#5a67d8",
  TypeScript: "#3178c6",
  PostgreSQL: "#336791",
  Recharts: "#8884d8",
  "Node.js": "#3d9970",
  React: "#61dafb",
  Django: "#092e20",
  Figma: "#f24e1e",
  Illustrator: "#ff9a00",
  default: "#64748b",
};

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [hoveredId, setHoveredId] = useState(null);

  const filteredProjects = projectData.filter(
    (p) => activeTab === "All" || p.category === activeTab,
  );

  return (
    <section
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="bg-[#f9f7f4] min-h-screen py-24 px-6"
    >
      {/* Google Font */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:wght@700&display=swap');`}</style>

      <div className="max-w-7xl mx-auto">
        {/* ── Hero Header ── */}
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-[0.25em] uppercase text-amber-600 mb-4"
          >
            JMMLabs · Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6"
          >
            Work that
            <br />
            <span className="text-amber-600">moves</span> the needle.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-500 max-w-xl leading-relaxed"
          >
            From Nairobi to the world — we build digital products, craft brand
            identities, and grow businesses through precision engineering and
            strategy.
          </motion.p>
        </div>

        {/* ── Stats Row ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        >
          {[
            { value: "60+", label: "Projects delivered" },
            { value: "3×", label: "Avg. traffic growth" },
            { value: "KES 2B+", label: "Transactions processed" },
            { value: "98%", label: "Client satisfaction" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white border border-gray-100 rounded-2xl px-6 py-5"
            >
              <p
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl font-bold text-gray-900"
              >
                {s.value}
              </p>
              <p className="text-sm text-gray-400 mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* ── Filter Bar ── */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                activeTab === cat
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-500 border border-gray-200 hover:border-gray-400"
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto self-center text-sm text-gray-400">
            {filteredProjects.length} project
            {filteredProjects.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* ── Projects Grid ── */}
        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-gray-300 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-200/80"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <Image
                    src={project.image}
                    alt={`${project.title} – JMMLabs Portfolio`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/30 transition-all duration-300" />

                  {/* Stat badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold text-gray-800 shadow-sm">
                    {project.stat}
                  </div>

                  {/* Year badge */}
                  <div className="absolute top-4 right-4 bg-gray-900/70 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold text-white">
                    {project.year}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold tracking-widest uppercase text-amber-600">
                      {project.category}
                    </span>
                  </div>

                  <h3
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-2xl font-bold text-gray-900 mb-3 leading-snug"
                  >
                    {project.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {project.desc}
                  </p>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-gray-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 border-b-2 border-amber-500 pb-0.5 hover:border-gray-900 transition-colors"
                  >
                    View Case Study
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      →
                    </span>
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── CTA Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24 bg-gray-900 rounded-[2.5rem] px-10 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-amber-500 mb-3">
              Ready to build?
            </p>
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl md:text-4xl font-bold text-white leading-tight"
            >
              Let's create something
              <br />
              remarkable together.
            </h2>
          </div>
          <a
            href="/contact"
            className="shrink-0 inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold text-sm px-8 py-4 rounded-full transition-all duration-200 hover:gap-4"
          >
            Start a Project <span>→</span>
          </a>
        </motion.div>

        {/* ── Testimonial ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 border border-gray-200 rounded-3xl px-10 py-12 bg-white"
        >
          <div className="flex gap-4 items-start max-w-3xl mx-auto">
            <div className="shrink-0 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-lg">
              JJ
            </div>
            <div>
              <p
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-xl md:text-2xl text-gray-800 italic leading-relaxed mb-5"
              >
                "JMMLabs transformed our digital presence. Their expertise in
                Next.js and SEO helped us double our leads in under 3 months.
                They don't just build — they think."
              </p>
              <div>
                <p className="font-bold text-gray-900 text-sm">John Juma</p>
                <p className="text-gray-400 text-sm">CEO, Nairobi Tech Hub</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
