"use client";

import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-[#ac18bc] mb-6 text-center">
        About CMA
      </h1>

      <p className="text-gray-700 text-lg mb-6 text-center">
        Welcome to CMA (Course Management Application)! Our platform helps instructors
        create and manage courses efficiently while providing students with easy access
        to quality education online.
      </p>

      <div className="flex flex-col md:flex-row items-center gap-10 mt-10">
        {/* Image */}
        <div className="relative w-full md:w-1/2 h-64 md:h-96 rounded overflow-hidden shadow-lg">
          <Image
            src="/about-hero.avif"
            alt="About CMA"
            fill
            className="object-cover"
          />
        </div>

        
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold text-[#ac18bc]">
            Our Mission
          </h2>
          <p className="text-gray-700">
            Our mission is to empower educators and learners by providing an intuitive 
            platform for managing courses and tracking progress seamlessly.
          </p>

          <h2 className="text-2xl font-semibold text-[#ac18bc]">
            Why Choose Us
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Easy course creation and management</li>
            <li>Student enrollment tracking</li>
            <li>Responsive design for all devices</li>
            <li>Secure authentication and user management</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
