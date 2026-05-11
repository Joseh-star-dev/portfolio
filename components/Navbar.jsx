"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";

const links = [
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const handleWhatsAppClick = () => {
  const phone = "+254113822842";
  const message = "Hello, I need help from jmmlabs.co.ke!";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <nav className="fixed top-0 w-full z-[100] bg-white/80 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Section */}
        <Link
          href="/"
          className="relative z-50 hover:opacity-90 transition-opacity"
        >
          <div className="relative w-[130px] h-[45px] md:w-[160px] md:h-[55px]">
            <Image
              src="/jmmlabslogo.png"
              alt="JMM Labs Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 bg-gray-50/50 p-1.5 rounded-full border border-gray-100">
          {links.map((l) => {
            const isActive = pathName === l.path;
            return (
              <Link
                key={l.name}
                href={l.path}
                className={`relative px-5 py-2 text-sm font-semibold transition-colors duration-300 rounded-full ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white shadow-sm rounded-full"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{l.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <button
            onClick={handleWhatsAppClick}
            className="group relative flex items-center gap-2 overflow-hidden bg-red-600 px-6 py-2.5 rounded-full text-white font-bold text-sm transition-all hover:bg-blue-700 active:scale-95 shadow-lg shadow-red-200"
          >
            <FaWhatsapp className="text-lg group-hover:rotate-12 transition-transform" />
            <span>GET STARTED</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-50 p-2 text-gray-600 hover:text-blue-600 transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-40 md:hidden flex flex-col pt-24 px-8"
          >
            <div className="space-y-4">
              {links.map((l, i) => (
                <motion.div
                  key={l.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={l.path}
                    onClick={() => setIsOpen(false)}
                    className={`block text-3xl font-bold ${
                      pathName === l.path ? "text-blue-600" : "text-gray-400"
                    }`}
                  >
                    {l.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-auto mb-12"
            >
              <p className="text-gray-400 text-sm mb-4 font-medium uppercase tracking-widest">
                Connect with us
              </p>
              <button
                onClick={handleWhatsAppClick}
                className="w-full flex items-center justify-center gap-3 py-5 bg-red-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-red-100"
              >
                <FaWhatsapp size={24} />
                WhatsApp Us
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
