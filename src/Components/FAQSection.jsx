"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Is this platform free to use?",
    answer: "Yes, you can access many free courses. Some premium courses may require payment."
  },
  {
    question: "How do I enroll in a course?",
    answer: "Simply create an account, choose a course, and click on the enroll button."
  },
  {
    question: "Will I get a certificate after completing a course?",
    answer: "Yes, after successfully completing a course, you will receive a digital certificate."
  },
  {
    question: "Can I learn at my own pace?",
    answer: "Of course! All courses are self-paced so you can learn anytime, anywhere."
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-5 bg-gray-200 mx-4 rounded-2xl mb-12">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-[#ac18bc] mb-6 text-center"
        >
          Frequently Asked Questions
        </motion.h2>
        <p className="text-center text-gray-600 mb-12">
          Find answers to common questions about our platform
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center p-5">
                <h3 className="font-semibold text-lg">
                  {faq.question}
                </h3>
                <span className="text-2xl font-bold text-purple-600">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden px-5 pb-5 text-gray-600"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
