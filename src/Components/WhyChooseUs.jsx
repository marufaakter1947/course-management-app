"use client";

import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-[#f7eefd]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-[#ac18bc] mb-4 text-center"
        >
          Why Choose Our Platform?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center text-gray-600 max-w-2xl mx-auto mb-10"
        >
          We provide the best learning environment to help you achieve your goals with ease.
        </motion.p>

        {/* Cards / reasons */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {/* Card 1 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition text-center"
          >
            <h3 className="text-xl font-semibold mb-2 text-[#ac18bc]">Structured Courses</h3>
            <p className="text-gray-600">
              Our courses are designed step-by-step so you learn effectively without confusion.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition text-center"
          >
            <h3 className="text-xl font-semibold mb-2 text-[#ac18bc]">Affordable Pricing</h3>
            <p className="text-gray-600">
              Get premium-quality courses at the most budget-friendly price.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition text-center"
          >
            <h3 className="text-xl font-semibold mb-2 text-[#ac18bc]">Student Community</h3>
            <p className="text-gray-600">
              Join a strong community of learners and grow together with support.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
