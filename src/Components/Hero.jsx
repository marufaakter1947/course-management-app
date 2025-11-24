"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import HeroBg from "../assets/Hero-bg.png";

export default function Hero() {
  return (
    <section className="relative bg-gray-100">
      <div className="absolute inset-0">
        <Image
          src={HeroBg}
          alt="Hero Background"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-30"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-32 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: [0, -20, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            delay: 0.2,
          }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Learn, Grow & Succeed
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl  mb-8 max-w-xl font-medium "
        >
          Explore thousands of courses, track your progress, and advance your
          career with our easy-to-use Course Management platform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/courses"
            className="px-6 py-3 rounded-lg bg-linear-to-r from-[#ac18bc] to-[#b896bc] text-white font-semibold hover:scale-105 transition-transform"
          >
            Browse Courses
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
