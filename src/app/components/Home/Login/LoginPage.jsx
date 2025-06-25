"use client"; // This directive is required for client-side functionality in App Router components

import Link from "next/link";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import SectionTitle from "@/app/shared/SectionTitle";
import { Checkbox } from "@/components/ui/checkbox";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // New state for password visibility
  const router = useRouter();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    setLoading(true); // Indicate loading state

    // --- Client-side validation ---
    if (!email || !password) {
      setError("Please enter both email and password.");
      toast.error("Please enter both email and password.");
      setLoading(false);
      return;
    }

    // Basic email format validation (can be more robust)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      toast.error("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    // --- Simulate API Call (Replace with your actual backend call) ---
    console.log("Attempting to log in with:", { email, password, rememberMe });

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate network delay

      let success = false;
      let redirectPath = '/';
      let token = ''; // To store the token for setting in cookie

      // --- Simulated Admin Login ---
      if (email === "admin@gmail.com" && password === "Admin@123") {
        console.log("Admin Login successful!");
        toast.success("Admin Login Successful! (Simulated)");
        token = 'ADMIN_TOKEN_SECRET'; // Set admin token
        redirectPath = '/admin'; // Redirect admin to /admin
        success = true;
      }
      // --- Simulated Regular User Login ---
      else if (email === "user@example.com" && password === "password123") {
        console.log("User Login successful!");
        toast.success("User Login Successful! (Simulated)");
        token = 'USER_TOKEN_SECRET'; // Set regular user token
        redirectPath = '/admin'; // This was `/` previously. Changed to `/admin` as per your input.
        success = true;
      }
      // --- Simulated Failed Login ---
      else {
        setError("Invalid email or password. (Simulated)");
        toast.error("Invalid email or password. (Simulated)");
      }

      if (success) {
        document.cookie = `token=${token}; path=/; max-age=${rememberMe ? 60 * 60 * 24 * 30 : 60 * 30}; SameSite=Lax`;
        router.push(redirectPath);
      }

    } catch (err) {
      console.error("Login error:", err);
      setError("An unexpected error occurred. Please try again.");
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false); // End loading state
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-1/3 p-10 border-[#FEFEFECC] shadow rounded-2xl mx-auto border flex flex-col items-center justify-center">
        <div className="text-center my-8">
          <SectionTitle
            heading="Log in to your account"
            subHeading="Please enter your email and password to continue"
          />
        </div>
        <form onSubmit={handleSubmit} className="space-y-6 flex flex-col items-center justify-center">
          <div>
            <label
              htmlFor="email"
              className="block text-[#636363] font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-[450px] h-[51px] p-3 text-[D9D9D9] rounded-lg border border-[#E0E0E0] focus:outline-none focus:ring-2"
              placeholder="Enter your email or username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-[#636363] font-medium mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-[450px] h-[51px] p-3 pr-10 text-[D9D9D9] rounded-[6px] border border-[#E0E0E0] focus:outline-none focus:ring-2"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={handleTogglePassword}
                className="absolute inset-y-0 right-0 pr-3 text-[#232323] flex items-center text-sm leading-5"
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye">
                    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye-off">
                    <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
                    <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
                    <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
                    <path d="M2 2l20 20" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div className="flex justify-between gap-30">
            <div className="flex items-center gap-1">
              <Checkbox id="terms" className="border-[#6DA40A] shadow" />
              <label htmlFor="terms">Remember Password</label>
            </div>
            <Link
              href="/Forgot-Password"
              className="text-[#6DA40A] text-[16px] font-medium"
            >
              Forgot Password?
            </Link>
          </div>
          {error && <p className="text-red-400 text-sm text-center">{error}</p>}
          <Button className="mb-10">Sign In</Button>
        </form>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>

  );
}