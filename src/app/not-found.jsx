// app/not-found.js
"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-6xl font-bold text-[#ac18bc] mb-4">404</h1>
      <p className="text-xl mb-6 text-gray-700">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-[#ac18bc] text-white rounded-lg hover:bg-[#b896bc]"
      >
        Go Back Home
      </Link>
    </div>
  );
}
