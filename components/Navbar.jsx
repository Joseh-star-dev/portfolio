"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Contact2 } from "lucide-react";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const handleWhatsAppClick = () => {
  const phone = "+254113822842";
  const message = "Hello, I need help from novastackdigital.co.ke!";
  // Encode the message for URL safety
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  return (
    <nav className="w-full bg-gray-900 text-white border-b left-0ss right-0 border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 overflow-hidden py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-3xl font-extrabold text-blue-800">NovaStack</div>
        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          {links.map((l) => (
            <Link
              key={l.name}
              href={l.path}
              className={`${l.path === pathName ? "text-blue-600" : "text-white"}  font-semibold transition `}
            >
              {l.name}
            </Link>
          ))}
        </div>
        <a
          href="#"
          className="py-1 px-3 border border-gray-700 rounded-2xl"
          onClick={handleWhatsAppClick}
        >
          <div className="flex justify-center gap-2 items-center">
            <FaWhatsapp size={30} className="text-green-600" />
            <p className="text-xs md:text-lg text-white">Whatsapp Now</p>
          </div>
        </a>
        {/* Mobile Menu Button */}
        {/* <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="md:hidden text-gray-800 text-xl p-1.5 bg-gray-200 rounded-md"
        >
          {isOpen ? <FaTimes /> : <FaBars size={30} />}
        </button> */}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-sm"
          >
            <div className="flex flex-col px-6 py-6 gap-6">
              {links.map((l) => (
                <Link
                  key={l.name}
                  href={l.path}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-800 font-semibold hover:text-blue-600 transition"
                >
                  {l.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="md:hidden py-4 bg-gray-800 justify-center text-sm flex gap-2 mx-auto">
        {links.map((l) => (
          <Link
            key={l.name}
            href={l.path}
            className={`${l.path === pathName ? "text-blue-600" : "text-white"}  font-semibold transition rounded-md px-3 py-1 border border-gray-600`}
          >
            {l.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
