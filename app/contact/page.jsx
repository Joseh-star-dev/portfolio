"use client";
import { useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent.",
        });
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: "Failed to send message. Please try again.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Something went wrong. Please check your connection.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full min-h-screen bg-white text-slate-900 px-6 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Section for SEO */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-600 font-black uppercase tracking-[0.3em] text-xs block mb-4"
          >
            Connect With Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-900"
          >
            Let’s Build the <span className="text-blue-700">Future.</span>
          </motion.h1>
          <p className="text-slate-500 mt-6 max-w-2xl mx-auto text-lg">
            Ready to scale your business with **JMM Labs**? Fill out the form or
            reach out through our official channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          {/* LEFT: CONTACT LINKS (Col 2/5) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <h2 className="text-2xl font-black text-slate-900 mb-8">
              Contact Information
            </h2>

            <ContactLink
              icon={<FaEnvelope />}
              label="Email Us"
              value="josehstar@gmail.com"
              href="mailto:josehstar@gmail.com"
              color="bg-blue-50 text-blue-700"
            />
            <ContactLink
              icon={<FaWhatsapp />}
              label="WhatsApp"
              value="+254 113 822 842"
              href="https://wa.me/254113822842"
              color="bg-green-50 text-green-600"
            />
            <ContactLink
              icon={<FaGithub />}
              label="Engineering Portfolio"
              value="Joseh-star-dev"
              href="https://github.com/Joseh-star-dev"
              color="bg-slate-100 text-slate-900"
            />
            <ContactLink
              icon={<FaMapMarkerAlt />}
              label="Location"
              value="Nairobi, Kenya"
              href="#"
              color="bg-red-50 text-red-600"
            />

            <div className="mt-12 p-8 bg-slate-900 rounded-3xl text-white">
              <h4 className="font-bold text-lg mb-2 text-blue-400">
                Business Hours
              </h4>
              <p className="text-slate-400 text-sm">
                Mon — Fri: 9:00 AM - 6:00 PM (EAT)
              </p>
              <p className="text-slate-400 text-sm mt-1">
                Available for emergency support 24/7.
              </p>
            </div>
          </motion.div>

          {/* RIGHT: CONTACT FORM (Col 3/5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white border border-slate-100 shadow-2xl shadow-slate-200/50 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden"
          >
            {/* Status Messages */}
            {status && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-6 p-4 rounded-xl text-center font-bold ${
                  status.type === "success"
                    ? "bg-green-50 text-green-700"
                    : "bg-red-50 text-red-700"
                }`}
              >
                {status.message}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400 ml-1">
                    Full Name
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400 ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-slate-400 ml-1">
                  Project Details
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Tell us about your project or inquiry..."
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full group flex items-center justify-center gap-3 bg-red-600 text-white font-black py-5 rounded-2xl hover:bg-blue-700 transition-all duration-300 disabled:opacity-60 shadow-xl shadow-red-600/20 uppercase tracking-widest text-sm"
              >
                {loading ? (
                  "Transmitting..."
                ) : (
                  <>
                    <span>Send Message</span>
                    <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactLink({ icon, label, value, href, color }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-5 bg-white border border-slate-50 rounded-2xl p-5 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group"
    >
      <div
        className={`text-xl p-4 rounded-xl transition-colors duration-300 ${color}`}
      >
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-black uppercase text-slate-400 tracking-wider mb-0.5">
          {label}
        </p>
        <p className="font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
          {value}
        </p>
      </div>
    </a>
  );
}
