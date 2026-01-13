"use client";

import { useState } from "react";
import { FaEnvelope, FaGithub, FaWhatsapp } from "react-icons/fa";
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
        setStatus({ type: "success", message: "Message sent successfully." });
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", message: "Failed to send message." });
      }
    } catch {
      setStatus({ type: "error", message: "Something went wrong." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-white to-blue-50 px-6 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-10"
        >
          <h2 className="text-3xl font-bold text-blue-600 mb-2">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-6">
            Have a project or idea? Let’s discuss how we can work together.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your email"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your message"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p
                className={`text-sm text-center mt-2 ${
                  status.type === "success" ? "text-green-600" : "text-red-500"
                }`}
              >
                {status.message}
              </p>
            )}
          </form>
        </motion.div>

        {/* CONTACT LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-6"
        >
          <ContactLink
            icon={<FaEnvelope />}
            label="Email"
            value="josehstar@gmail.com"
            href="mailto:josehstar@gmail.com"
            color="text-blue-600"
          />

          <ContactLink
            icon={<FaWhatsapp />}
            label="WhatsApp"
            value="+254 113 822 842"
            href="https://wa.me/254113822842"
            color="text-green-600"
          />

          <ContactLink
            icon={<FaGithub />}
            label="GitHub"
            value="Joseh-star-dev"
            href="https://github.com/Joseh-star-dev"
            color="text-gray-800"
          />
        </motion.div>
      </div>
    </section>
  );
}

function ContactLink({ icon, label, value, href, color }) {
  return (
    <a
      href={href}
      target="_blank"
      className="flex items-center gap-4 bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition"
    >
      <div className={`text-2xl ${color}`}>{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-medium text-gray-800">{value}</p>
      </div>
    </a>
  );
}
