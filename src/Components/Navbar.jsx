"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { GoHomeFill } from "react-icons/go";
import { AiOutlineBook, AiOutlineInfoCircle } from "react-icons/ai";
import { IoLogIn } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMenuBook } from "react-icons/md";

export default function Navbar() {
  const { data: session } = useSession();
  const user = session?.user;

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const getValidImage = (url) => {
    if (!url) return "/default-avatar.png";
    try {
      const u = new URL(url);

      if (u.hostname === "i.ibb.co.com") {
        u.hostname = "i.ibb.co";
        return u.toString();
      }

      return url;
    } catch {
      return "/default-avatar.png";
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
    width={40}
    height={40}
    className="rounded-full"
  />
  <span className="font-bold text-xl text-[#ac18bc]">CMA</span>
</Link>

         
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="flex items-center gap-1 hover:text-[#ac18bc]"><GoHomeFill /> Home</Link>
            <Link href="/courses" className="flex items-center gap-1 hover:text-[#ac18bc]"><AiOutlineBook /> Courses</Link>
            <Link href="/my-courses" className="flex items-center gap-1 hover:text-[#ac18bc]"><MdOutlineMenuBook /> My Courses</Link>
            <Link href="/about" className="flex items-center gap-1 hover:text-[#ac18bc]"><AiOutlineInfoCircle /> About</Link>
          </div>

        
          <div className="flex items-center gap-3">
            {user ? (
              <div className="relative">
                <button
                  className="flex items-center gap-2"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <Image
                    key={user?.email}
                    src={getValidImage(user?.image)}
                    alt="Avatar"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                 
                </button>

                {dropdownOpen && (
                  <ul className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg py-2 z-50">
                    <li className="px-4 py-1 text-sm font-bold">{user.name}</li>
                    <li className="px-4 py-1 text-xs text-gray-500">{user.email}</li>
                    <li><Link href="/add-course" className="block px-4 py-2 hover:bg-gray-100">Add Course</Link></li>
                    <li><Link href="/manage-courses" className="block px-4 py-2 hover:bg-gray-100">Manage Courses</Link></li>
                    <li>
                      <button 
                        onClick={() => signOut({ callbackUrl: "/" })}
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
                <Link href="/login" className="btn btn-sm bg-[#ac18bc] text-white flex items-center gap-1 px-2 py-1 rounded">
                  <IoLogIn /> Login
                </Link>
                <Link href="/register" className="btn btn-sm bg-[#ac18bc] text-white flex items-center gap-1 px-2 py-1 rounded">
                  <FaRegUser /> Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
