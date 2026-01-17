"use client";

import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useState } from "react";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // fake API delay
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent successfully!");
      e.target.reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-5 bg-[#f4e6f7] mx-4 rounded">
      <div className="max-w-6xl mx-auto px-4">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#ac18bc] mb-4 text-center"
        >
          Contact Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 max-w-xl mx-auto mb-10"
        >
          Have questions or need help? Feel free to reach out to us anytime.
        </motion.p>

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">

            <motion.input
              required
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded px-4 py-3 w-full focus:border-[#ac18bc] outline-none"
            />

            <motion.input
              required
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded px-4 py-3 w-full focus:border-[#ac18bc] outline-none"
            />

            <motion.textarea
              required
              rows="5"
              placeholder="Your Message"
              className="border border-gray-300 rounded px-4 py-3 w-full focus:border-[#ac18bc] outline-none"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className="bg-linear-to-r from-[#ac18bc] to-[#b896bc] text-white py-3 rounded font-semibold transition cursor-pointer disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>

          </form>
        </div>
      </div>
    </section>
  );
}
