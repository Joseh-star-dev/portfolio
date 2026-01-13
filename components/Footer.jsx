import React from "react";
import Link from "next/link";
import { FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-extrabold text-blue-600">
              NovaStack Digital
            </h3>
            <p className="text-gray-600 mt-4 text-sm leading-relaxed">
              We build fast, SEO-optimized websites and scalable web
              applications using modern technologies to help businesses grow in
              Kenya and beyond.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Web Development</li>
              <li>UI / UX Design</li>
              <li>SEO Optimization</li>
              <li>Web Applications</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Connect</h4>

            <div className="flex gap-4 mb-4">
              <a
                href="https://github.com/Joseh-star-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 text-xl transition"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://wa.me/254113822842?text=Hi%20Joseph!%20I%20checked%20your%20portfolio%20and%20I%27m%20interested%20in%20working%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-500 hover:text-cyan-600 text-xl transition"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>

            <p className="text-sm text-gray-600">
              Available for freelance & contract work.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} NovaStack Digital. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Built with Next.js, React & modern web technologies
          </p>
        </div>
      </div>
    </footer>
  );
}
