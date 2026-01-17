"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <section className="min-h-screen  pt-10 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-5">
           <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-[#ac18bc] mb-6 text-center"
        >
          Terms Of Services
        </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Please read these terms carefully before using our Course Management App.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-purple-700">
              1. Use of Platform
            </h2>
            <p className="text-gray-600 leading-relaxed">
              You agree to use this platform only for educational purposes and not
              for any unlawful, harmful, or disruptive activities.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-purple-700">
              2. User Accounts
            </h2>
            <p className="text-gray-600 leading-relaxed">
              You are responsible for maintaining the confidentiality of your
              account information and for all activities that occur under your account.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-purple-700">
              3. Course Content
            </h2>
            <p className="text-gray-600 leading-relaxed">
              All courses, videos, and materials are provided for personal learning use only.
              Redistribution or commercial use is strictly prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-purple-700">
              4. Termination
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to suspend or terminate accounts that violate our
              terms or misuse the platform.
            </p>
          </div>

          <div className="border-t pt-6 text-sm text-gray-500">
            Last updated: January 2026
          </div>

        </div>
      </div>
    </section>
  );
}
