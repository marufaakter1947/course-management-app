"use client";
import { motion } from "framer-motion";
export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </motion.h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect,
            use, and protect your personal information.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-purple-700">
              1. Information We Collect
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may collect personal information such as your name, email address,
              and learning activity to improve our services and personalize your
              learning experience.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-purple-700">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Your information helps us deliver courses, improve platform features,
              communicate updates, and provide better support services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-purple-700">
              3. Data Security
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We use appropriate technical and organizational security measures
              to protect your data from unauthorized access, loss, or misuse.
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
