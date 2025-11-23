"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { GoHomeFill } from "react-icons/go";
import { AiOutlineBook, AiOutlineInfoCircle } from "react-icons/ai";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMenuBook } from "react-icons/md";
import LogoImg from "../assests/logo.png"; // your logo

export default function Navbar() {
  const { data: session } = useSession();
  const user = session?.user;

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={LogoImg}
              alt="Logo"
              height={40}
              width={40}
              className="rounded-full"
            />
            <span className="font-bold text-xl text-[#ac18bc]">CMA</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="flex items-center gap-1 hover:text-[#ac18bc]">
              <GoHomeFill /> Home
            </Link>
            <Link href="/courses" className="flex items-center gap-1 hover:text-[#ac18bc]">
              <AiOutlineBook /> Courses
            </Link>
            <Link href="/my-courses" className="flex items-center gap-1 hover:text-[#ac18bc]">
             <MdOutlineMenuBook /> My Courses
            </Link>
            <Link href="/about" className="flex items-center gap-1 hover:text-[#ac18bc]">
              <AiOutlineInfoCircle /> About
            </Link>
           
          </div>

          {/* User Dropdown */}
          <div className="flex items-center gap-3">
            {user ? (
              <div className="relative">
                <button
                  className="flex items-center gap-2 btn btn-ghost btn-sm rounded"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <Image
                    src={user.image || "/default-avatar.png"}
                    alt="Avatar"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <span>{user.name}</span>
                </button>

                {dropdownOpen && (
                  <ul className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg py-2 z-50">
                    <li className="px-4 py-1 text-sm font-bold">{user.name}</li>
                    <li className="px-4 py-1 text-xs text-gray-500">{user.email}</li>
                    <li>
                      <Link
                        href="/add-course"
                        className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                      >
                        Add Course
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/manage-courses"
                        className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                      >
                        Manage Courses
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={handleSignOut}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 text-purple-600"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            ) : (
              <div className="flex gap-2">
                <Link
                  href="/login"
                  className="btn btn-sm bg-linear-to-r from-[#ac18bc] to-[#b896bc]   text-white flex gap-1 items-center rounded px-2 py-1"
                >
                  <IoLogIn /> Login
                </Link>
                <Link
                  href="/register"
                  className="btn btn-sm bg-linear-to-r from-[#ac18bc] to-[#b896bc] text-white flex gap-1 items-center rounded px-2 py-1"
                >
                 <FaRegUser /> Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="btn btn-ghost p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden py-2 flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-1 px-4 py-2 hover:bg-gray-100 rounded">
              <GoHomeFill /> Home
            </Link>
            <Link href="/courses" className="flex items-center gap-1 px-4 py-2 hover:bg-gray-100 rounded">
              <AiOutlineBook /> Courses
            </Link>
            <Link href="/my-courses" className="flex items-center gap-1 px-4 py-2 hover:bg-gray-100 rounded">
              My Courses
            </Link>
            <Link href="/about" className="flex items-center gap-1 px-4 py-2 hover:bg-gray-100 rounded">
              About
            </Link>
           

            {user ? (
              <>
                <Link href="/add-course" className="px-4 py-2 hover:bg-gray-100 rounded">
                  Add Course
                </Link>
                <Link href="/manage-courses" className="px-4 py-2 hover:bg-gray-100 rounded">
                  Manage Courses
                </Link>
                <button
                  onClick={handleSignOut}
                  className="px-4 py-2 text-red-600 hover:bg-gray-100 rounded text-left"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="flex flex-col gap-2 px-4 py-2">
                <Link
                  href="/login"
                  className="btn btn-sm bg-linear-to-r from-[#ac18bc] to-[#b896bc] text-white rounded py-1.5 text-center"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="btn btn-sm bg-linear-to-r from-[#ac18bc] to-[#b896bc] text-white rounded py-1.5 text-center"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
