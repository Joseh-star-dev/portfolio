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
    <nav className="fixed top-0 w-full z-[100]">
      {/* Main Navbar Header (Always visible) */}
      <div
        className={`relative z-[120] w-full transition-colors duration-300 ${isOpen ? "bg-white" : "bg-white/90 backdrop-blur-md border-b border-gray-100"}`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="relative hover:opacity-90 transition-opacity"
            onClick={() => setIsOpen(false)}
          >
            <div className="relative w-[130px] h-[50px] md:w-[160px] md:h-[55px]">
              <Image
                src="/jmmlabslogo.png"
                alt="JMM Labs Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-1 bg-gray-50/80 p-1.5 rounded-full border border-gray-100">
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

          {/* Action Button (Desktop Only) */}
          <div className="hidden md:block">
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-600 px-6 py-2.5 rounded-full text-white font-bold text-sm transition-all hover:bg-green-700 active:scale-95 shadow-lg shadow-green-100"
            >
              GET STARTED
            </button>
          </div>

          {/* Mobile Toggle Button (Highest Z-index) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-800 hover:text-blue-600 transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </div>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 bg-white z-[110] md:hidden flex flex-col"
          >
            {/* Safe Area Padding for content inside menu (Starts below the 80px top bar) */}
            <div className="flex flex-col h-full pt-28 px-8 pb-12">
              <div className="flex flex-col space-y-8">
                {links.map((l, i) => (
                  <motion.div
                    key={l.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                  >
                    <Link
                      href={l.path}
                      onClick={() => setIsOpen(false)}
                      className={`block text-4xl font-bold tracking-tight ${
                        pathName === l.path ? "text-blue-600" : "text-gray-900"
                      }`}
                    >
                      {l.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Section of Mobile Menu */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-auto"
              >
                <div className="h-[1px] bg-gray-100 w-full mb-8" />
                <button
                  onClick={() => {
                    handleWhatsAppClick();
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-3 py-5 bg-green-600 text-white rounded-2xl font-bold text-xl shadow-xl shadow-green-100"
                >
                  <FaWhatsapp size={24} />
                  WhatsApp Us
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
