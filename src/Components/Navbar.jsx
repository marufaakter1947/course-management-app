"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { signOut, useSession } from "next-auth/react";
import { GoHomeFill } from "react-icons/go";
import { AiOutlineBook, AiOutlineInfoCircle } from "react-icons/ai";
import { IoLogIn } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMenuBook } from "react-icons/md";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const { data: session } = useSession();
  const user = session?.user;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const menuRef = useRef();
  const profileRef = useRef();

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        profileRef.current &&
        !profileRef.current.contains(e.target)
      ) {
        setMobileMenuOpen(false);
        setDropdownOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const getValidImage = (url) => {
    if (!url) return "/default-avatar.jpg";
    try {
      const u = new URL(url);
      if (u.hostname === "i.ibb.co.com") {
        u.hostname = "i.ibb.co";
        return u.toString();
      }
      return url;
    } catch {
      return "/default-avatar.jpg";
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Logo"
              width={42}
              height={42}
              className="rounded-full"
            />
            <span className="font-bold text-xl text-[#ac18bc]">CMA</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="flex items-center gap-1 hover:text-[#ac18bc]"
            >
              <GoHomeFill /> Home
            </Link>
            <Link
              href="/courses"
              className="flex items-center gap-1 hover:text-[#ac18bc]"
            >
              <AiOutlineBook /> Courses
            </Link>
            <Link
              href="/my-courses"
              className="flex items-center gap-1 hover:text-[#ac18bc]"
            >
              <MdOutlineMenuBook /> My Courses
            </Link>
            <Link
              href="/about"
              className="flex items-center gap-1 hover:text-[#ac18bc]"
            >
              <AiOutlineInfoCircle /> About
            </Link>
          </div>

          <div className="flex items-center gap-3">
            {user ? (
              <div className="relative" ref={profileRef}>
                <button onClick={() => setDropdownOpen(!dropdownOpen)}>
                  <Image
                    key={user?.email}
                    src={getValidImage(user?.image)}
                    alt="Avatar"
                    width={34}
                    height={34}
                    className="rounded-full"
                  />
                </button>

                {dropdownOpen && (
                  <ul className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg py-2 z-50">
                    <li className="px-4 py-1 text-sm font-bold">{user.name}</li>
                    <li className="px-4 py-1 text-xs text-gray-500">
                      {user.email}
                    </li>
                    <li>
                      <Link
                        href="/add-course"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Add Course
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/manage-courses"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Manage Courses
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={() => signOut({ callbackUrl: "/" })}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 text-purple-600 cursor-pointer"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            ) : (
              <div className="hidden md:flex gap-2">
                <Link
                  href="/login"
                  className="bg-[#ac18bc] text-white px-3 py-1 rounded flex items-center gap-1 cursor-pointer"
                >
                  <IoLogIn /> Login
                </Link>
                <Link
                  href="/register"
                  className="bg-[#ac18bc] text-white px-3 py-1 rounded flex items-center gap-1 cursor-pointer"
                >
                  <FaRegUser /> Register
                </Link>
              </div>
            )}

            {!user && (
              <button
                className="md:hidden text-2xl cursor-pointer"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
              </button>
            )}
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4"
        >
          <Link
            href="/"
            className="block"
            onClick={() => setMobileMenuOpen(false)}
          >
            <GoHomeFill className="inline" /> Home
          </Link>

          <Link
            href="/courses"
            className="block"
            onClick={() => setMobileMenuOpen(false)}
          >
            <AiOutlineBook className="inline" /> Courses
          </Link>

          <Link
            href="/my-courses"
            className="block"
            onClick={() => setMobileMenuOpen(false)}
          >
            <MdOutlineMenuBook className="inline" /> My Courses
          </Link>

          <Link
            href="/about"
            className="block"
            onClick={() => setMobileMenuOpen(false)}
          >
            <AiOutlineInfoCircle className="inline" /> About
          </Link>

          {!user && (
            <div className="flex flex-col gap-2 pt-2">
              <Link
                href="/login"
                className="bg-[#ac18bc] text-white px-3 py-1 rounded text-center"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="bg-[#ac18bc] text-white px-3 py-1 rounded text-center"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
