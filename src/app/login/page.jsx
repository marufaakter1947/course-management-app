"use client";

import React, { useState } from "react";
const Link = ({ href, children, className }) => <a href={href} className={className}>{children}</a>;
import { FcGoogle } from "react-icons/fc";
import { CircleLoader } from "react-spinners";

const useRouter = () => ({ push: (path) => console.log('Navigating to:', path) });
const signIn = async (provider, options) => {
  console.log(`Attempting sign in with: ${provider}`);
  if (provider === "credentials") {
    if (options.password === "fail") {
      return { error: "Invalid credentials" };
    }
    return { error: null };
  }
  return { error: null };
};
const toast = {
  error: (msg) => console.error("Toast Error:", msg),
  success: (msg) => console.log("Toast Success:", msg),
};


export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;


    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      toast.error(res.error);
      setLoading(false);
    } else {
      toast.success("Login successful!");
      router.push("/");
    }
  };

  const handleGoogleLogin = async () => {
    await signIn("google", { callbackUrl: "/" });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white p-8 sm:p-10 rounded-xl shadow-2xl w-full max-w-sm border border-gray-100">
        <h1 className="text-3xl font-extrabold text-center mb-3 text-gray-800 tracking-tight">
          Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
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
              placeholder="Password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ac18bc] focus:border-[#ac18bc] transition duration-150"
            />
          </div>

          
          <div className="text-left">
            <Link 
              href="/forgot-password" 
              className="text-sm font-semibold text-[#ac18bc] hover:text-[#ac18bc] transition duration-150 cursor-pointer"
            >
              Forgot password?
            </Link>
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
            ) : "Login"}

          </button>
        </form>
        
        <button
          onClick={handleGoogleLogin}
          className="w-full py-2 mt-2 border border-gray-300 bg-white text-gray-700 font-semibold rounded-lg shadow-sm flex items-center justify-center gap-3 hover:bg-gray-50 transition duration-150 focus:outline-none focus:ring-2 focus:ring-gray-300 cursor-pointer"
          disabled={loading}
        >
          <FcGoogle size={22} /> Continue with Google
        </button>

        {/* Register Link */}
        <p className="text-center text-sm mt-4 text-gray-600">
          Do not Have an account?{" "}
          <Link href="/register" className="font-semibold text-[#ac18bc] hover:text-[#ac18bc] transition duration-150 cursor-pointer">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}