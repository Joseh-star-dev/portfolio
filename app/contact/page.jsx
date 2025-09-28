"use client"
import { useState } from 'react';
import { FaEnvelope, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };
 
    const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
        if (data.success) {
          setSuccess("Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
        } else {
          setSuccess("Failed to send message. Try again.");
        }
     }   catch (err) {
      console.error(err);
      setSuccess("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-gray-900 text-gray-200 p-6 md:p-12 gap-8 md:gap-16">

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-full md:w-1/2 max-w-md bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8"
      >
        <h2 className="font-extrabold text-2xl text-cyan-400 mb-4">Let’s Connect 💬</h2>

         <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="w-full p-3 rounded bg-gray-800 border border-gray-700"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="w-full p-3 rounded bg-gray-800 border border-gray-700"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="4"
            placeholder="Type your message"
            required
            className="w-full p-3 rounded bg-gray-800 border border-gray-700"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-cyan-600 px-6 py-2 rounded-lg hover:bg-cyan-700 transition mt-2"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p
              className={`text-center text-sm mt-2 ${
                success.includes("success") ? "text-green-400" : "text-red-400"
              }`}
            >
              {success}
            </p>
          )}
        </form>
      </motion.div>

      {/* Contact Links */}
      <div className="w-full md:w-1/2 max-w-sm flex flex-col items-center justify-center gap-6 bg-gray-800 rounded-2xl p-6 shadow-lg">
        <a
          href="mailto:josehstar@gmail.com"
          className="flex items-center justify-center space-x-3 hover:text-cyan-400 transition"
        >
          <FaEnvelope className="text-yellow-400 text-xl" />
          <span className="text-sm md:text-base">Email</span>
        </a>

        <a
          href="https://wa.me/254113822842?text=Hi%20Joseph!%20I%20checked%20your%20portfolio%20and%20I%27m%20interested%20in%20working%20with%20you."
          target="_blank"
          className="flex items-center justify-center space-x-3 hover:text-cyan-400 transition"
        >
          <FaWhatsapp className="text-green-500 text-xl" />
          <span className="text-sm md:text-base">WhatsApp</span>
        </a>

        <a
          href="https://github.com/Joseh-star-dev"
          target="_blank"
          className="flex items-center justify-center space-x-3 hover:text-cyan-400 transition"
        >
          <FaGithub className="text-xl" />
          <span className="text-sm md:text-base">GitHub</span>
        </a>
      </div>
    </div>
  )
}
