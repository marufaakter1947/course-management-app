"use client";

import { motion } from "framer-motion";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-10 mb-10 bg-[#e3bde8] mx-4 rounded">
      <div className=" px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-[#ac18bc] mb-6 text-center"
        >
          Our Features
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
        
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 150, damping: 12 }}
            className="p-6 bg-[#ead9ec] rounded shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
            <p className="text-gray-600">
              Learn from experienced professionals with real-world expertise.
            </p>
          </motion.div>

          
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 150, damping: 12 }}
            className="p-6 bg-[#ead9ec] rounded shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">Flexible Learning</h3>
            <p className="text-gray-600">
              Access courses online anytime, anywhere, on your own schedule.
            </p>
          </motion.div>

        
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 150, damping: 12 }}
            className="p-6 bg-[#ead9ec] rounded shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">Certification</h3>
            <p className="text-gray-600">
              Receive certificates to showcase your skills to employers.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
