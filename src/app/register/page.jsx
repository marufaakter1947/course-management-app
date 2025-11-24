"use client";

import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { CircleLoader } from "react-spinners";


export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    
    console.log("Registering:", name, email, password);

    toast.success("Account created! Please login.");
    router.push("/login");
  };

  const handleGoogleLogin = async () => {
    await signIn("google", { callbackUrl: "/" });
  };

  return (
   <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white p-8 sm:p-10 rounded-xl shadow-2xl w-full max-w-sm border border-gray-100">
        <h1 className="text-3xl font-extrabold text-center mb-3 text-gray-800 tracking-tight">
          Register Now
        </h1>

        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ac18bc] focus:border-[#ac18bc] transition duration-150"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ac18bc] focus:border-[#ac18bc] transition duration-150"
            />
          </div>

        
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Enter Your Password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ac18bc] focus:border-[#ac18bc] transition duration-150"
            />
          </div>

        

          <button
            type="submit"
            className={`w-full py-2 text-lg font-semibold rounded-lg transition duration-200 shadow-md 
              ${loading 
                ? 'bg-red-300 text-white cursor-not-allowed' 
                : 'bg-linear-to-r from-[#ac18bc] to-[#b896bc] text-white hover:bg-[#ac18bc] focus:outline-none focus:ring-2 focus:ring-[#ac18bc] focus:ring-offset-2 cursor-pointer'
              }`
            }
            disabled={loading}
          >
            
            {loading ? (
              <span className="flex items-center justify-center">
               <CircleLoader size={20}></CircleLoader>
                Logging in...
              </span>
            ) : "Register"}

          </button>
        </form>
        
        <button
          onClick={handleGoogleLogin}
          className="w-full py-2 mt-2 border border-gray-300 bg-white text-gray-700 font-semibold rounded-lg shadow-sm flex items-center justify-center gap-3 hover:bg-gray-50 transition duration-150 focus:outline-none focus:ring-2 focus:ring-gray-300 cursor-pointer"
          disabled={loading}
        >
          <FcGoogle size={22} /> Continue with Google
        </button>

    
        <p className="text-center text-sm mt-4 text-gray-600">
          Already Have an account?{" "}
          <Link href="/register" className="font-semibold text-[#ac18bc] hover:text-[#ac18bc] transition duration-150 cursor-pointer">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}
