"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import LogoImg from "../assets/logo.png";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-r from-[#ac18bc] to-[#b896bc] py-10 px-6 rounded-xl mt-20 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Logo & Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Image
              src={LogoImg}
              alt="CMA Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <h3 className="text-lg font-bold ">Course Management App</h3>
          </div>
          <ul className="space-y-2 mt-4">
            <li>
              <Link href="/" className="hover:text-teal-200">Home</Link>
            </li>
            <li>
              <Link href="/courses" className="hover:text-teal-200">Courses</Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-teal-200">Login</Link>
            </li>
          </ul>
        </div>

        {/* Community */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-bold mb-4">Community</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/forums" className="hover:text-teal-200">Discussion Forums</Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-teal-200">Events & Workshops</Link>
            </li>
            <li>
              <Link href="/leaderboard" className="hover:text-teal-200">Leaderboard</Link>
            </li>
            <li>
              <Link href="/resources" className="hover:text-teal-200">Resources</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
          <div className="flex gap-4 mb-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-200"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-200"
            >
              <FaXTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-200"
            >
              <FaInstagram size={24} />
            </a>
          </div>
          <div>
            <a
              href="mailto:contact@cma.com"
              className="flex items-center hover:text-teal-200"
            >
              <Mail size={18} className="mr-2" /> coursemgmt@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-[#fa7171] mt-8 pt-4 text-center text-sm">
        <p>© {currentYear} Course Management App. All Rights Reserved.</p>
        <p className="mt-2">
          <Link href="/privacy" className="hover:text-teal-200 mr-3">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-teal-200">Terms of Service</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
