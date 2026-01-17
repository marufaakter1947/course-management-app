"use client";
import { motion } from "framer-motion";
export default function HowItWorksSection() {
  return (
    <section className=" py-5 bg-linear-to-r from-[#e3bde8] to-[#b896bc] mx-4 rounded-2xl mb-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
         <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold text-[#ac18bc] mb-6 text-center"
                >
                  How It Works
                </motion.h2>
        
        <p className="text-gray-600 mb-14 max-w-2xl mx-auto">
          Start your learning journey with our simple and effective process
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          
          {/* Step 1 */}
          <div className="group  bg-white p-8 rounded-2xl shadow hover:shadow-2xl transition duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-purple-100 text-purple-600 text-2xl font-bold mb-6 group-hover:bg-[#ac18bc] group-hover:text-white transition">
              1
            </div>
            <h3 className="text-xl font-semibold mb-2">Create Account</h3>
            <p className="text-gray-600 text-sm">
              Sign up easily and set up your personal learning profile.
            </p>
          </div>

          {/* Step 2 */}
          <div className="group bg-white p-8 rounded-2xl shadow hover:shadow-2xl transition duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-pink-100 text-pink-600 text-2xl font-bold mb-4 group-hover:bg-pink-600 group-hover:text-white transition">
              2
            </div>
            <h3 className="text-xl font-semibold mb-2">Choose a Course</h3>
            <p className="text-gray-600 text-sm">
              Explore popular courses and pick what fits your goal.
            </p>
          </div>

          {/* Step 3 */}
          <div className="group bg-white p-8 rounded-2xl shadow hover:shadow-2xl transition duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-2xl font-bold mb-4 group-hover:bg-blue-600 group-hover:text-white transition">
              3
            </div>
            <h3 className="text-xl font-semibold mb-2">Start Learning</h3>
            <p className="text-gray-600 text-sm">
              Watch lessons, practice skills, and track progress.
            </p>
          </div>

          {/* Step 4 */}
          <div className="group bg-white p-8 rounded-2xl shadow hover:shadow-2xl transition duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-green-100 text-green-600 text-2xl font-bold mb-4 group-hover:bg-green-600 group-hover:text-white transition">
              4
            </div>
            <h3 className="text-xl font-semibold mb-2">Get Certified</h3>
            <p className="text-gray-600 text-sm">
              Complete the course and receive your certificate.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
