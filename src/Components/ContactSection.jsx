"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="py-20 bg-[#f4e6f7]">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Heading */}
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
          <form className="grid grid-cols-1 gap-6">

            <motion.input
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded px-4 py-3 w-full focus:border-[#ac18bc] outline-none"
            />

            <motion.input
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded px-4 py-3 w-full focus:border-[#ac18bc] outline-none"
            />

            <motion.textarea
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              rows="5"
              placeholder="Your Message"
              className="border border-gray-300 rounded px-4 py-3 w-full focus:border-[#ac18bc] outline-none"
            />

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              type="submit"
              className="bg-linear-to-r from-[#ac18bc] to-[#b896bc] text-white py-3 rounded font-semibold hover:bg-[#9112a0] transition"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}
