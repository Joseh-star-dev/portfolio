"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaWhatsapp, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 pb-16">
          {/* Brand Identity & Logo */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="relative w-[150px] h-[45px]">
                <Image
                  src="/jmmlabslogo.png"
                  alt="JMM Labs Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              JMM Labs is a premier digital engineering collective in Nairobi.
              We craft high-performance web ecosystems designed for speed,
              security, and market-leading SEO.
            </p>
            <div className="flex gap-4 mt-6">
              <SocialIcon
                icon={<FaGithub />}
                href="https://github.com/Joseh-star-dev"
              />
              <SocialIcon
                icon={<FaWhatsapp />}
                href="https://wa.me/254113822842"
              />
              <SocialIcon icon={<FaLinkedin />} href="#" />
              <SocialIcon icon={<FaTwitter />} href="#" />
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="text-slate-900 font-black uppercase tracking-widest text-xs mb-6 border-l-2 border-red-600 pl-3">
              Solutions
            </h4>
            <ul className="space-y-4 text-sm font-semibold text-slate-500">
              <li>
                <FooterLink href="/services">Custom Web Apps</FooterLink>
              </li>
              <li>
                <FooterLink href="/services">E-commerce Engines</FooterLink>
              </li>
              <li>
                <FooterLink href="/services">UI/UX Strategy</FooterLink>
              </li>
              <li>
                <FooterLink href="/services">SEO Domination</FooterLink>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-slate-900 font-black uppercase tracking-widest text-xs mb-6 border-l-2 border-blue-700 pl-3">
              Company
            </h4>
            <ul className="space-y-4 text-sm font-semibold text-slate-500">
              <li>
                <FooterLink href="/about">Our Story</FooterLink>
              </li>
              <li>
                <FooterLink href="/projects">Portfolio</FooterLink>
              </li>
              <li>
                <FooterLink href="/contact">Get in Touch</FooterLink>
              </li>
              <li>
                <FooterLink href="/privacy">Privacy Policy</FooterLink>
              </li>
            </ul>
          </div>

          {/* Connect & Newsletter */}
          <div>
            <h4 className="text-slate-900 font-black uppercase tracking-widest text-xs mb-6 border-l-2 border-red-600 pl-3">
              Stay Updated
            </h4>
            <p className="text-slate-500 text-xs mb-4">
              Get the latest tech insights from JMM Labs.
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="email@jmmlabs.co.ke"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bg-blue-700 text-white p-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                <FaGithub className="rotate-45" size={14} />
              </button>
            </form>
            <div className="mt-6">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter block mb-1">
                Office Hours
              </span>
              <span className="text-xs font-bold text-slate-700">
                Mon - Fri: 09:00 - 18:00 EAT
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-slate-400 text-[11px] font-bold tracking-tight">
              © {currentYear} JMM LABS DIGITAL. ALL RIGHTS RESERVED.
            </p>
            <p className="text-slate-300 text-[10px] uppercase font-black tracking-widest">
              Nairobi, Kenya • Globally Scaled
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">
                Status: All Systems Go
              </span>
            </div>
            <div className="h-4 w-px bg-slate-200"></div>
            <p className="text-slate-400 text-[11px] font-semibold">
              Built with <span className="text-red-600">❤</span> & Next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Sub-components for cleaner code
function FooterLink({ href, children }) {
  return (
    <Link
      href={href}
      className="hover:text-blue-700 hover:translate-x-1 transition-all duration-200 inline-block"
    >
      {children}
    </Link>
  );
}

function SocialIcon({ icon, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center bg-slate-50 text-slate-600 rounded-xl hover:bg-blue-700 hover:text-white transition-all duration-300 shadow-sm"
    >
      {icon}
    </a>
  );
}
