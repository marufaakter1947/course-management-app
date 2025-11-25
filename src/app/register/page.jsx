"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { CircleLoader } from "react-spinners";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const imageUrl = e.target.imageUrl.value;

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_BASE}/auth/register`, {
        name,
        email,
        password,
        image: imageUrl,
      });

      toast.success("Registration complete!");

      await signIn("credentials", {
        email,
        password,
        redirect: true,
        callbackUrl: "/",
      });
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");

      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await signIn("google", { callbackUrl: "/" });
    } catch {
      toast.error("Google login failed");
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white p-8 sm:p-10 rounded-xl shadow-2xl w-full max-w-sm border border-gray-100">
        <h1 className="text-3xl font-extrabold text-center mb-3 text-gray-800 tracking-tight">
          Register Now
        </h1>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter Your Name"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ac18bc]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter Your Email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ac18bc]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter Your Password"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ac18bc]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 text-lg font-semibold rounded-lg text-white cursor-pointer ${
              loading
                ? "bg-[#b896bc] cursor-not-allowed"
                : "bg-[#ac18bc] hover:bg-[#b896bc]"
            }`}
          >
            {loading ? <CircleLoader size={20} /> : "Register"}
          </button>
        </form>

        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full py-2 mt-2 border border-gray-300 bg-white text-gray-700 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 cursor-pointer"
        >
          <FcGoogle size={22} /> Continue with Google
        </button>

        <p className="text-center text-sm mt-4 text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-[#ac18bc] hover:text-[#ac18bc]"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
